import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPhotos } from './photoAPI';

const initialState = {
  photos: [],
  loading: false
};

export const getPhotosAsync = createAsyncThunk(
  'photos/fetchPhotos',
  async (amount) => {
    const response = await fetchPhotos(amount);
    return response.data;
  }
);

export const photosSlice = createSlice({
  name: 'photosSlice',
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(getPhotosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPhotosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = [ ...state.photos, action.payload ];
      });
  },
});

export const getPhotosFromState = (state) => state.photosSlice.photos; 
export const getLoadingState = (state) => state.photosSlice.loading; 

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default photosSlice.reducer;
