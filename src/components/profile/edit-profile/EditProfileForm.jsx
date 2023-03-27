import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../../redux/PUTuser/PutUserSlice";

const EditProfileForm = () => {
  const dispatch = useDispatch();
  const [mesege, setMesege] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const { username, firstName, lastName } = event.target.elements;
    const userData = {
      username: username.value,
      first_name: firstName.value,
      last_name: lastName.value,
    };
    dispatch(updateUserProfile(userData))
      .then(() => {
        setMesege("Profile updated successfully!");
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        setMesege("Error updating profile:");
      });
  };

  return (
    <div className="w-full h-[90vh]  rounded-lg m-2  ">
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <form onSubmit={handleSubmit}>
          <div className="w-full overflow-x-auto ">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase  dark:border-gray-400 bg-gray-50 dark:text-gray-400 dark:bg-[#00000080] ">
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3"></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody className=" dark:bg-[#00000080] ">
                <tr className=" text-gray-700 dark:text-gray-400   ">
                  <td></td>
                  {/* ----------------------------------------------------------------------------------------------------------------------- */}

                  <td className=" relative">
                    <div className=" ">
                      <input
                        className="inputt"
                        type="text"
                        id="username"
                        name="username"
                      />
                      <label className="labelt " htmlFor="username">
                        username <span className=" mx-9"> </span>
                      </label>
                    </div>
                  </td>

                  {/* ----------------------------------------------------------------------------------------------------------------------- */}

                  <td className=" relative">
                    <div className=" ">
                      <input
                        className="inputt"
                        type="text"
                        id="firstName"
                        name="firstName"
                      />
                      <label className="labelt" htmlFor="username">
                        first_name <span className=" mx-9"> </span>
                      </label>
                    </div>
                  </td>
                  {/* ----------------------------------------------------------------------------------------------------------------------- */}

                  <td className=" relative">
                    <div className=" ">
                      <input
                        className="inputt"
                        type="text"
                        id="lastName"
                        name="lastName"
                      />
                      <label className="labelt" htmlFor="username">
                        last_name <span className=" mx-9"> </span>
                      </label>
                    </div>
                  </td>
                  {/* ----------------------------------------------------------------------------------------------------------------------- */}

                  <td className=" text-sm">
                    <>
                      {loading === true ? (
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
                        <div className="  rounded-lg px-2 p-6 text-center  text-2xl text-gray-400  ">
                          <button
                            type="submit"
                            className={
                              "button mx-3 transition duration-150 ease-in-out    px-2 p-6 text-center text-2xl text-gray-400 shadow-lg "
                            }
                          >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Edit
                          </button>
                        </div>
                       )}
                    </>
                  </td>
                  <td className=" text-sm">
                    <Link to="/">
                      <div className="  rounded-lg px-2 p-6 text-center  text-2xl text-gray-400  ">
                        <button
                          type="submit"
                          className={
                            "button mx-3 transition duration-150 ease-in-out    px-2 p-6 text-center text-2xl text-gray-400 shadow-lg "
                          }
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Back
                        </button>
                      </div>
                    </Link>
                  </td>
                  {/* ----------------------------------------------------------------------------------------------------------------------- */}

                  {/* ----------------------------------------------------------------------------------------------------------------------- */}
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div className=" w-full grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase  dark:border-gray-400   bg-white sm:grid-cols-9 dark:text-gray-400 dark:bg-[#00000080] ">
          <span className="flex items-center col-span-3">{mesege}</span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end w-full "></span>
        </div>
      </div>
    </div>
    // <div
    //   className={
    //     edit === true
    //       ? "relative  rounded-lg flex "
    //       : " translate-y-full opacity-0 "
    //   }
    // >
    //   <div className="flex items-center">
    //     <form className="flex  ">
    //       <div className="">
    //         <input className="inputt" />
    //         <label className="labelt" htmlFor="username">
    //           user name <span className=" mx-9"> </span>
    //         </label>
    //       </div>
    //       <div className="">
    //         <input className="inputt" />
    //         <label className="labelt" htmlFor="username">
    //         first_name <span className=" mx-9"> </span>
    //         </label>
    //       </div>
    //       <div className="">
    //         <input className="inputt" />
    //         <label className="labelt" htmlFor="username">
    //         last_name <span className=" mx-9"> </span>
    //         </label>
    //       </div>

    //       <button className="button mx-12" type="submit">
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //         {"Submit"}
    //       </button>
    //     </form>

    //     <span onClick={onEdit} className="button ">
    //       x<span></span>
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </span>
    //     <div></div>
    //   </div>

    //   <span className=" text-red-600 text-xs font-medium"></span>
    // </div>
  );
};

export default EditProfileForm;
