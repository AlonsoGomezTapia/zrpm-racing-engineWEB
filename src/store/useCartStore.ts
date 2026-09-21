"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product, CartItem } from "@/types";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotalCLP: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product: Product, quantity: number = 1) => {
        const safeQty = Math.max(1, Math.min(50, Math.floor(Number(quantity)) || 1));
        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.product.id === product.id);
          if (existingIndex > -1) {
            const newItems = [...state.items];
            const maxAllowed = product.stock || 50;
            newItems[existingIndex].quantity = Math.min(maxAllowed, newItems[existingIndex].quantity + safeQty);
            return { items: newItems, isOpen: true };
          }
          return { items: [...state.items, { product, quantity: safeQty }], isOpen: true };
        });
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        const parsed = Math.floor(Number(quantity));
        if (isNaN(parsed) || parsed <= 0) {
          get().removeItem(productId);
          return;
        }
        const safeQty = Math.min(50, parsed);
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity: safeQty } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotalCLP: () => {
        return get().items.reduce(
          (total, item) => total + item.product.priceCLP * item.quantity,
          0
        );
      },
    }),
    {
      name: "zrpm-cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);
