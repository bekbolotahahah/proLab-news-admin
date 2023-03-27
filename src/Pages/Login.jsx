import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";
import Laoding from "../components/Laoding";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMesege, setErrorMesege] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(username, password);
    dispatch(login(username, password, setErrorMesege, setIsLoading)).then(
      () => {
        setErrorMesege("");
        if (localStorage.getItem("accessToken")) {
          navigate("/");
        }
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      <div className="html  w-[100vw] h-[100vh]">
        <div className="login-box w-[400px] ">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">user name</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password"> new Password</label>
            </div>

            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {isLoading ? (
                <div className="m-2 mx-4 px-4">
                  <div className="laoding">
                    <div className="lds-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
          <span className=" text-rose-600"> {errorMesege?.message}</span>
          <Link
            to="/register"
            className="text-sm font-medium text-purple-600 dark:text-gray-500 hover:underline"
            href="./create-account.html"
          >
            Create account
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Login;
