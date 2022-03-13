import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReducer from 'store/mainSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducers = {
  main: mainReducer,
}

export const reducers = combineReducers({
  ...rootReducers,
});

export const store = configureStore({
  reducer: rootReducers,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
