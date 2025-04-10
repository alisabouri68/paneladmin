import { create } from "zustand";
import { persist } from "zustand/middleware";
export const UseThemeStore = create((persist((set)=>({
    isDark:false,
    setIsDark:()=>set((state)=>({isDark:!state.isDark}))
}),
{
    name:"theme"
}

)))