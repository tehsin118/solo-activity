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
          <span
            className="d-flex align-items-center gap-2 pointer fw-medium"
            onClick={() => setShowFlter(!showFilter)}
          >
            <img src={filter} alt="" />
            {showFilter ? "Hide" : "Show"} Filter
          </span>

          <span>
            <div className="input-box d-flex align-items-center  pointer active-search">
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
            <div className="col-md-3 px-0   ">
              <div className="position-sticky top-0">
                <SideFilter />
              </div>
            </div>
          )}
          <div className={` ${showFilter ? "col-md-9" : "col-12 px-0  "}`}>
            <div className="row">
              {data.map((data, index) => (
                <div
                  className={` ${
                    showFilter ? "col-md-4" : "col-md-3 px-0  "
                  } col-12 px-0  `}
                >
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
