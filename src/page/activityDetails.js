import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the listing ID from the URL
import Header from "../components/header";
import Loader from "../components/loader";
import Slider2 from "../components/slider/slider2";
import useScrollToTop from "../hook/useScrollToTop";
import { AllActivitiesAPI, BaseUrl } from "../services";

const ActivityDetails = () => {
  useScrollToTop();
  const [activity, setActivity] = useState(null); // State to hold the activity data
  const { id } = useParams(); // Get the id parameter from the URL
  const [loading, setloading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    CallAPI();
  }, [id]); // Re-run the effect whenever the id parameter changes

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > 600);
    };
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // API Request
  const CallAPI = async () => {
    setloading(true);
    try {
      const resp = await axios.get(`${BaseUrl}/${AllActivitiesAPI}/${id}`, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log("1 activity detail resp", resp.data[0]);
      setActivity(resp.data[0]);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log("Activity detail error:", error);
    }
  };

  return (
    <div>
      <Header />
      {loading && <Loader />}
      {activity && (
        <div className="activity-details">
          <header>
            <img src={activity.headerImage} alt="" className="w-100 h-100" />
            <div className="banner-content">
              <div className="container position-relative">
                <h1 className="d-flex align-items-end gap-2">
                  {activity.title}{" "}
                  <span className="fw-normal fs-4 mb-1">
                    by {activity.provider}{" "}
                  </span>
                </h1>
                <ul>
                  <li>
                    <span>
                      <Icon icon="mdi:location" width="21" height="21" />
                    </span>
                    <span>{activity.location}</span>
                  </li>{" "}
                  <li>
                    <span>
                      <Icon icon="ic:baseline-mail" width="21" height="18" />
                    </span>
                    <span>{activity.email}</span>
                  </li>{" "}
                  <li>
                    <span>
                      {" "}
                      <Icon icon="ic:baseline-phone" width="21" height="21" />
                    </span>
                    <span> {activity.phone}</span>
                  </li>
                </ul>

                <a
                  href={activity.website}
                  target="_blank"
                  className={`goto-web-btn ${
                    isVisible ? "opacity-1" : "opacity-0"
                  }`}
                >
                  Go to Website
                </a>
                <a href={activity.website} target="_blank" rel="noreferrer">
                  Go to Website
                </a>

                <h6 className="text-white">
                  Category:{" "}
                  {activity.categories &&
                    activity.categories.length > 0 &&
                    activity.categories[0].name}
                </h6>
                {/* Adjusted to properly display the category name */}
              </div>
            </div>
          </header>

          <div className=" ">
            {/* highlights */}
            <div className="highlight">
              <div className="container ">
                <div className="row gx-3 details">
                  <div className="col-md-4 col-12 bg-white p-3">
                    <h5>Highlights</h5>
                    <ul className="d-flex flex-column gap-1 mt-3 ps-3">
                      {activity.highlights
                        .split(",")
                        .map((highlight, index) => (
                          <li key={index}>{highlight.trim()}</li>
                        ))}
                    </ul>
                  </div>
                  {activity.shortDescription && (
                    <div className="col-md-4 col-12 bg-white p-3">
                      <h5>Short Description</h5>
                      <p className="small mt-3">{activity.shortDescription}</p>
                    </div>
                  )}
                  {activity.openingHours && (
                    <div className="col-md-4 d-flex justify-content-end bg-white col-12 p-3">
                      <div className="w-75 op-hours">
                        <h5>Opening Hours</h5>
                        {activity.openingHours.map((openingHour, index) => (
                          <p
                            key={index}
                            className="small mt-3 v-center justify-content-between"
                          >
                            <span className="fw-medium v-center gap-2">
                              <Icon
                                icon="ci:calendar-days"
                                width="1.3rem"
                                height="1.3rem"
                                style={{ color: "black" }}
                              />
                              {openingHour.day}
                            </span>
                            <span className="fw-medium v-center gap-2">
                              <Icon
                                icon="majesticons:clock-line"
                                width="1.3rem"
                                height="1.3rem"
                                style={{ color: "black" }}
                              />
                              {openingHour.open} - {openingHour.close}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* long-description */}
            <div className="extended-description  mb-5 ">
              <div className="container m-auto  ">
                <div className="row">
                  <div className="col-12 px-0">
                    <p className="small bg-white p-3">
                      {activity.extendedDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* cards images */}
            <div className="container">
              <Slider2 sliderData={activity?.pictureUrls} />
              <div className="row  m-auto">
                <div className="pb-3"></div>
                <div className="col-12 px-0 mt-3 mb-5 pb-5 additional-details">
                  <h5>Additional Details:</h5>
                  <div className="add-wrap d-flex gap-5">
                    <div className="mt-4 d-flex flex-column gap-3  additional-details-wrapper">
                      {activity?.price && (
                        <div>
                          <h6 className="fw-semibold mb-2 text-capitalize v-center gap-1">
                            <Icon
                              icon="mdi:currency-usd"
                              width="21"
                              height="21"
                              style={{ marginLeft: "-5px" }}
                            />
                            Price:
                          </h6>
                          <p className="small">{activity?.price}</p>
                        </div>
                      )}
                      {activity.location && (
                        <div>
                          <h6
                            className="fw-semibold  mb-2 text-capitalize v-center gap-1"
                            style={{ marginLeft: "-5px" }}
                          >
                            <Icon
                              icon="system-uicons:location"
                              width="21"
                              height="21"
                            />
                            location:
                          </h6>
                          <p className="small">{activity.location}</p>
                        </div>
                      )}

                      {activity.ageRequirement && (
                        <div>
                          <h6 className="fw-semibold  mb-2 text-capitalize v-center gap-1">
                            <Icon
                              icon="entypo:man"
                              width="21"
                              height="21"
                              style={{ marginLeft: "-5px" }}
                            />
                            age Requirement:
                          </h6>
                          <p className="small">
                            {activity.ageRequirement} Years
                          </p>
                        </div>
                      )}

                      {activity.duration && (
                        <div>
                          <h6 className="fw-semibold  mb-2 text-capitalize v-center gap-1">
                            <Icon
                              icon="game-icons:duration"
                              width="20"
                              height="20"
                              style={{marginLeft:"-2px"}}
                            />
                            duration:
                          </h6>
                          <p className="small">{activity.duration}</p>
                        </div>
                      )}

                      {activity?.maxPeople && (
                        <div>
                          <h6 className="fw-semibold mb-2 text-capitalize v-center gap-1">
                            <Icon
                              icon="mdi:account-group"
                              width="21"
                              height="21"
                              style={{marginLeft:"-2px"}}
                            />
                            Max People:
                          </h6>
                          <p className="small">{activity?.maxPeople}</p>
                        </div>
                      )}

                      {activity?.minPeople && (
                        <div>
                          <h6 className="fw-semibold  mb-2 text-capitalize v-center gap-1">
                            <Icon
                              icon="mdi:account-multiple"
                              width="21"
                              height="21"
                              style={{marginLeft:"-2px"}}
                            />
                            Min People:
                          </h6>
                          <p className="small">{activity?.minPeople}</p>
                        </div>
                      )}

                      {activity?.additionalInfo && (
                        <div>
                          <h6 className="fw-semibold  mb-2 text-capitalize v-center gap-1">
                            <Icon
                              icon="mdi:information"
                              width="21"
                              height="21"
                              style={{ marginLeft: "-2px" }}
                            />
                            More Info:
                          </h6>
                          <p className="small">{activity?.additionalInfo}</p>
                        </div>
                      )}

                      {activity?.popularity && (
                        <div>
                          <h6 className="fw-semibold  mb-2 text-capitalize v-center gap-1">
                            <Icon icon="mdi:star" width="21" height="21" />
                            popularity:
                          </h6>
                          <p className="small">{activity?.popularity}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityDetails;
