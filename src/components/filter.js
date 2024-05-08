import React, { useState } from "react";
import filter from "../assets/icon/filter.svg";
import search from "../assets/icon/search-grey.svg";
import { Popover, DatePicker, Collapse, Panel } from "antd";
import checked from "../assets/icon/checkbox-selected.svg";
import uncheck from "../assets/icon/checkbox.svg";
import drop from "../assets/icon/chevron-down-small.svg";

const Filter = (props) => {
  const [searchBox, setSearchBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [formData, setFormData] = useState({
    category1: false,
    category2: false,
    category3: false,
  });
  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: !formData[name],
    });
  };
  const content = (
    <>
      <div className="d-flex flex-column gap-1 filter-content">
        <label className=" fw-medium v-center gap-2  text-capitalize pointer">
          <img src={formData.category1 ? checked : uncheck} alt="" />
          category 1
          <input
            type="checkbox"
            name="category1"
            checked={formData.category1}
            onChange={handleChange}
            className="d-none"
          />
        </label>
        <label className=" fw-medium v-center gap-2 text-capitalize pointer">
          <img src={formData.category2 ? checked : uncheck} alt="" />
          category 2
          <input
            type="checkbox"
            name="category2"
            checked={formData.category2}
            onChange={handleChange}
            className="d-none"
          />
        </label>
        <label className=" fw-medium v-center gap-2 text-capitalize pointer">
          <img src={formData.category3 ? checked : uncheck} alt="" />
          category 3
          <input
            type="checkbox"
            name="category3"
            checked={formData.category3}
            onChange={handleChange}
            className="d-none"
          />
        </label>
      </div>
    </>
  );
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      {/* for desktop */}
      <div className={`filter-header  hide-on-mobile ${props.className}`}>
        <Popover content={content} title=" " trigger="click">
          <span className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2">
            <img src={filter} alt="" />
            <span className="d-md-block d-none">Show</span>
            Filter
          </span>
        </Popover>

        <div className="input-box  rounded-pill br-30">
          <input type="text" placeholder="Linz" />
        </div>
        <div className="input-box rounded-pill">
          <DatePicker onChange={onChange} showTime needConfirm={false} />
        </div>

        {/* <span onClick={() => setSearchBox(!searchBox)}>
          <div
            className="input-box d-flex align-items-center  pointer  search-box activ e"
            style={{
              width: searchBox ? "250px" : "50px",
              transition: "width 0.5s ease",
            }}
          >
            <input type="text" name="searchBox" placeholder="Search here..." />
            <img src={search} alt="" />
          </div>
        </span> */}
      </div>

      {/* for mobile */}
      <div className="hide-on-desktop pb-1 filter-header gap-0">
        {/* search */}
        <span onClick={() => setSearchBox(!searchBox)}>
          <div
            className="input-box d-flex align-items-center   pointer  search-box activ e"
            style={{
              width: searchBox ? "250px" : "50px",
              transition: "width 0.5s ease",
            }}
          >
            <input type="text" name="searchBox" placeholder="Search here..." />

            <img src={search} alt="" />
          </div>
        </span>

        {/* option-btn */}
        <div
          className="input-box  rounded-pill br-30 mt-3"
          onClick={() => setShowMenu(!showMenu)}
        >
          <button className="  w-100">
            Options
            <img
              onClick={() => setShowMenu(!showMenu)}
              src={drop}
              alt=""
              style={{
                transform: showMenu ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
                opacity: "0.3",
              }}
            />
          </button>
        </div>

        <div
          className={`mobile-filter d-flex flex-column gap-3 mt-3 ${
            showMenu ? "show-menu" : "hide-menu"
          }`}
          style={{
            height: showMenu ? "190px" : " 0px",
            overflow: "hidden",
            transition: "all 0.3s ease", // Optional: add smooth transition
          }}
        >
          {/* location */}
          <div className="input-box  rounded-pill br-30 ">
            <input type="text" placeholder="Linz" />
          </div>

          {/* date-picker */}
          <div className="input-box rounded-pill">
            <DatePicker onChange={onChange} showTime needConfirm={false} />
          </div>

          {/* popup */}
          <Popover
            content={content}
            placement="bottom"
            title=" "
            trigger="click"
          >
            <span className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2">
              <img src={filter} alt="" />
              <span className="d-md-block d-none">Show</span>
              Filter
            </span>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Filter;
