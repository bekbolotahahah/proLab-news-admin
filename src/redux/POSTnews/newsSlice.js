import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    isLoading: false,
    error: null,
    data: null,
  },
  reducers: {
    fetchNewsStart(state) {
      state.isLoading = true;
      state.error = null;
      state.data = null;
    },
    fetchNewsSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchNewsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsFailure,
} = newsSlice.actions;

export default newsSlice.reducer;
