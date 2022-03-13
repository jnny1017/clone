import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from 'pages/main/models'

const initialState: Category = {
  code: '772'
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateCode: (state, action: PayloadAction<string>)  => {
      state.code = action.payload
    },
  },
})

export const { updateCode } = mainSlice.actions

export default mainSlice.reducer
