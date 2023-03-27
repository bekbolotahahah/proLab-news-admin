import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import registerReducer from "./register/registerSlice";
import newsReducer from './POSTnews/newsSlice'
import listReducer from './GETnews/getItemsSlice';
import changePasswordReducer from './changePassword/changePaswordSlice'
import userReduser from './GETprofile/GetProfileSlice'


export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    news: newsReducer,
    list: listReducer,
    changePassword: changePasswordReducer,
    user: userReduser

  },
});
