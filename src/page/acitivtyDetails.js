import React from "react";
import thumbnail from "../assets/image/artwork-preview-1.png";
import { Icon } from "@iconify/react";
const AcitivtyDetails = () => {
  return (
    <div>
      <div className="activity-details">
        <div className="container">
          <header>
            <div className="row  gx-5 ">
              <div className="col-md-5 col-12 px-0 thumbnail">
                <img src={thumbnail} alt="" className="img-fluid" />
              </div>
              <div className="col-md-1 col-12"></div>
              <div className="col-md-6 col-12 py-5     ">
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
          </header>

          <div className="details    row border-tops    border-bottom border-dark-subtle">
            <div className="col-md-3 col-12 px-0">
              <h5>Highlights</h5>
              <ul className="d-flex flex-column gap-1 mt-3">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="col-md-5 col-12 px-0">
              <h5>Short Discription</h5>

              <p className="small mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                non autem harum aliquam quisquam sed, nostrum expedita doloribus
                corrupti quod amet quis impedit fugiat molestiae excepturi vitae
                similique aspernatur est eligendi blanditiis neque adipisci
                voluptate minus ipsam. Officia laborum iste repellendus quos
                deleniti labore praesentium deserunt assumenda ipsa aut.
                Voluptas.
              </p>
            </div>
            <div className="col-md-1 col-12 px-0"></div>
            <div className="col-md-3 col-12 px-0">
              <h5>Opening Hours</h5>
              <p className="small mt-3 v-center justify-content-between">
                <span className="fw-medium v-center gap-2">
                  <Icon
                    icon="ci:calendar-days"
                    width="1.3rem"
                    height="1.3rem"
                    style={{ color: "black" }}
                  />
                  Monday - Friday
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

          <div className="row mt-5  ">
            <div className="col-12 border-bottom border-dark-subtle mb-5 pb-5">
              <h5>Long Discription</h5>

              <p className="small mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                non autem harum aliquam quisquam sed, nostrum expedita doloribus
                corrupti quod amet quis impedit fugiat molestiae excepturi vitae
                similique aspernatur est eligendi blanditiis neque adipisci
                voluptate minus ipsam. Officia laborum iste repellendus quos
                deleniti labore praesentium deserunt assumenda ipsa aut.
                Voluptas. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Praesentium soluta vel provident fugiat, odio animi cum
                distinctio veritatis voluptatibus rem assumenda dolorum
                repellendus? Adipisci natus explicabo consequuntur debitis quia
                hic.
              </p>
            </div>

            <div className="col-12 border-bottom border-dark-subtle mb-5 pb-5">
              <div className="row  more-imgs">
                <div className="col-lg-3 col-md-4 col-12 m-auto">
                  <img src={thumbnail} alt="" className="img-fluid" />
                </div>

                <div className="col-lg-3 col-md-4 col-12 m-auto">
                  <img src={thumbnail} alt="" className="img-fluid" />
                </div>

                <div className="col-lg-3 col-md-4 col-12 m-auto">
                  <img src={thumbnail} alt="" className="img-fluid" />
                </div>

                <div className="col-lg-3 col-md-4 col-12 m-auto">
                  <img src={thumbnail} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="col-12 border-bottom border-dark-subtle mb-5 pb-5">
              <h5>Additional Details:</h5>

              <div className="mt-4 d-flex flex-column gap-4">
                <div>
                  <h6 className="fw-semibold mb-2 text-capitalize">
                    Highlights:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold mb-2 text-capitalize">
                    provider:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize v-center">
                    location:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    age Requirement:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    equipment:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    max People:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    minPeople:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    duration:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    additionalInfo:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    popularity:
                  </h6>
                  <p className="small">0</p>
                </div>
                <div>
                  <h6 className="fw-semibold  mb-2 text-capitalize">
                    language:
                  </h6>
                  <p className="small">Lorem ipsum dolor sit.</p>
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
