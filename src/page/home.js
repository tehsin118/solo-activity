import React, { useEffect, useState } from "react";
import ActivityCard from "../components/card";
import Filter from "../components/filter";
import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import dummyActivities from "./dummydata";
import Navbar from "../components/navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredlistings, setFilteredlistings] = useState([]);

  const limit = 15;

  //set data getting from API
  useEffect(() => {
    setFilteredlistings(dummyActivities.slice(0, limit));
  }, []);

  // search
  const handleSearch = (keyword) => {
    const filteredListings = dummyActivities.filter((activity) =>
      activity.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredlistings(filteredListings.slice(0, limit));
  };

  // onClick Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // handle Scroll to show btn
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // fetching data
  const fetchData = () => {
    setTimeout(() => {
      setFilteredlistings([
        ...filteredlistings,
        ...dummyActivities.slice(
          filteredlistings.length,
          filteredlistings.length + limit
        ),
      ]);
    }, 1000);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="home-page position-relative">
        <div className="container">
          <div className="activity-wrapper row position-relative">
            <div className={`  col-12 card-wrapper`}>
              <InfiniteScroll
                dataLength={filteredlistings.length}
                next={fetchData}
                hasMore={filteredlistings.length < dummyActivities.length}
                loader={filteredlistings.length < limit ? <></> : <Loader />}
              >
                <div className="row g-3 ">
                  {Array.isArray(filteredlistings) &&
                  dummyActivities.length > 0 ? (
                    filteredlistings.map((listing, index) => (
                      <div
                        className="  d-flex justify-content-center col-xl-3  col-lg-4  col-12 ssb "
                        key={index}
                      >
                        <ActivityCard data={listing} />
                      </div>
                    ))
                  ) : (
                    <div>No listings available</div>
                  )}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>

        <Icon
          icon="emojione-monotone:down-arrow"
          width="32"
          height="32"
          className={`scroll-btn rounded-circle ${
            isVisible ? "opacity-1" : "opacity-0"
          }`}
          onClick={scrollToTop}
        />

        <Tooltip title=" spontaneous suggestion">
          <button
            className={`FcKIT-btn ${isVisible ? "opacity-1" : "opacity-0"}`}
          >
            FcKIT
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default Home;
