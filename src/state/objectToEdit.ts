import { create } from "zustand";

interface StateType {
  objectToEdit: any; 
  setObjectToEdit: (data: any | ((prevData: any) => any)) => void; 
}

export const useObjectToEdit = create<StateType>((set) => ({
  objectToEdit: null,
  setObjectToEdit: (data) =>
    set((state) => ({
      objectToEdit: typeof data === "function" ? data(state.objectToEdit) : data,
    })),
}));
