import { create } from "zustand";
export const UseModalStore = create((set) => ({
  isModal: true,
  setIsModal: (newstate) => set(() => ({ isModal: newstate })),
}));
