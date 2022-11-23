import { createSlice } from "@reduxjs/toolkit";

export const PAGE_LIMIT = 30;

const initialState = {
  page: 1,
  searchValue: "",
  filters: {
    dateFrom: "",
    dateTo: "",
    statusValues: [],
    amountFrom: "",
    amountTo: "",
  },
  sort: {
    sortField: "date",
    isSortAscending: true,
  },
};

export const ordersFilterSlice = createSlice({
  name: "ordersFilter",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
    setSortField: (state, action) => {
      state.sort.sortField = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sort.isSortAscending = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setCurrentPage,
  setSearchValue,
  setFilter,
  resetFilters,
  setSortField,
  setSortDirection,
} = ordersFilterSlice.actions;

export default ordersFilterSlice.reducer;
