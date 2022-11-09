import { createSlice } from "@reduxjs/toolkit";

const filters = {
  dateFromValue: "",
  dateToValue: "",
  statusValues: [],
  amountFromValue: "",
  amountToValue: "",
};

const initialState = {
  searchValue: "",
  selectedFilters: filters,
  activeFilters: filters,
  sort: {
    sortType: "date",
    isSortAscending: true,
  },
};

export const ordersFilterSlice = createSlice({
  name: "ordersFilter",
  initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sort.sortType = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sort.isSortAscending = action.payload;
    },
    applyFilters: (state) => {
      state.activeFilters = state.selectedFilters;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    resetSearchValue(state) {
      state.searchValue = "";
    },
    changeDateFromValue(state, action) {
      state.selectedFilters.dateFromValue = action.payload;
    },
    resetDateFromValue(state) {
      state.selectedFilters.dateFromValue = "";
    },
    changeDateToValue(state, action) {
      state.selectedFilters.dateToValue = action.payload;
    },
    resetDateToValue(state) {
      state.selectedFilters.dateToValue = "";
    },
    changeStatusValue(state, action) {
      state.selectedFilters.statusValues =
        state.selectedFilters.statusValues.includes(action.payload)
          ? state.selectedFilters.statusValues.filter(
              (item) => item !== action.payload
            )
          : [...state.selectedFilters.statusValues, action.payload];
    },
    changeAmountFromValue(state, action) {
      state.selectedFilters.amountFromValue = action.payload;
    },
    resetAmountFromValue(state) {
      state.selectedFilters.amountFromValue = "";
    },
    changeAmountToValue(state, action) {
      state.selectedFilters.amountToValue = action.payload;
    },
    resetAmountToValue(state) {
      state.selectedFilters.amountToValue = "";
    },
    resetFilters(state) {
      state.searchValue = "";
      state.selectedFilters = filters;
      state.activeFilters = filters;
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
  applyFilters,
  setSortType,
  setSortDirection,
} = ordersFilterSlice.actions;

export default ordersFilterSlice.reducer;
