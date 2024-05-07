import React, { useEffect, useState } from "react";

import ActivityCard from "../components/card";

import Filter from "../components/filter";
import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 100);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="home-page position-relative">
        <div className="container">
          {/* <Filter /> */}

          <div className="activity-wrapper row position-relative">
            <div className={`px-0 col-12 `}>
              <div className="row g-3 card-wrapper">
                {data.map((data, index) => (
                  <div className="  d-flex justify-content-center col-xl-3  col-lg-4  col-12 ssb ">
                    <ActivityCard key={index} {...data} />
                  </div>
                ))}
              </div>
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
