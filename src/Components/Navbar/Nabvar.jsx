import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";


const Nabvar = () => {

    const navItems = <>
        <Link className="navItem-font" to="/">Home</Link>
        <Link className="navItem-font" to="dashboard/uploadProducts"> Upload Products</Link>
    </>


  return (
    <div>
      <nav>
        <div className="flex justify-between items-center p-5 z-10 bg-base-100  drop-shadow-lg">
          <div className="flex items-center text-sm">
            <img className="w-10 mr-2" src={""} alt="" />
            <ul className="flex">{navItems}</ul>
          </div>
          <div className="flex items-center">
            <div>
              <IoIosSearch />
            </div>
            <input
              className=" drop-shadow-md border px-4 search-field"
              type="search"
              placeholder="Search items here"
            ></input>
            <div className="flex items-center px-5">
              <span className="text-center items-center flex flex-col px-2">
                <FaRegUser className="text-md" />
                <small className="font-semibold text-center">Profile</small>
              </span>
              <span className="text-center items-center flex flex-col px-2">
                <FaRegHeart className="text-md" />
                <small className="font-semibold text-center">Wishlist</small>
              </span>
              <span className="text-center items-center flex flex-col px-2">
                <BsBag className="text-md" />
                <small className="font-semibold text-center">Bag</small>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nabvar;
