import React, { useEffect, useState } from "react";
import ActivityCard from "../components/card";
import Filter from "../components/filter";
import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import dummyActivities from "./dummydata";
import Navbar from "../components/navbar"; // Import Navbar component
import { useNavigate } from "react-router-dom";
//import { searchListings } from "./api"; // Import the API function for searching listings

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [listings, setListings] = useState([]);
  const [filteredlistings, setFilteredlistings] = useState([]);

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
    setListings(dummyActivities);
    setFilteredlistings(dummyActivities); // Initialize filtered listings with all listings
  }, []);

  const handleSearch = (keyword) => {
    const filteredListings = listings.filter((activity) =>
      activity.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredlistings(filteredListings); // Update filtered listings based on search keyword
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle search action with API
  /*const handleSearch = async (keyword) => {
    try {
      const results = await searchListings(keyword); // Call the searchListings API function with the keyword
      setListings(results); // Update the listings state with the search results
    } catch (error) {
      console.error("Error searching listings:", error);
    }
  };
*/
  return (
    <>
      <div className='home-page position-relative'>
        <div className='container'>
          <Filter className='d-none' />

          {/* Pass handleSearch function as prop to Navbar */}
          <Navbar onSearch={handleSearch} />

          <div className='activity-wrapper row position-relative'>
            <div className={`px-0 col-12 `}>
              <div className='row g-3 card-wrapper'>
                {Array.isArray(filteredlistings) &&
                filteredlistings.length > 0 ? (
                  filteredlistings.map((listing, index) => (
                    <div
                      className='  d-flex justify-content-center col-xl-3  col-lg-4  col-12 ssb '
                      key={index}
                    >
                      <ActivityCard data={listing} />
                    </div>
                  ))
                ) : (
                  <div>No listings available</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Icon
          icon='emojione-monotone:down-arrow'
          width='32'
          height='32'
          className={`scroll-btn rounded-circle ${
            isVisible ? "opacity-1" : "opacity-0"
          }`}
          onClick={scrollToTop}
        />

        <Tooltip title=' spontaneous suggestion'>
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
