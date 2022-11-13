import { createSlice } from "@reduxjs/toolkit";
import { orders } from "../mock/orders";

const initialState = {
  allOrders: orders,
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
  },
});

export const { addOrder, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
