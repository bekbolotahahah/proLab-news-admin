import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";

const MainLaiout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      <Header open={open} setOpen={setOpen} />

      <div className="flex">
        <Aside open={open} setOpen={setOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLaiout;
