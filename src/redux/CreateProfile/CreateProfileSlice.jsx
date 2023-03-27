import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

// создаем action creator для обновления профиля
export const updateProfile = createAction(
  "profile/update",
  async (data, setMesege, setLoading) => {
    // получаем токен из localStorage

    const token = localStorage.getItem("accessToken");
    // конфигурируем заголовки
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // создаем объект данных для отправки
    const body = {
      username: data.username,
      first_name: data.first_name,
      last_name: data.last_name,
    };

    // отправляем POST-запрос на сервер
    const response = await axios
      .post("https://nest-news-project.onrender.com/auth/profile", body, {
        headers,
      })
      .then(() => {
      alert("Profile created successfully!");

        setLoading(false);
      })
      .catch((error) => {
        alert("у вас уже есть профиль");
      });

    // возвращаем данные, полученные от сервера
    return response.data;
  }
);
