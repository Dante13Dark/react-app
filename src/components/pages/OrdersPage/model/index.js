import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orders from "./orders/ordersSlice";
import filters from "./ordersFilter/ordersFilterSlice";

export const store = configureStore({
  reducer: combineReducers({
    orders,
    filters,
  }),
});
