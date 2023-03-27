import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const token = localStorage.getItem("accessToken");
export const fetchUserProfile = createAsyncThunk(
    'user/fetchProfile',
    async (_) => {
     const token = localStorage.getItem("accessToken");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get('https://nest-news-project.onrender.com/auth/profile', { headers });
      return response.data;
    }
  );
