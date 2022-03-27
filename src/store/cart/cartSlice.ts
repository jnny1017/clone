import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartInfo } from '../cart/cart.model';
import { CartInitialState } from './cart.model';

const initialState: CartInitialState = {
  cartInfo: {
    list_image_url: '',
    name: '',
    original_price: 0,
    count: 0,
  },
  updatedCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateAddCart: (state, action: PayloadAction<CartInfo>) => {
      state.cartInfo = action.payload;
    },
    updateCartItemNum: (state, action: PayloadAction<number>) => {
      state.updatedCount = action.payload;
    },
  },
});

export const { updateAddCart, updateCartItemNum } = cartSlice.actions;

export default cartSlice.reducer;
