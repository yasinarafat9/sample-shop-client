import React from "react";
import { Link, NavLink } from "react-router-dom";

const Drawer = () => {
    const drawerItems = <>
        <NavLink className="navItem-font" to="/">Home</NavLink>
        <Link className="navItem-font" to="uploadProducts"> Upload Products</Link>
    </>

  return (
    <div className="fixed">
      <div className="drawer lg:drawer-open sticky">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <h2 className="h2-dashboard p-5">Dashboard</h2>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
           {drawerItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
