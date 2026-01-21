import { createSlice } from "@reduxjs/toolkit";

const ecomSlice = createSlice({
  name: "ecommerce",
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { setProducts, addToCart } = ecomSlice.actions;
export default ecomSlice.reducer;
