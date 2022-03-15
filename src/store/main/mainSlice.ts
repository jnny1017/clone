import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainInitialState } from './main.model';
import { fetchRandomCollectionData } from './main.thunks';

const initialState: MainInitialState = {
  code: '772',
  randomCollectionData: {
    randomCollectionDataResponse: {},
    randomCollectionData2Respons: {},
  },
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRandomCollectionData.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { updateCode } = mainSlice.actions;

export default mainSlice.reducer;
