import { createSlice } from "@reduxjs/toolkit";
import { orders } from "./orders";

const initialState = orders;

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      return [...state, action.payload];
    },
    removeOrder: (state, action) => {
      return state.filter((order) => order.id !== action.payload);
    },
  },
});

export const { addOrder, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
