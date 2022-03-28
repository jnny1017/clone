import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReducer from './main/mainSlice';
import cartReducer from './cart/cartSlice';

const rootReducers = {
  main: mainReducer,
  cart: cartReducer,
};

export const reducers = combineReducers({
  ...rootReducers,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
