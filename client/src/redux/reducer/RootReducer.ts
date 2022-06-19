import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface typeState {
  currentCategory: string;
}

const initialState: typeState = {
  currentCategory: "",
};

export const RootReducer = createSlice({
  name: "CategoryID",
  initialState,
  reducers: {
    //no se necesitan mas actions aparte, se hace todo acaaaa
    GET_CATEGORY: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { GET_CATEGORY } = RootReducer.actions;

export default RootReducer.reducer;
