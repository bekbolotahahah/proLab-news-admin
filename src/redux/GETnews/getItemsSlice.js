import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ListSlice = createSlice({
  name: 'list',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    listReceived: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, listReceived, fetchError } = ListSlice.actions;

export const fetchList = () => async (dispatch) => {
  dispatch(startLoading());

  try {
    const response = await axios.get('https://nest-news-project.onrender.com/news');
    dispatch(listReceived(response.data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export default ListSlice.reducer;
