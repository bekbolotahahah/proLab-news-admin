import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const login = (username, password,setErrorMesege,setIsLoading) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post('https://nest-news-project.onrender.com/auth/login', {
      username,
      password,
    }).catch((error) => {
        setErrorMesege(error.response.data);
        setIsLoading(false)
        console.log(error.response.data);
      });
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('data',JSON.stringify(response.data) );
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
};

export default authSlice.reducer;