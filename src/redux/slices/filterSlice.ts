import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IInitialState {
  searchText: string;
  isFilterByApproval: boolean;
}

// Define the initial state using that type
const initialState: IInitialState = {
  searchText: "",
  isFilterByApproval: false,
};

export const filterSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    handleSearch: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    handleFilterByApproval: (state,action: PayloadAction<boolean>) => {
      state.isFilterByApproval = action.payload;
    }
  }
});

export const { handleSearch, handleFilterByApproval } = filterSlice.actions;

export default filterSlice.reducer;
