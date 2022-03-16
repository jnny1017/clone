import { createAsyncThunk } from '@reduxjs/toolkit';
import API, { BASE_URL } from 'config/apiManager';

export const fetchRandomCollectionData = createAsyncThunk(
  'main/fetchRandomCollectionData',
  async () => {
    const randomCollectionDataResponse = await API.get(
      `${BASE_URL}/randomCollectionData.json`
    );
    const randomCollectionData2Response = await API.get(
      `${BASE_URL}/randomCollectionData2.json`
    );

    return {
      randomCollectionDataResponse: randomCollectionDataResponse.data,
      randomCollectionData2Response: randomCollectionData2Response.data,
    };
  }
);
