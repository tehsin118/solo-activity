import React from "react";
import user from "../assets/icon/profile-large.svg";
const Navbar = () => {
  return (
    <div>
      <header className="nav border-bottom border-dark-subtle  mt-5 pb-3">
        <div className="container v-center justify-content-between">
          <div className="hide-on-mobile"></div>
          <h1 className="text-center ">Solo Explore Activities</h1>
          <div className="v-center">
            {/* <button>Login</button> */}
            <div className="logged">
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
