import axios from "axios";

const updateNews = async (id, updatedNews) => {
  try {
    const { data } = await axios.put(
      `https://nest-news-project.onrender.com/news/${id}`,
      updatedNews
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateNews;