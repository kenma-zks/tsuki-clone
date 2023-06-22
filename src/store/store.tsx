import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import SalesProductSlice from "./SalesProductSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    salesProducts: SalesProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
