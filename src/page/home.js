import React, { useState } from "react";
import filter from "../assets/icon/filter.svg";
import search from "../assets/icon/search-grey.svg";
import ActivityCard from "../components/card";
import SideFilter from "../components/sideFilter";
import { Popover } from "antd";
import uncheck from "../assets/icon/checkbox.svg";
import checked from "../assets/icon/checkbox-selected.svg";
const Home = () => {
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

  return (
    <>
      <div className="container">
        <div className="filter-header border-bottom border-dark-subtle">
          <Popover content={content} title=" " trigger="click">
            <span className="d-flex align-items-center gap-2 pointer fw-medium">
              <img src={filter} alt="" />
              <span className="d-md-block d-none">Show</span>
              Filter
            </span>
          </Popover>

          <span onClick={() => setSearchBox(!searchBox)}>
            <div
              className="input-box d-flex align-items-center  pointer  search-box activ e"
              style={{
                width: searchBox ? "250px" : "50px",
                transition: "width 0.5s ease",
              }}
            >
              <input
                type="text"
                name="searchBox"
                placeholder="Search here..."
              />
              <img src={search} alt="" />
            </div>
          </span>
        </div>

        <div className="activity-wrapper row position-relative">
          {/* {showFilter && (
            <div className="col-lg-2  px-0   ">
              <div className="position-sticky top-0">
                <SideFilter />
              </div>
            </div>
          )} */}
          <div className={`px-0 col-12 `}>
            <div className="row gx-3">
              {data.map((data, index) => (
                <div className=" mb-4 d-flex justify-content-center col-xl-3  col-lg-4  col-12 ssb ">
                  <ActivityCard key={index} {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const data = [
  {
    head: "card head 1",
  },
  {
    head: "card head 2",
  },
  {
    head: "card head 3",
  },

  {
    head: "card head 4",
  },
  {
    head: "card head 5",
  },
  {
    head: "card head 6",
  },

  {
    head: "card head 7",
  },
  {
    head: "card head 8",
  },
  {
    head: "card head 9",
  },
  {
    head: "card head 10",
  },
];
export default Home;
