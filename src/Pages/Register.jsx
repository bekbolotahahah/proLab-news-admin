import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  register,
  registerSuccess,
  registerStart,
} from "../redux/register/registerSlice";
// import Laoding from "../components/Laoding";

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isError = useSelector((state) => state.auth.isError);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirm: "",
    email: "",
    last_name: "",
    first_name: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(formData)).then(() => {
      if (registerSuccess) {
        navigate("/");
        alert("Регситрация прошла успешно");
      }
    });
  };

  return (
    <>
      <div className="html  w-[100vw] h-[100vh]">
        <div className="login-box w-[500px] ">
          <h2>Register</h2>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex w-full justify-between">
              <div>
                <div className="user-box">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <label htmlFor="username">user name</label>
                </div>
                <div className="user-box">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <label htmlFor="password"> password</label>
                </div>
                <div className="user-box">
                  <input
                    type="password"
                    name="password_confirm"
                    value={formData.password_confirm}
                    onChange={handleChange}
                  />
                  <label htmlFor="password">password_confirm</label>
                </div>
              </div>
              <div>
                <div className="user-box">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="password">email</label>
                </div>

                <div className="user-box">
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                  <label htmlFor="password">last_name</label>
                </div>
                <div className="user-box">
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                  <label htmlFor="password"> first_name</label>
                </div>
              </div>
            </div>
            

            <button type="submit" disabled={isLoading}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {"register"}
            </button>
          </form>
          {isError && <div>{errorMessage}</div>}
          <Link
            to="/login"
            className="text-sm font-medium text-purple-600 dark:text-gray-500 hover:underline"
            href="./create-account.html"
          >
            Login
          </Link>{" "}
        </div>
      </div>
    </>
    // <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
    //   <div className="flex-1 h-full max-w-xl mx-auto shadow-lg overflow-hidden bg-white rounded-lg  dark:bg-gray-400">
    //     <div className="flex items-center justify-center p-6 sm:p-12 md:w-full">
    //       <div className="w-full">
    //         <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
    //           Register
    //         </h1>

    //         <form onSubmit={handleSubmit} className=" gap-3">
    //           <input
    //           className=" m-1"
    //             type="text"
    //             name="username"
    //             value={formData.username}
    //             onChange={handleChange}
    //           />
    //           <input
    //           className=" m-1"
    //             type="password"
    //             name="password"
    //             value={formData.password}
    //             onChange={handleChange}
    //           />

    //           <input
    //           className=" m-1"
    //             type="password"
    //             name="password_confirm"
    //             value={formData.password_confirm}
    //             onChange={handleChange}
    //           />

    //           <input
    //           className=" m-1"
    //             type="text"
    //             name="email"
    //             value={formData.email}
    //             onChange={handleChange}
    //           />
    //           <input
    //           className=" m-1"
    //             type="text"
    //             name="last_name"
    //             value={formData.last_name}
    //             onChange={handleChange}
    //           />
    //           <input
    //           className=" m-1"
    //             type="text"
    //             name="first_name"
    //             value={formData.first_name}
    //             onChange={handleChange}
    //           />
    //           <button type="submit" disabled={isLoading}>
    //             {isLoading ? "Loading..." : "Register"}
    //           </button>
    //           {isError && <div>{errorMessage}</div>}
    //         </form>

    //         <hr className="my-8" />

    //         <p className="mt-1">
    //           <Link
    //             to={"/login"}
    //             className="text-sm font-medium text-gray-600 dark:text-gray-700 hover:underline"
    //           >
    //             Login
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;
