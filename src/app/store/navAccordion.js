import { create } from "zustand";
export const UseAccordionStore = create((set) => ({
    isIndex: null,
  setIsIndex: (newIndex) => set(() => ({ isIndex:newIndex  })),
}));