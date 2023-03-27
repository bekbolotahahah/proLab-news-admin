import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Aside = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("data");
    navigate("/login");
  };
  return (
    <aside
      className={
        open === true
          ? " z-20 w-64 text-white shadow-[#00000099]  shadow-lg dark:bg-[#00000080]   m-2 rounded-lg     overflow-y-auto ease-in-out duration-150 bg-white  md:block flex-shrink-0 max-xl:absolute"
          : " translate-x-[-100%] ease-in-out duration-150"
      }
    >
      <div className={open === true ? " items-center px-6 py-3" : "hidden"}>
        <img className="rounded-full w-16" src="" alt="" />
        <div className="text-white  text-xs ">
          <p> </p>
          <p></p>
        </div>
      </div>
      <div
        className={
          open === true ? "py-4 text-white ark:text-slate-700" : "hidden"
        }
      >
        <ul className="mt-6">
          <li className="relative text-white px-6 py-3 ">
            <Link
              className="inline-flex hover:text-[#03e9f4]  hover:translate-x-2  ease-in-out  items-center w-full text-sm  font-semibold text-white  transition duration-150     "
              to={"/"}
            >
              <svg
                className="w-5  h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokewwidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="ml-4 ">Profile</span>
            </Link>
          </li>
        </ul>

        <ul>
          <li className="relative px-6 py-3">
            <Link
              to={"/addpost"}
              className="inline-flex hover:text-[#03e9f4]  hover:translate-x-2 items-center w-full text-sm font-semibold transition duration-150"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokewwidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              <span className="ml-4">Добавить пост</span>
            </Link>
          </li>

          <li className="relative px-6 py-3">
            <Link
              to={"/editpost"}
              className="inline-flex hover:text-[#03e9f4]  hover:translate-x-2 items-center w-full text-sm font-semibold transition duration-150 "
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokewwidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
              <span className="ml-4">edit news</span>
            </Link>
          </li>
          <li className="relative px-6 py-3" onClick={logout}>
            <div className="inline-flex hover:text-[#03e9f4]  hover:translate-x-2 items-center w-full text-sm font-semibold transition duration-150">
              <div>---</div>
              <span className="ml-4">logout </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
