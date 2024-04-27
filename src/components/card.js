import React from "react";
import img from "../assets/image/artwork2.png";
import { useNavigate } from "react-router-dom";
const ActivityCard = (data) => {
  console.log(data);

  const navigate = useNavigate();
  return (
    <div>
      <div className="activity-card ">
        <div className="card-body w-100 h-100">
          <img src={img} alt="" className="img-fluids" />
        </div>
        <div className="footer pt-2 ">
          <h3>Card Head</h3>
          <p className="small mt-2 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            quibusdam suscipit? Quasi aspernatur saepe veritatis placeat quas et
            architecto enim reiciendis omnis quo minima rem, ipsam cumque!
            Laboriosam, vero aliquam!
          </p>
          <a onClick={() => navigate("/activity-details")}>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
