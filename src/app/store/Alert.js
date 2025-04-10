import { create } from "zustand";
export const UseAlertStore = create((set)=>({
    isAlert:false,
    alertContent:"",
    alertColor:"",
    setIsAlert:()=>set((state)=>({isAlert:!state.isAlert})),
    setAlertContent:(newContent)=>set(()=>({alertContent:newContent})),
    setAlertColor:(newColor)=>set(()=>({alertColor:newColor})),
    

}))