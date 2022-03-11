import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'pages/main/models'

const initialState: Category = {
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
