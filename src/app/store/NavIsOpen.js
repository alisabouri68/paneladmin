import { create } from "zustand";
export const UseNaveOpenStore = create((set) => ({
    isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen:!state.isOpen  })),
}));