import React, { useEffect, useState } from "react";
import thumbnail from "../assets/image/artwork2.png";
import bannerImg from "../assets/image/banner.jpg";
import { Icon } from "@iconify/react";
import { Image } from "antd";
import Slider from "../components/slider/slider";
import useScrollToTop from "../hook/useScrollToTop";
import Slider2 from "../components/slider/slider2";

const AcitivtyDetails = () => {
  useScrollToTop();

  const [isVisible, setIsVisible] = useState(false);
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
  return (
    <div>
      <div className="activity-details">
        <header>
          <img src={bannerImg} alt="" className="w-100 h-100" />

          <div className="banner-content">
            <div className="container position-relative">
              <h1 className="d-flex align-items-end gap-2">
                Arknights{" "}
                <span className="fw-normal fs-4 mb-1">by Robust </span>
              </h1>
              <ul>
                <li>
                  <span>
                    <Icon icon="mdi:location" width="21" height="21" />
                  </span>
                  <span>Islamabad</span>
                </li>{" "}
                <li>
                  <span>
                    <Icon icon="ic:baseline-mail" width="21" height="18" />
                  </span>
                  <span>contact@activity.com</span>
                </li>{" "}
                <li>
                  <span>
                    {" "}
                    <Icon icon="ic:baseline-phone" width="21" height="21" />
                  </span>
                  <span> +934892184</span>
                </li>
              </ul>

              <a
                href="#"
                className={`goto-web-btn ${
                  isVisible ? "opacity-1" : "opacity-0"
                }`}
              >
                Go to Website
              </a>
              <a href="#">Go to Website</a>

              <h6 className="text-white">Category: Adventure</h6>
            </div>
          </div>
        </header>

        <div className=" ">
          <div className="d-none">
            <div className="row  gx-5 ">
              <div className="col-md-5 col-12 px-0   px-0 thumbnail">
                <img src={thumbnail} alt="" className="img-fluid" />
              </div>
              <div className="col-md-1 col-12 px-0  "></div>
              <div className="col-md-6 px-0  col-12 px-0   py-5     ">
                <label className="category medium">Category Name</label>
                <h2 className="fw-semibold mt-2">Activity Name Here</h2>
                <h5 className="text-capitalize mt-3">
                  price: <span className=" fw-normal small">53$</span>
                </h5>
                <hr />
                <div className="d-flex flex-column gap-2">
                  <label className=" medium">
                    Location: <span className="fs-6 fw-medium">Islamabad</span>
                  </label>
                  <label className="medium ">
                    Email:{" "}
                    <span className="fs-6 fw-medium pointer">
                      mail@mail.com
                    </span>
                  </label>
                  <label className="medium ">
                    Phone:{" "}
                    <span className="fs-6 fw-medium pointer">+934892184</span>
                  </label>
                  <label className="medium ">
                    Website:{" "}
                    <span className="fs-6 fw-medium pointer">
                      www.website.com
                    </span>
                  </label>
                  <label className="medium ">
                    Age Requirement:{" "}
                    <span className="fs-6 fw-medium pointer">57</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* hightlisghts */}
          <div className="highlight">
            <div className="container ">
              <div className="row gx-3   details  ">
                <div className="col-md-4   col-12  bg-white   p-3">
                  <h5>Highlights</h5>
                  <ul className="d-flex flex-column gap-1 mt-3 ps-3">
                    <li>Official Google experience.</li>
                    <li>Bigger screen.</li>
                    <li>Level up with improved controls .</li>
                    <li>Seamless sync across devices.</li>
                    <li>Earn Google Play Points .</li>
                  </ul>
                </div>
                <div className="col-md-4 col-12  bg-white   p-3">
                  <h5>Short Discription</h5>

                  <p className="small mt-3">
                    Take on the role of a key member of Rhodes Island, a
                    pharmaceutical company that fights both a deadly infection
                    and the unrest it leaves in its wake. Together with your
                    leader Amiya, you’ll recruit Operators, train them, then
                    assign them to various operations to protect the innocent
                    and resist those who would thrust the world into
                    turmoil.Your tactics will determine the future of Rhodes
                    Island. Fight for the Dawn! This enables user to download a
                    hotfix package immediately when it's available. This does
                    not compromise user's privacy.
                  </p>
                </div>

                <div className="col-md-4 d-flex justify-content-end bg-white  col-12    p-3  ">
                  <div className="w-75">
                    <h5>Opening Hours</h5>
                    <p className="small mt-3 v-center justify-content-between">
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="ci:calendar-days"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        Monday
                      </span>
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="majesticons:clock-line"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        08:00 - 14:00
                      </span>
                    </p>
                    <p className="small mt-1 v-center justify-content-between">
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="ci:calendar-days"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        Tuesday
                      </span>
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="majesticons:clock-line"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        08:00 - 14:00
                      </span>
                    </p>
                    <p className="small mt-1 v-center justify-content-between">
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="ci:calendar-days"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        Wednesday
                      </span>
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="majesticons:clock-line"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        08:00 - 14:00
                      </span>
                    </p>
                    <p className="small mt-1 v-center justify-content-between">
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="ci:calendar-days"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        Thursday
                      </span>
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="majesticons:clock-line"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        08:00 - 14:00
                      </span>
                    </p>
                    <p className="small mt-1 v-center justify-content-between">
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="ci:calendar-days"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        Friday
                      </span>
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="majesticons:clock-line"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        08:00 - 14:00
                      </span>
                    </p>
                    <p className="small mt-1 v-center justify-content-between">
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="ci:calendar-days"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        Saturday
                      </span>
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="majesticons:clock-line"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        08:00 - 14:00
                      </span>
                    </p>
                    <p className="small mt-1 v-center justify-content-between">
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="ci:calendar-days"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        Sunday
                      </span>
                      <span className="fw-medium v-center gap-2">
                        <Icon
                          icon="majesticons:clock-line"
                          width="1.3rem"
                          height="1.3rem"
                          style={{ color: "black" }}
                        />
                        08:00 - 14:00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* long-discription */}
          <div className="long-discription  mb-5 ">
            <div className="container m-auto  ">
              <div className="row">
                <div className="col-12 px-0">
                  <p className="small bg-white p-3">
                    Take on the role of a key member of Rhodes Island, a
                    pharmaceutical company that fights both a deadly infection
                    and the unrest it leaves in its wake. Together with your
                    leader Amiya, you’ll recruit Operators, train them, then
                    assign them to various operations to protect the innocent
                    and resist those who would thrust the world into turmoil.
                    Your tactics will determine the future of Rhodes Island.
                    Fight for the Dawn! Gorgeous anime-style game with a perfect
                    combination of RPG and strategy elements ・Hundreds of
                    unique Operators across a variety of classes open up
                    countless gameplay options ・Auto Deploy system conveniently
                    allows you to free up your hands ・Carve out a home, just
                    the way you want it, with the Base construction system ・A
                    robust soundtrack and some of the most famous Japanese voice
                    actors and actresses will give you a sublime auditory
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* cards images */}
          <div className="container">
            <Slider2 />
            <div className="row  m-auto">
              <div className="col-12 px-0 mb-2 pb-5">
                <div className="more-imgs"></div>
              </div>

              <div className="col-12 px-0 mt-3 mb-5 pb-5 additional-details">
                <h5>Additional Details:</h5>

                <div className="mt-4 d-flex flex-column gap-3">
                  <div>
                    <h6 className="fw-semibold mb-2 text-capitalize v-center gap-1">
                      <Icon
                        icon="icon-park-outline:people-speak"
                        width="21"
                        height="21"
                      />
                      Highlights:
                    </h6>
                    <p className="small">
                      Hundreds of unique Operators across a variety of classes
                      open up countless gameplay options.
                    </p>
                  </div>
                  {/* <div>
                  <h6 className="fw-semibold mb-2 text-capitalize v-center gap-1">
                  <Icon
                  icon="icon-park-outline:people-speak"
                  width="21"
                      height="21"
                      />
                      Provider:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div> */}

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
                    <p className="small">Islamabad.</p>
                  </div>
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
                    <p className="small">18 Years - 32 Years.</p>
                  </div>

                  <div>
                    <h6 className="fw-semibold  mb-2 text-capitalize v-center gap-1">
                      <Icon icon="game-icons:duration" width="22" height="22" />
                      duration:
                    </h6>
                    <p className="small">03 Month 12 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcitivtyDetails;
