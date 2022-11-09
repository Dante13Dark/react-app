import { createSlice } from "@reduxjs/toolkit";
import { orders } from "./orders";

const initialState = {
  allOrders: orders,
  page: 1,
  pageLimit: 15,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.allOrders.push(action.payload);
    },
    removeOrder: (state, action) => {
      return state.allOrders.filter((order) => order.id !== action.payload);
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setPageLimit: (state, action) => {
      state.pageLimit = action.payload;
    },
  },
});

export const { addOrder, removeOrder, setCurrentPage } = ordersSlice.actions;

export default ordersSlice.reducer;
