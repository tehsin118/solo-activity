import React from "react";
import user from "../assets/icon/user.png";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="nav border-bottom border-dark-subtle pt-2">
        <div className="container v-center justify-content-between">
          <Link to="/" className="v-center">
            <img src={logo} alt="" className="logo" />
            <h1 className="text-black">Solos</h1>
          </Link>

          <h1 className="text-center h-100 d-flex align-items-end explore">
            <span className=" ">Explore</span>
          </h1>
          <div className="v-center">
            <div className="logged">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
