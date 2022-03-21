import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainInitialState } from './main.model';
import {
  fetchMainBannerData,
  fetchMdChoiceCategoryData,
  fetchMdChoiceProductData,
  fetchRandomCollectionData,
} from './main.thunks';

const initialState: MainInitialState = {
  code: '772',
  mainBannerData: {
    id: 0,
    title: '',
    subtitle: '',
    additional_text: null,
    template_code: '',
    template_type: '',
    event_code: '',
    data: [
      {
        id: '',
        image_url: '',
        link: '',
      },
    ],
  },
  mdChoiceCategoryData: [
    {
      code: '',
      name: '',
    },
  ],
  mdChoiceProductData: [
    {
      code: '',
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
  randomCollectionData2: {
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
    builder.addCase(fetchMainBannerData.fulfilled, (state, action) => {
      state.mainBannerData = action.payload.mainBannerDataResponse;
    });

    builder.addCase(fetchMdChoiceCategoryData.fulfilled, (state, action) => {
      state.mdChoiceCategoryData = action.payload.mdChoiceCategoryDataResponse;
    });

    builder.addCase(fetchMdChoiceProductData.fulfilled, (state, action) => {
      state.mdChoiceProductData = action.payload.mdChoiceProductDataResponse;
    });

    builder.addCase(fetchRandomCollectionData.fulfilled, (state, action) => {
      state.randomCollectionData = action.payload.randomCollectionDataResponse;
      state.randomCollectionData2 =
        action.payload.randomCollectionData2Response;
    });
  },
});

export const { updateCode } = mainSlice.actions;

export default mainSlice.reducer;
