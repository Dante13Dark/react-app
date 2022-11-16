import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orders from "./orders/ordersSlice";
import filters from "./ordersFilter/ordersFilterSlice";
import ordersForm from "./ordersForm/ordersFormSlice";

export const store = configureStore({
  reducer: combineReducers({
    orders,
    filters,
    ordersForm,
  }),
});
