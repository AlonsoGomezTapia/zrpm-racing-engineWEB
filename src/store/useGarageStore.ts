"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { SelectedVehicle } from "@/types";

interface GarageStore {
  selectedVehicle: SelectedVehicle | null;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setVehicle: (vehicle: SelectedVehicle) => void;
  clearVehicle: () => void;
}

export const useGarageStore = create<GarageStore>()(
  persist(
    (set) => ({
      selectedVehicle: null,
      isModalOpen: false,

      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),
      setVehicle: (vehicle: SelectedVehicle) =>
        set({ selectedVehicle: vehicle, isModalOpen: false }),
      clearVehicle: () => set({ selectedVehicle: null }),
    }),
    {
      name: "zrpm-garage-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ selectedVehicle: state.selectedVehicle }),
    }
  )
);
