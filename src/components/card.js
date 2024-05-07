import React from "react";
import img from "../assets/image/artwork2.png";
import { useNavigate } from "react-router-dom";
const ActivityCard = (data) => {
  console.log(data);

  const navigate = useNavigate();
  return (
    <>
      <div className="activity-card ">
        <img src={img} alt="" className="img-fluids" />

        <div className="footer flex-column pt-2 w-100">
          <div className="v-center w-100 justify-content-between">
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
