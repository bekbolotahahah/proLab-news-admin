import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "../../../redux/CreateProfile/CreateProfileSlice";

function ProfileForm(props) {
  const dispatch = useDispatch();
  const [mesege, setMesege] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // функция-обработчик для отправки данных на сервер
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
    };

    // вызываем action creator для отправки данных на сервер
    await dispatch(updateProfile(data,setMesege, setLoading));
  };

  // отрисовываем форму редактирования профиля
  
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
                      <input className="inputt" type="text" name="username" />
                      <label className="labelt " htmlFor="username">
                        username <span className=" mx-9"> </span>
                      </label>
                    </div>
                  </td>

                  {/* ----------------------------------------------------------------------------------------------------------------------- */}

                  <td className=" relative">
                    <div className=" ">
                      <input className="inputt" type="text" name="first_name" />
                      <label className="labelt" htmlFor="first_name">
                        first_name <span className=" mx-9"> </span>
                      </label>
                    </div>
                  </td>
                  {/* ----------------------------------------------------------------------------------------------------------------------- */}

                  <td className=" relative">
                    <div className=" ">
                      <input className="inputt" type="text" name="last_name" />
                      <label className="labelt" htmlFor="last_name">
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
                            create
                          </button>
                        </div>
                      )}
                    </>
                  </td>
                  <td className=" text-sm">
                    <Link to="/">
                      <div className="  rounded-lg px-2 p-6 text-center  text-2xl text-gray-400  ">
                        <button
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
          <span className="flex items-center col-span-3">{}</span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end w-full "></span>
        </div>
      </div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="username">Username:</label>
    //   <input type="text" name="username" />

    //   <label htmlFor="first_name">First name:</label>
    //   <input type="text" name="first_name" />

    //   <label htmlFor="last_name">Last name:</label>
    //   <input type="text" name="last_name" />

    //   <button type="submit">Save</button>
    // </form>
  );
}
export default ProfileForm;
