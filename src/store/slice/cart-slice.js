import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cardItem.push(action.payload);
    },
    removeFromCart(state, action) {
      console.log(action.payload);
      state.cardItem = state.cardItem.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
