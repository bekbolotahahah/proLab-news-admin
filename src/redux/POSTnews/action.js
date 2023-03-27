import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createNews = createAsyncThunk(
  'news/createNews',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://nest-news-project.onrender.com/news',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
