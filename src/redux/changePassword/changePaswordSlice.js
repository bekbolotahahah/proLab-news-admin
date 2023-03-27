import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
};

const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setError, clearError } = changePasswordSlice.actions;
export const changePassword =
  ({ oldPassword, password, passwordConfirm, jwt }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "https://nest-news-project.onrender.com/auth/change-password",
        {
          old_password: oldPassword,
          password,
          password_confirm: passwordConfirm,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );

      // handle success
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };

export default changePasswordSlice.reducer;
