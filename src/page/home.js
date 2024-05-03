import React, { useState } from "react";
import filter from "../assets/icon/filter.svg";
import search from "../assets/icon/search-grey.svg";
import ActivityCard from "../components/card";
import SideFilter from "../components/sideFilter";

const Home = () => {
  const [showFilter, setShowFlter] = useState(false);
  return (
    <>
      <div className="container">
        <div className="filter-header border-bottom border-dark-subtle">
          <span className="d-flex align-items-center gap-2 pointer fw-medium">
            <img src={filter} alt="" />
            <span className="d-md-block d-none">Show</span>
            Filter
          </span>

          <span>
            <div className="input-box d-flex align-items-center  pointer  search-box">
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
          {showFilter && (
            <div className="col-lg-2  px-0   ">
              <div className="position-sticky top-0">
                <SideFilter />
              </div>
            </div>
          )}
          <div className={`px-0 ${showFilter ? "col-lg-10" : "col-12"}`}>
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
