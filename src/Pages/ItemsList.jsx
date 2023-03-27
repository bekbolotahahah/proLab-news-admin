import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchList } from "../redux/GETnews/getItemsSlice";

const NewsList = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.list);

 
  

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  if (loading) {
    return (
      <div className=" w-full h-full items-center my-6">
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
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" w-full flex flex-wrap justify-around ">
      {data.map((item) => (
        <figure key={item.id} className="snip1347">
          
          <img
            src={`https://nest-news-project.onrender.com/${item.image}`}
            alt="sample87"
          />
          <div className="date">{item.created_at}</div>
          <figcaption>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to={`/newsmore/${item.id}`} className="read-more">Read More</Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default NewsList;
