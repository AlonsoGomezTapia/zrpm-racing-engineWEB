/**
 * Security utilities for ZRPM Racing Engine web platform
 * Sanitization, Rate Limiting, and Anti-Abuse
 */

/**
 * Strips HTML tags and removes malicious script patterns
 */
export function sanitizeInput(input: unknown): string {
  if (typeof input !== "string") return "";
  
  return input
    // Remove null bytes
    .replace(/\0/g, "")
    // Remove script tags and their content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    // Strip any HTML tags
    .replace(/<[^>]+>/g, "")
    // Trim whitespace
    .trim();
}

/**
 * In-memory sliding rate limiter per IP address
 */
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Garbage collect expired entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }, 5 * 60 * 1000).unref?.();
}

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowSeconds: number = 60
): { allowed: boolean; remaining: number; resetSeconds: number } {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1, resetSeconds: windowSeconds };
  }

  if (record.count >= maxRequests) {
    const resetSeconds = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, resetSeconds };
  }

  record.count += 1;
  const resetSeconds = Math.ceil((record.resetTime - now) / 1000);
  return { allowed: true, remaining: maxRequests - record.count, resetSeconds };
}
