import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNews } from "../../../redux/POSTnews/action";
import EditNews from "../edit-post/EditPost";
const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    content: "",
    tags: "",
    category: "",
    is_published: false,
    views: "",
    files: null,
  });

  const [islaoding, setIslaoding] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      files: file,
    }));
  };

  const handleSubmit = (event) => {
    setIslaoding(true);
    event.preventDefault();
    const {
      title,
      author,
      description,
      content,
      tags,
      category,
      is_published,
      views,
      files,
    } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("author", author);
    formDataToSend.append("description", description);
    formDataToSend.append("content", content);
    formDataToSend.append("tags", tags);
    formDataToSend.append("category", category);
    formDataToSend.append("is_published", is_published);
    formDataToSend.append("views", views);
    formDataToSend.append("files", files);
    dispatch(createNews(formDataToSend))
      .then(() => {
        alert("Новость успешно создана!");
        setIslaoding(false);
      })
      .catch((error) => {
        alert(`Ошибка: ${error.message}`);
      });
  };

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
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="bg-[#00000000]    border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>

          <div className=" flex max-xl:flex-wrap w-full justify-between">
            <div className="drag-file-area">
              <label htmlFor="title">Автор:</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="bg-[#00000000]    border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
            <div className="drag-file-area">
              <label htmlFor="description">Описание:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
          </div>

          <div className="drag-file-area">
            <label htmlFor="content">Содержание:</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>
          <div className=" flex max-xl:flex-wrap w-full justify-between">
            <div className="drag-file-area">
              <label htmlFor="category">Теги:</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className=" bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
            <div className="drag-file-area">
              <label htmlFor="author ">Категория:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
            <div className="drag-file-area">
              <label htmlFor="tags">Опубликована:</label>
              <input
                type="checkbox"
                name="is_published"
                checked={formData.is_published}
                onChange={handleChange}
                className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
              />
            </div>
          </div>

          <div className="drag-file-area">
            <label htmlFor="tags">Просмотры:</label>
            <input
              type="text"
              name="views"
              value={formData.views}
              onChange={handleChange}
              className="bg-[#00000000]   border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>

          <div className="drag-file-area">
            <label htmlFor="tags">Файл:</label>
            <input
              type="file"
              name="files"
              onChange={handleFileChange}
              className="bg-[#00000000]    border-none outline-none text-[#03e9f4]  w-full h-full text-2xl"
            />
          </div>

          <button className="button w-full m-3 p-2" type="submit">
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
              "Create News"
            )}
          </button>
        </div>
      </form>
      <div></div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Заголовок:
    //     <input
    //       type="text"
    //       name="title"
    //       value={formData.title}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Автор:
    //     <input
    //       type="text"
    //       name="author"
    //       value={formData.author}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Описание:
    //     <input
    //       type="text"
    //       name="description"
    //       value={formData.description}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Содержание:
    //     <textarea
    //       name="content"
    //       value={formData.content}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Теги:
    //     <input
    //       type="text"
    //       name="tags"
    //       value={formData.tags}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Категория:
    //     <input
    //       type="text"
    //       name="category"
    //       value={formData.category}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Опубликована:
    //     <input
    //       type="checkbox"
    //       name="is_published"
    //       checked={formData.is_published}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Просмотры:
    //     <input
    //       type="text"
    //       name="views"
    //       value={formData.views}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Файл:
    //     <input type="file" name="files" onChange={handleFileChange} />
    //   </label>
    //   <br />
    //   <button type="submit">Создать новость</button>
    // </form>
  );
};

export default AddPost;
