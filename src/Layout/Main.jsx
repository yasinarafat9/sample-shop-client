import React from "react";
import { Outlet } from "react-router-dom";
import Nabvar from "../Components/Navbar/Nabvar";

const Main = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
