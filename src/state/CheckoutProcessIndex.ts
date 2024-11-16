import { create } from "zustand";

interface StateType {
  CurrentIndex: any; 
  setNextCurrentIndex: () => void; 
  setPrevCurrentIndex: () => void; 

}

export const useSetCheckoutIndex = create<StateType>((set) => ({
  CurrentIndex: 0,
  setNextCurrentIndex: () =>
    set((state) => ({
      CurrentIndex:state.CurrentIndex+1,
    })),

  setPrevCurrentIndex: () =>
    set((state) => ({
      CurrentIndex:state.CurrentIndex-1,
    })),
}));
  