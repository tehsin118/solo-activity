import React from "react";
import { useNavigate } from "react-router-dom";

const ActivityCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activity-details/${data.id}`); // Assuming each listing has an 'id' property
  };

  return (
    <div className='activity-card'>
      <img src={data.headerImage} alt={"Header"} className='header-image' />

      <div className='footer flex-column pt-2 w-100'>
        <div className='v-center w-100 justify-content-between'>
          <h3>{data.title}</h3>
          <a onClick={handleClick}>Read More</a>
        </div>
        <p className='small mt-2 mb-2'>{data.shortDescription}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
