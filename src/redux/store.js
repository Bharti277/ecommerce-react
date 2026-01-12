import { configureStore } from "@reduxjs/toolkit";
import ecommerce from "./ecomSlice";

export const store = configureStore({
  reducer: {
    ecom: ecommerce,
  },
});
