import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddPost from "./components/post/add-post/AddPost";
import PrivateRoutes from "./components/PrivateRoutes copy";
import ChagePasword from "./components/profile/change-password/ChagePasword";
import EditProfileForm from "./components/profile/edit-profile/EditProfileForm";
import ProfileForm from "./components/profile/create-profile/CreateProfile";
import Profile from "./components/profile/Profile";
import MainLaiout from "./Layout/MainLaiout";
import ChangePassword from "./Pages/ChangePasword";
import NewsList from "./Pages/ItemsList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Users from "./Pages/Users";
import NewsMore from "./components/post/post-card/postCard";
import EditNews from "./components/post/edit-post/EditPost";
function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<MainLaiout />}>
          <Route path="/" element={<Profile />} />
          <Route path="/user" element={<Users />} />
          <Route path="/addpost" element={<AddPost />} />{" "}
          <Route path="/cahgepassword" element={<ChagePasword />} />
          <Route path="/editpost" element={<NewsList />} />
          <Route path="/editprofile" element={<EditProfileForm />} />
          <Route path="/createprofile" element={<ProfileForm />} />
          <Route path="/newsmore/:id" element={<NewsMore />} />{" "}
          <Route path="/editnews/:id" element={<EditNews />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/changepasword" element={<ChangePassword />} />
    </Routes>
  );
}

export default App;
