import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Components/Drawer/Drawer";

const Dashboard = () => {
  return (
    <div className="flex">
      <Drawer></Drawer>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
