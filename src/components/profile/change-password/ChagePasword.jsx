import axios from "axios";
import React, { useState } from "react";


const ChagePasword = ({ open, onOpen }) => {
  const [login, setLogin] = useState("");
  const [errortext, setErrortext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mesegeScs, setMesegeScs] = useState("");
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const response = await axios
        .post(
          "https://nest-news-project.onrender.com/auth/send-reset-password-link",
          {
            login: login,
          }
        )
        .catch((error) => {
          setErrortext(error.response.data);
          console.log(error.response.data.message);
        });
      console.log(response.data);
      if (response.data) {
        setMesegeScs("вам на почту отправили ссылку для смены пароля");
      }
      setErrortext();
      // здесь можно выполнить какое-то дополнительное действие в зависимости от ответа сервера
    } catch (error) {
      setIsLoading(false);
      setErrortext(error.response.data.message);
      setMesegeScs();
      // здесь можно отобразить сообщение об ошибке или выполнить другое действие при неудачной отправке запроса
    }
    setIsLoading(false);
  };

  const clean = () => {
    setMesegeScs("");
    setErrortext("");
  };

  return (
    <>
      {" "}
      <div
        className={
          open === true
            ? "relative  rounded-lg flex "
            : " translate-y-full opacity-0 "
        }
      >
        <div className="flex items-center">
          <form className="flex  items-center " onSubmit={handleSubmit}>
            <div className="">
              <input
                className="inputt"
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />{" "}
              <label className="labelt" htmlFor="username">
                user name <span className=" mx-9"></span>
              </label>
            </div>

            <button className="button mx-12" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {isLoading
                ? isLoading && (
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
                  )
                : "Submit"}
            </button>
          </form>

          <span
            onClick={() => {
              onOpen();
              clean();
            }}
            className="button   "
          >
            back<span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <span className=" text-xs font-medium">
          {!errortext ? <div>{mesegeScs}</div> : errortext?.message}
        </span>
      </div>
    </>
  );
};

export default ChagePasword;
