import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import ActivityCard from "../components/card";
import Loader from "../components/loader";
import Navbar from "../components/navbar"; // Import Navbar component
import {
  selectActivities,
  setAllActivities,
  setCategories,
} from "../redux-query/ActivitySlice";
import { AllActivitiesAPI, AllCategoriesAPI, BaseUrl } from "../services";
import dummyActivities from "./dummydata";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectActivities);
  console.log("all activities", data);
  const [isVisible, setIsVisible] = useState(false);
  const [filteredlistings, setFilteredlistings] = useState([]);
  const [activitySearch, setActivitySearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const limit = 15;

  //set data getting from API
  useEffect(() => {
    setFilteredlistings(data.slice(0, limit));
  }, [data]);

  // search
  const handleSearch = (keyword) => {
    setActivitySearch(keyword);
    const filteredListings = data.filter((activity) =>
      activity.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredlistings(filteredListings);
    // setFilteredlistings(filteredListings.slice(0, limit));
  };
  const handleLocationSearch = (keyword) => {
    setLocationSearch(keyword);
    const filteredListings = data.filter((activity) =>
      activity?.location.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredlistings(filteredListings);
    // setFilteredlistings(filteredListings.slice(0, limit));
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
    CallAPIs();
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
    console.log("searsfsdfs", activitySearch);
    if (activitySearch == "" && locationSearch == "") {
      setTimeout(() => {
        setFilteredlistings([
          ...filteredlistings,
          ...data.slice(
            filteredlistings.length,
            filteredlistings.length + limit
          ),
        ]);
      }, 3000);
    }
  };

  // API Requests
  const CallAPIs = () => {
    GetCategories();
    GetAllActivities();
  };
  const GetCategories = async () => {
    try {
      const resp = await axios.get(`${BaseUrl}/${AllCategoriesAPI}`, {
        headers: {
          Accept: "application/json",
        },
      });
      const list = resp?.data
        ?.filter((item) => item?.parentCategoryId == null)
        .map((val) => val?.name);
      if (list.length > 0) {
        console.log("categories res",list);
        dispatch(setCategories(list));
      }
    } catch (error) {
      console.log("==== categories response erer", error);
    }
  };

  const GetAllActivities = async () => {
    try {
      const resp = await axios.get(`${BaseUrl}/${AllActivitiesAPI}`, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log("GetAllActivities resp",resp.data);
      if (resp.data.length > 0) dispatch(setAllActivities(resp.data));
    } catch (error) {
      console.log("Activity error:", error);
    }
  };

  // UI Part

  return (
    <>
      <Navbar onSearch={handleSearch} onLocationSearh={handleLocationSearch} />
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
                  filteredlistings.length > 0 ? (
                    filteredlistings.map((listing, index) => (
                      <div
                        className="  d-flex justify-content-center col-xl-3  col-lg-4  col-12 ssb "
                        key={index}
                      >
                        <ActivityCard data={listing} />
                      </div>
                    ))
                  ) : (
                    <>
                      <Loader />
                      <div>No listings available</div>
                    </>
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
