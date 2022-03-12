import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReducer from 'mainSlice'

const rootReducers = {
  main: mainReducer,
}

export const reducers = combineReducers({
  ...rootReducers,
});

export type RootState = ReturnType<typeof reducers>

export const store = configureStore({
  reducer: rootReducers,
})

export type AppDispatch = typeof store.dispatch

export default store
