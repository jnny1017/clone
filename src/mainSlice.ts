import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CategoryState {
  code: string
}

const initialState: CategoryState = {
  code: ''
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>)  => {
      state.code = action.payload
    },
  },
})

export const { filter } = mainSlice.actions

export default mainSlice.reducer
