import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerStart());

    const response = await axios.post(
      "https://nest-news-project.onrender.com/auth/register",
      userData
    );

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message));
    alert(error.message);
  }
};

export default registerSlice.reducer;
