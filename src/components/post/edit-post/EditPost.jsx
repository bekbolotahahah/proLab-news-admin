import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import updateNews from "./actions";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNews = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [islaoding, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [views, setViews] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://nest-news-project.onrender.com/news/${id}`
      );
      setTitle(response.data.title);
      setImage(response.data.image);
      setDescription(response.data.description);
      setContent(response.data.content);
      setViews(response.data.views);
      setIsPublished(response.data.is_published);
      setCategory(response.data.category);
      setAuthor(response.data.author);
      setTags(response.data.tags.join(", "));
    };
    setLoading(false);
    fetchData();
  }, [id]);

  function updateNews(id, updatedNews) {
    setIsLoading(true);
    axios
      .put(`https://nest-news-project.onrender.com/news/${id}`, updatedNews)
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        navigate(`/newsmore/${id}`)

      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNews = {
      title,
      image,
      description,
      content,
      views,
      is_published: isPublished,
      category,
      author,
      tags: tags.split(","),
    };
    updateNews(id, updatedNews);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full p-5">
      <form
        onSubmit={handleSubmit}
        className="form-container flex gap-5 flex-wrap w-full text-[#fff]"
      >
        <div className="upload-files-container flex ">
          <div className="drag-file-area">
            <label htmlFor="title">заголовок:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-[#00000000]    border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>

          <div className=" flex max-xl:flex-wrap w-full justify-between">
            <div className="drag-file-area">
              <label htmlFor="title">Автор:</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="bg-[#00000000]    border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
            <div className="drag-file-area">
              <label htmlFor="description">Описание:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
          </div>

          <div className="drag-file-area">
            <label htmlFor="content">Содержание:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>
          <div className=" flex max-xl:flex-wrap w-full justify-between">
            <div className="drag-file-area">
              <label htmlFor="category">Теги:</label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className=" bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
            <div className="drag-file-area">
              <label htmlFor="author ">Категория:</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
            <div className="drag-file-area">
              <label htmlFor="tags">Опубликована:</label>
              <input
                type="checkbox"
                id="isPublished"
                checked={isPublished}
                className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
          </div>

          <div className="drag-file-area">
            <label htmlFor="tags">Просмотры:</label>
            <input
              type="number"
              id="views"
              value={views}
              onChange={(e) => setViews(e.target.value)}
              className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>

          <div className="drag-file-area">
            <label htmlFor="tags">Файл:</label>
            <input
              // type="file"
              // name="files"
              // onChange={handleFileChange}
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="bg-[#00000000]    border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>

          <button className="button w-full py-6 h-8 m-3 p-2" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {islaoding === true ? (
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
              "edit News"
            )}
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default EditNews;
