import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: "auth-storage",
    //   storage: {
    //     getItem: (name) => localStorage.getItem(name),
    //     setItem: (name, value) => localStorage.setItem(name, value),
    //     removeItem: (name) => localStorage.removeItem(name),
    //   },
    }
  )
);