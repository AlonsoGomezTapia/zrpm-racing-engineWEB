# ZRPM Racing Engine — Plataforma Web Motorsport Oficial

Plataforma web de alto rendimiento y comercio técnico desarrollada a medida para **ZRPM Racing Engine**, taller líder en preparación y potenciación de vehículos de competición en Santiago de Chile.

**Ubicación:** Victoria 8766, La Cisterna, Santiago  
**WhatsApp Oficial:** +56 9 9055 0474  
**Sitio Web:** [https://zrpm.cl](https://zrpm.cl)  
**Instagram:** [@zrpm_racing_engines](https://www.instagram.com/zrpm_racing_engines/)

---

## 🛠️ Stack Tecnológico

* **Framework:** Next.js 15 (App Router, Server & Client Components, SSG pre-rendering).
* **Lenguaje:** TypeScript 5.8 (modo estricto).
* **Estilos:** Tailwind CSS 3.4 (paleta Motorsport Dark `#08080A`, contrastes neón racing `#EF4444`, tipografías técnicas `Oxanium`, `Inter`, `JetBrains Mono`).
* **Iconografía:** Lucide React (100% iconos SVG limpios, sin emojis como elementos de interfaz).
* **Gestión de Estado:** Zustand 5 con sincronización local (`localStorage`) para el Garaje Virtual (`useGarageStore`) y Carrito de Cotización (`useCartStore`).
* **Base de Datos & ORM:** Prisma ORM 6.4.1 con SQLite portable (`prisma/dev.db`) y compatibilidad directa con PostgreSQL/MySQL/Supabase vía `.env`.
* **Validaciones:** Zod 3.24 con validación estricta de RUT chileno (Módulo 11) y teléfonos nacionales (+56).
* **SEO & Metadatos:** Generador dinámico de `sitemap.xml`, `robots.txt`, tarjetas OpenGraph / Twitter Cards y microdatos estructurados Schema.org (`AutoRepair`, `AutoPartsStore`, `Product`).

---

## 🚗 Flota Vehicular ZRPM (100% Fotografía Real)

La plataforma cuenta con 12 plataformas automotrices con fotografías tomadas directamente en el taller y pistas de competición:

1. **Ford Mustang S197 II (2011–2014):** Coyote 5.0L Gen 1 V8 (`/images/cars/mustang-s197.jpg`).
2. **Ford Mustang S550 Pre-Facelift (2015–2017):** Coyote 5.0L Gen 2 V8 (`/images/cars/mustang-s550-pre.jpg`).
3. **Ford Mustang S550 Facelift (2018–2023):** Bi-Turbo 1.000+ HP con salidas Hood-Exit (`/images/cars/mustang-biturbo.jpg`).
4. **Ford Mustang Mach 1 5.0L (2021–2023):** Mach 1 Coyote con caja Tremec (`/images/cars/mustang-mach1.jpg`).
5. **Ford F-150 Coyote (2015–2023):** Camioneta de cuarto de milla con capó Cobra y patente chilena KF LW 33 (`/images/cars/ford-f150.jpg`).
6. **Chevrolet Camaro SS Gen 5 (2010–2015):** Bloque LS3 / L99 V8 con capó de carbono (`/images/cars/camaro-ss.jpg`).
7. **Chevrolet Camaro SS Gen 6 (2016–2022):** Bloque LT1 6.2L V8 blanco en taller (`/images/cars/camaro-gen6.jpg`).
8. **Chevrolet Corvette C7 Z06 (2015–2019):** LT4 Supercharged forjado 1.000 HP (`/images/cars/corvette-z06.jpg`).
9. **Dodge Challenger SRT8 / 392 (2008–2023):** HEMI 6.4L V8 Scat Pack / SRT8 (`/images/cars/challenger-srt8.jpg`).
10. **Dodge Charger R/T & SRT (2015–2023):** HEMI 5.7L / 6.4L V8 drag strip (`/images/cars/charger-rt.jpg`).
11. **Jeep Grand Cherokee SRT 6.4L (2012–2021):** HEMI 6.4L 4x4 bajo toldo oficial (`/images/cars/jeep-srt.jpg`).
12. **Jeep Grand Cherokee Trackhawk (2018–2021):** Hellcat 6.2L Supercharged 707 HP (`/images/cars/jeep-trackhawk.jpg`).

---

## 🏁 Características Principales

* **Buscador de Vehículos & Garaje Virtual:** Wizard interactivo de 3 pasos (Marca > Modelo > Versión) que guarda el vehículo del usuario en el navegador y filtra automáticamente las piezas compatibles.
* **Catálogo Técnico con Filtros Reactivos:** Búsqueda en tiempo real por texto, marca de competición (Hellion, Whipple, Roush, Steeda, Brembo, JLT, NGK), categoría de modificación y generación vehicular.
* **Fichas de Producto de Ingeniería:** Galería interactiva con zoom, selector de cantidad, compatibilidad en tiempo real con el Garaje Virtual, desglose técnico de 4 pestañas y cálculo de ahorro en pesos chilenos (CLP).
* **Carrito & Cotización Adaptada a Chile:**
  * Métodos de entrega: Retiro gratuito en taller La Cisterna (Victoria 8766) o Despacho por pagar a regiones vía Starken / Chilexpress.
  * Desglose financiero transparente: Subtotal Neto, IVA (19%) y Total en CLP.
  * Modal de Cotización Formal: Validación estricta de RUT chileno (Módulo 11) y almacenamiento persistente en base de datos SQLite con folio oficial `ZRPM-COT-XXXXXX`.
  * Integración con WhatsApp: Redirección con mensaje preformateado y detalle de ítems al +56 9 9055 0474.
* **Centro de Contacto & Agendamiento:** Formulario con selector de servicio (Dinamómetro, Reprogramación, Sobrealimentación), mapa interactivo motorsport centrado en Victoria 8766 y persistencia en base de datos con folio `ZRPM-SOL-XXXXXX`.

---

## 💻 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
pnpm run dev

# Compilar para producción (SSG + Server Components)
pnpm run build

# Iniciar servidor de producción
pnpm run start

# Sincronizar esquema con la base de datos (SQLite / dev.db)
pnpm run db:push

# Regenerar cliente Prisma Client
pnpm run db:generate

# Sembrar la base de datos con flota ZRPM, categorías y productos
pnpm run db:seed

# Abrir explorador visual de base de datos Prisma Studio
pnpm run db:studio
```

---

## 🚀 Despliegue en Producción

### Opción A: Vercel (Recomendada para Serverless)
1. Conectar el repositorio de GitHub en Vercel.
2. Configurar la variable de entorno:
   * `DATABASE_URL`: URL de conexión (PostgreSQL, Supabase o Neon para entornos serverless).
   * `NEXT_PUBLIC_SITE_URL`: `https://zrpm.cl`
3. En el Build Command, configurar: `prisma generate && next build`.

### Opción B: Servidor Propio (VPS Linux con Docker o PM2)
1. Clonar el repositorio y configurar `.env`:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXT_PUBLIC_SITE_URL="https://zrpm.cl"
   NODE_ENV="production"
   ```
2. Ejecutar instalación y compilación:
   ```bash
   pnpm install
   pnpm run db:push
   pnpm run db:seed
   pnpm run build
   ```
3. Iniciar con PM2:
   ```bash
   pm2 start npm --name "zrpm-web" -- start
   ```

---

*Desarrollado para ZRPM Racing Engine — Pasión, Ingeniería y Potencia Automotriz.*