import React from "react";
import img from "../assets/image/artwork2.png";
import { useNavigate } from "react-router-dom";
const ActivityCard = (data) => {
  console.log(data);

  const navigate = useNavigate();
  return (
    <>
      <div className="activity-card ">
        <div className="card-body w-100 h-100">
          <img src={img} alt="" className="img-fluids" />
        </div>
        <div className="footer pt-2 ">
          <div className="v-center justify-content-between">
            <h3>Card Head</h3>
            <a onClick={() => navigate("/activity-details")}>Read More</a>
          </div>
          <p className="small mt-2 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            quibusdam suscipit? Quasi aspernatur saepe veritatis placeat quas et
            architecto enim reiciendis omnis quo minima rem, ipsam cumque!
            Laboriosam, vero aliquam!
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
