import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainInitialState } from './main.model';
import { fetchRandomCollectionData } from './main.thunks';

const initialState: MainInitialState = {
  code: '772',
  randomCollectionData: {
    id: 0,
    title: '',
    subtitle: '',
    additional_text: null,
    template_code: '',
    template_type: '',
    event_code: '',
    data: {
      collection_code: '',
      has_more: true,
      products: [
        {
          no: 0,
          name: '',
          short_description: '',
          list_image_url: '',
          original_price: 0,
          discounted_price: 0,
          discount_rate: 0,
          is_sold_out: false,
          sold_out_title: '',
          sold_out_text: '',
          sticker: null,
        },
      ],
    },
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
      state.randomCollectionData = {
        randomCollectionDataResponse:
          action.payload.randomCollectionDataResponse,
        randomCollectionData2Response:
          action.payload.randomCollectionData2Response,
      };
    });
  },
});

export const { updateCode } = mainSlice.actions;

export default mainSlice.reducer;
