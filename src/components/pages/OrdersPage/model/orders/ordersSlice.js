import { createSlice } from "@reduxjs/toolkit";
import { orders } from "../mock/orders";

const initialState = {
  allOrders: orders,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrder: (state, { payload: { id, key, value } }) => {
      const order = state.allOrders.find((order) => order.id === id);
      order[key] = value;
    },
    addOrder: (state, action) => {
      state.allOrders.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.allOrders = state.allOrders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const { addOrder, removeOrder, updateOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
