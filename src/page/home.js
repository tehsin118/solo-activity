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

  useEffect(() => {
    setFilteredlistings(dummyActivities); // Initialize filtered listings with all listings
  }, []);

  const handleSearch = (keyword) => {
    const filteredListings = dummyActivities.filter((activity) =>
      activity.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredlistings(filteredListings.slice(0, limit));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
  useEffect(() => {
    setFilteredlistings(dummyActivities.slice(0, limit));
  }, []);
  const fetchData = () => {
    // Simulating fetching data from API
    setTimeout(() => {
      setFilteredlistings([
        ...filteredlistings,
        ...dummyActivities.slice(
          filteredlistings.length,
          filteredlistings.length + limit
        ),
      ]);
    }, 1000); // Simulating delay
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="home-page position-relative">
        <div className="container">
          <div className="activity-wrapper row position-relative">
            <div className={`px-0 col-12 `}>
              <InfiniteScroll
                dataLength={filteredlistings.length}
                next={fetchData}
                hasMore={filteredlistings.length < dummyActivities.length}
                loader={<p>Loading...</p>}
              >
                <div className="row g-3 card-wrapper">
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
