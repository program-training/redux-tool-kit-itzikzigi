import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AnimalType = "Dog" | "Wolf" | "Fox" | "Cat" | "Tiger" | "Lion";

interface AnimalState {
  value: string | AnimalType;
}

const initialState: AnimalState = {
  value: "",
};

export const animalSlice = createSlice({
  name: "Animal",
  initialState: initialState,
  reducers: {
    setAnimal(state, action: PayloadAction<AnimalState>) {
      state.value = action.payload.value;
      return state;
    },
  },
});

export const { setAnimal } = animalSlice.actions;
export default animalSlice.reducer;
