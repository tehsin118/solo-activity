import React, { useState } from "react";
import user from "../assets/icon/user.png";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import search from "../assets/icon/search-grey.svg";
import Filter from "./filter";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="nav   pt-2 container ">
        <div className="w-100 v-center justify-content-between">
          <Link to="/" className="v-center">
            <img src={logo} alt="" className="logo" />
            <h1 className="text-black">Solos</h1>
          </Link>

          <div className="filter-header hide-on-mobile">
            <div
              className="input-box d-flex align-items-center   pointer  search-box active"
              // style={{
              //   width: searchBox ? "250px" : "50px",
              //   transition: "width 0.5s ease",
              // }}
            >
              <input
                type="text"
                name="searchBox"
                placeholder="Search here..."
              />

              <img src={search} alt="" />
            </div>
          </div>

          <div className="v-center">
            <div className="logged">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
        <div
          className="v-center h-center w-100 hide-on-mobile"
          style={{ paddingLeft: "120px" }}
        >
          <button
            className="m-auto bg-grey text-grey "
            style={{ width: "250px" }}
            onClick={() => setShowMenu(!showMenu)}
          >
            options
          </button>
        </div>

        <div
          className="w-50 m-auto ps-2"
          style={{
            height: showMenu ? "100px" : "0px",
            transition: "all 0.5s ease",
            overflow: "hidden",
          }}
        >
          <Filter />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
