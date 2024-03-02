import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IInitialState {
  searchText: string;
}

// Define the initial state using that type
const initialState: IInitialState = {
  searchText: "",
};

export const filterSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    handleSearch: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { handleSearch } = filterSlice.actions;

export default filterSlice.reducer;
