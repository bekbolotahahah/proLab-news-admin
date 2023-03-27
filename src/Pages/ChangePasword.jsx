import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { changePassword } from "../redux/changePassword/changePaswordSlice";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [jwt_password] = useSearchParams();

  const jwt = jwt_password.get("jwt_password");
  console.log(jwt);

  const dispatch = useDispatch();

 
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(changePassword({ oldPassword, password, passwordConfirm, jwt }));
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="old_password">Old Password:</label>
          <input
            type="password"
            id="old_password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password_confirm">Confirm New Password:</label>
          <input
            type="password"
            id="password_confirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button type="submit">Change Password</button>
      </form> */}

      <div className="login-box">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="password"
              id="old_password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label htmlFor="old_password">old password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password"> new Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password_confirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <label htmlFor="password_confirm"> new Password confirm</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
