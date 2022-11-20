import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orders as ordersMock } from "../mock/orders";

const ORDERS_LOADING_DELAY = 2000;

export const loadOrders = createAsyncThunk("loadOrders", async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(ordersMock), ORDERS_LOADING_DELAY);
  });
});

const initialState = {
  ordersData: [],
  isLoading: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrder: (state, { payload: { id, fields } }) => {
      const order = state.ordersData.find((order) => order.id === id);
      Object.keys(fields).forEach((key) => {
        order[key] = fields[key];
      });
    },
    addOrder: (state, action) => {
      state.ordersData.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.ordersData = state.ordersData.filter(
        (order) => order.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ordersData = action.payload;
      });
  },
});

export const { addOrder, removeOrder, updateOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
