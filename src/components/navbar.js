import React, { useEffect, useState } from "react";
import user from "../assets/icon/user.png";
import arrowRight from "../assets/icon/chevron-right-small.svg";
import logo from "../assets/image/logo.png";
import { Link, useLocation } from "react-router-dom";
import search from "../assets/icon/search-grey.svg";
import Filter from "./filter";

const Navbar = ({ onSearch }) => {
  // Pass onSearch function as prop
  const [showMenu, setShowMenu] = useState(false);
  const [optionBtn, setOptionBtn] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/activity-details") {
      setOptionBtn(false);
    } else {
      setOptionBtn(true);
    }
  }, [location]);

  const handleSearch = (e) => {
    // Define handleSearch function
    const keyword = e.target.value;
    onSearch(keyword); // Call onSearch prop with keyword
  };

  return (
    <div>
      <nav className='nav   pt-2 container '>
        <div className='w-100 v-center justify-content-between'>
          <Link to='/' className='v-center'>
            <img src={logo} alt='' className='logo' />
            <h1 className='text-black'>Solos</h1>
          </Link>

          <div className='filter-header   hide-on-mobile'>
            <div
              className='input-box d-flex align-items-center   pointer  search-box active'
              style={{
                width: "255px",
              }}
            >
              <input
                type='text'
                name='searchBox'
                placeholder='Search here...'
                onChange={handleSearch} // Call handleSearch on input change
              />

              <img src={search} alt='' />
            </div>
          </div>

          <div className='v-center'>
            <div className='logged'>
              <img src={user} alt='' />
            </div>
          </div>
        </div>

        {optionBtn && (
          <div
            className='v-center h-center w-100   hide-on-mobile opt-btn'
            style={{ paddingLeft: "40px" }}
          >
            <span
              className='m-auto  text-center text-grey v-center gap-2'
              onClick={() => setShowMenu(!showMenu)}
            >
              options
              <img src={arrowRight} alt='' className='' />
            </span>
          </div>
        )}

        <div
          className='w-75 m-0 m-auto ps-2 '
          style={{
            height: showMenu ? "100px" : "0px",
            transition: "all 0.5s ease",
            overflow: "hidden",
          }}
        >
          <Filter className='me-0' />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
