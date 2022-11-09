import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  dateFromValue: "",
  dateToValue: "",
  statusValues: [],
  amountFromValue: "",
  amountToValue: "",
};

export const ordersFilterSlice = createSlice({
  name: "ordersFilter",
  initialState,
  reducers: {
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    resetSearchValue(state) {
      state.searchValue = "";
    },
    changeDateFromValue(state, action) {
      state.dateFromValue = action.payload;
    },
    resetDateFromValue(state) {
      state.dateFromValue = "";
    },
    changeDateToValue(state, action) {
      state.dateToValue = action.payload;
    },
    resetDateToValue(state) {
      state.dateToValue = "";
    },
    changeStatusValue(state, action) {
      state.statusValues = state.statusValues.includes(action.payload)
        ? state.statusValues.filter((item) => item !== action.payload)
        : [...state.statusValues, action.payload];
    },
    changeAmountFromValue(state, action) {
      state.amountFromValue = action.payload;
    },
    resetAmountFromValue(state) {
      state.amountFromValue = "";
    },
    changeAmountToValue(state, action) {
      state.amountToValue = action.payload;
    },
    resetAmountToValue(state) {
      state.amountToValue = "";
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  changeSearchValue,
  resetSearchValue,
  changeDateFromValue,
  resetDateFromValue,
  changeDateToValue,
  resetDateToValue,
  changeStatusValue,
  changeAmountFromValue,
  resetAmountFromValue,
  changeAmountToValue,
  resetAmountToValue,
  resetFilters,
} = ordersFilterSlice.actions;

export default ordersFilterSlice.reducer;
