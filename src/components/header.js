import React from "react";
import user from "../assets/icon/user.png";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className='nav pt-2 container'>
        <div className='w-100 v-center justify-content-between'>
          <Link to='/' className='v-center'>
            <img src={logo} alt='' className='logo' />
            <h1 className='text-black'>Solos</h1>
          </Link>

          <div className='v-center'>
            <div className='logged'>
              <img src={user} alt='' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
