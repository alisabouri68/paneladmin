import { create } from "zustand";
export const UseModalStore = create((set) => ({
  isModal: false,
  setIsModal: (newstate) => set(() => ({ isModal: newstate })),
}));
