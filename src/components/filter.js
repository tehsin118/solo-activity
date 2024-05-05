import React, { useState } from "react";
import filter from "../assets/icon/filter.svg";
import search from "../assets/icon/search-grey.svg";
import { Popover, DatePicker } from "antd";
import checked from "../assets/icon/checkbox-selected.svg";
import uncheck from "../assets/icon/checkbox.svg";

const Filter = () => {
  const [searchBox, setSearchBox] = useState(false);
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
      <div className="d-flex flex-column gap-1">
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
      <div className="filter-header border-bottom border-dark-subtle">
        <Popover content={content} title=" " trigger="click">
          <span className="d-flex align-items-center gap-2 pointer fw-medium rounded-pill bg-white px-2">
            <img src={filter} alt="" />
            <span className="d-md-block d-none">Show</span>
            Filter
          </span>
        </Popover>

        <div className="input-box bg-white rounded-pill br-30">
          <input type="text" placeholder="Linz" />
        </div>
        <div className="input-box rounded-pill">
          <DatePicker onChange={onChange} showTime needConfirm={false} />
        </div>

        <span onClick={() => setSearchBox(!searchBox)}>
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
        </span>
      </div>
    </>
  );
};

export default Filter;
