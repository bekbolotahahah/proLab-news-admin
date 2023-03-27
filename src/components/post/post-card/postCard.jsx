import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditNews from "../edit-post/EditPost";

const NewsMore = () => {
  const [moreData, setMoreData] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://nest-news-project.onrender.com/news/${id}/`, {})
      .then((res) => {
        setMoreData(res.data);
      });
  }, [id]);
  const handleDeleteClick = () => {
    setIsDeleting(true);
    axios
      .delete(`https://nest-news-project.onrender.com/news/${id}`)
      .then((response) => {
        navigate("/editpost");
        alert("post is delete");
        // обработка успешного ответа от сервера
      })
      .catch((error) => {
        // обработка ошибки при выполнении запроса
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };
 

  return (
    <div className="bg-[#00000080] shadow-[#00000099] m-3 w-full rounded-lg text-[#03e9f4] p-5  ">
      <div className="flex gap-6 justify-between">
        <div className="flex gap-6">
          <div className=" w-60 h-60 rounded-lg bg-slate-50">
            <img
              className="w-full h-full"
              src={`https://nest-news-project.onrender.com/${moreData?.image}`}
              alt=""
            />
          </div>
          <div className=" text-gray-400  font-light text-xl  ">
            <p className="my-5 ">
              Автор:{" "}
              <p className="text-white font-medium">{moreData?.author}</p>{" "}
            </p>
            <p className="my-5 ">
              Категория:{" "}
              <p className="text-white font-medium">{moreData?.category}</p>{" "}
            </p>
            <p className="my-5 ">
              заголовок:{" "}
              <p className="text-white font-medium">{moreData?.title}</p>{" "}
            </p>
          </div>
        </div>
        <div className=" my-5 font-medium text-center text-white">
          <span className=" text-xl font-light  text-gray-400">Описание:</span>
          {moreData?.description}
        </div>
      </div>
      <div className=" text-gray-100 my-7">
        <span className=" text-xl font-light  text-gray-400">Content:</span>
        {moreData?.content}
      </div>
      <div className=" flex justify-between">
        <span className=" text-xl font-light  text-gray-400">
          tags: {`#${moreData?.tags}`}
        </span>
        <div>
          <Link to={`/editnews/${moreData?.id}`}>
            <button className=" button">
              edit post
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Link>

          <button
            className="button"
            onClick={handleDeleteClick}
            disabled={isDeleting}
          >
            {isDeleting ? "Удаление..." : "Удалить"}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <span>{moreData?.updated_at}</span>
    </div>
  );
};

export default NewsMore;
