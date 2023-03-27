import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../../redux/GETprofile/action";

import ChagePasword from "./change-password/ChagePasword";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [laoding, setLoading] = useState(false);
  useEffect(() => {
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (storedRefreshToken) {
      // Устанавливаем сохраненный refreshToken в состояние
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  console.log(profile);
  const onOpen = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleUpdateToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://nest-news-project.onrender.com/auth/updateToken",
        {},
        { headers: { Authorization: `Bearer ${refreshToken}` } }
      );

      // Обновляем состояния токенов и сохраняем их в локальное хранилище
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data;
      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      localStorage.removeItem("oldAccessToken");
      localStorage.removeItem("oldRefreshToken");
      alert("токен обновлен");
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <div className="w-full h-[90vh]  rounded-lg m-2  ">
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase  dark:border-gray-400 bg-gray-50 dark:text-gray-400 dark:bg-[#00000080] ">
                <th className="  py-3"></th>
                <th className=" py-3">Name:</th>
                <th className=" py-3">first_name:</th>
                <th className=" py-3">last_name:</th>
                <th>change pasword:</th>
                <th>update token:</th>
              </tr>
            </thead>
            <tbody className=" dark:bg-[#00000080] ">
              <tr className=" text-gray-700  dark:text-gray-400 ">
                <td className=" opacity-0">
                  ---<div className="h-5"></div>{" "}
                </td>

                {/* ----------------------------------------------------------------------------------------------------------------------- */}

                <td className="">
                  <div className="h-5">
                    {" "}
                    <p> {profile?.username}</p>
                  </div>
                </td>

                {/* ----------------------------------------------------------------------------------------------------------------------- */}

                <td className="">
                  <div className="h-5">
                    {" "}
                    <p>{profile?.first_name}</p>
                  </div>
                </td>

                {/* ----------------------------------------------------------------------------------------------------------------------- */}

                <td className="">
                  <div className="h-5">
                    {" "}
                    <p> {profile?.last_name}</p>
                  </div>
                </td>

                {/* ----------------------------------------------------------------------------------------------------------------------- */}

                <td className="">
                  <div className="h-5"></div>
                </td>
                <td></td>
                {/* ----------------------------------------------------------------------------------------------------------------------- */}
              </tr>
              <tr className=" text-gray-700  dark:text-gray-400 ">
                <td className=" opacity-0">
                  ---<div className="h-5"></div>
                </td>

                <td className=" py-3 text-xs">
                  <span className=" rounded-lg  text-center text-base text-gray-400 ">
                    <div
                      className={
                        open === true
                          ? "transition duration-300 ease-in-out    rounded-lg   text-center font-light  text-gray-400  translate-y-0"
                          : "transition duration-300 ease-in-out absolute  translate-y-[-31%]"
                      }
                    >
                      <ChagePasword open={open} onOpen={onOpen} />
                    </div>
                  </span>
                  <div className="h-5"></div>{" "}
                </td>

                {/* ----------------------------------------------------------------------------------------------------------------------- */}

                <td className="">
                  <Link to="/createprofile">
                    {/* <div className="  rounded-lg text-center  text-2xl text-gray-400  "> */}
                    <div className="button  transition duration-150 ease-in-out     text-center  text-2xl text-gray-400 shadow-lg ">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      create profile
                    </div>
                    {/* </div> */}
                  </Link>
                  <div className="h-5"></div>{" "}
                </td>

                {/* ----------------------------------------------------------------------------------------------------------------------- */}

                <td className=" text-sm">
                  <Link to="/editprofile">
                    <div className="button  transition duration-150 ease-in-out     text-center  text-2xl text-gray-400 shadow-lg ">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Edit Profile
                    </div>
                  </Link>
                  <div className="h-5"></div>{" "}
                </td>
                {/* ----------------------------------------------------------------------------------------------------------------------- */}

                <td className=" relative">
                  <div
                    onClick={onOpen}
                    className={
                      open === false
                        ? "button  transition duration-150 ease-in-out   text-center  text-2xl text-gray-400 shadow-lg "
                        : "transition duration-300 ease-in-out opacity-0"
                    }
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    change Password
                  </div>
                  <div className="h-5"></div>{" "}
                  {/* <div>
                    <button onClick={handleUpdateToken}>Обновить токен</button>
                  </div> */}
                </td>
                {/* ----------------------------------------------------------------------------------------------------------------------- */}
                <td>
                  {" "}
                  {laoding === true ? (
                    <div className=" px-4">
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
                    <div className="button" onClick={handleUpdateToken}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      обновить Токен
                    </div>
                  )}
                  <div className="h-5"></div>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-full grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase  dark:border-gray-400   bg-white sm:grid-cols-9 dark:text-gray-400 dark:bg-[#00000080] ">
          <span className="flex items-center col-span-3">
            {/* Showing 21-30 of 100 */}
          </span>
          <span className="col-span-2"></span>

          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end w-full "></span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
