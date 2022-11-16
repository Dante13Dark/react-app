import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

export const ordersFormSlice = createSlice({
  name: "ordersForm",
  initialState,
  reducers: {
    addSelectedIDs: (state, action) => {
      state.selectedIDs.push(action.payload);
    },
    removeSelectedIDs: (state, action) => {
      state.selectedIDs = state.selectedIDs.filter(
        (id) => id !== action.payload
      );
    },
    clearSelectedIDs: (state) => {
      state.selectedIDs = initialState.selectedIDs;
    },
  },
});

export const { addSelectedIDs, removeSelectedIDs, clearSelectedIDs } =
  ordersFormSlice.actions;

export default ordersFormSlice.reducer;
