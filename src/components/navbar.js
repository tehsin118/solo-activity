import React from "react";
import user from "../assets/icon/user.png";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="nav border-bottom border-dark-subtle pt-2">
        <div className="container v-center justify-content-between">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>

          <h1 className="text-center ">
            Solo <span className="hide-on-mobile">Explore</span> Activities
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
