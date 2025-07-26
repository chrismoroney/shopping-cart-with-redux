import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.cart.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.total += product.price;
      } else {
        state.cart.push({ product, quantity: 1 });
        state.total += product.price;
      }
    },
    removeOneFromCart(state, action) {
      const productId = action.payload;
      const existingItem = state.cart.find(item => item.product.id === productId);
      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.total -= existingItem.product.price;
      } else {
        state.cart = state.cart.filter(item => item.product.id !== productId);
        state.total -= existingItem.product.price;
      }
    },
    removeAllFromCart(state, action) {
      const productId = action.payload;
      const filteredCart = state.cart.filter(item => item.product.id !== productId);
      state.total = filteredCart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
      state.cart = filteredCart;
    },
  },
});

export const {
  addToCart,
  removeOneFromCart,
  removeAllFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
