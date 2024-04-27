import React, { useState } from "react";

import uncheck from "../assets/icon/checkbox.svg";
import checked from "../assets/icon/checkbox-selected.svg";

const SideFilter = () => {
  const [formData, setFormData] = useState({
    category1: false,
    category2: false,
    category3: false,
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: !formData[name],
    });
  };

  return (
    <>
      <div className="filter-wrapper pt-3">
        <div className="d-flex flex-column gap-3 border-bottom border-dark-subtle pb-4">
          <h5>Categories</h5>
          <label className=" fw-medium v-center gap-2  pointer">
            <img src={formData.category1 ? checked : uncheck} alt="" />
            category 1
            <input
              type="checkbox"
              name="category1"
              checked={formData.category1}
              onChange={handleChange}
              className="d-none"
            />
          </label>
          <label className=" fw-medium v-center gap-2 pointer">
            <img src={formData.category2 ? checked : uncheck} alt="" />
            category 2
            <input
              type="checkbox"
              name="category2"
              checked={formData.category2}
              onChange={handleChange}
              className="d-none"
            />
          </label>
          <label className=" fw-medium v-center gap-2 pointer">
            <img src={formData.category3 ? checked : uncheck} alt="" />
            category 3
            <input
              type="checkbox"
              name="category3"
              checked={formData.category3}
              onChange={handleChange}
              className="d-none"
            />
          </label>
        </div>

        <div className="price-filter d-flex flex-column gap-3 border-bot tom border-dark-subtle mt-4 pb-4">
          <h5>Price</h5>
          <div className="v-center gap-3">
            <input type="number" placeholder="Min" />
            <span>to</span>
            <input type="number" placeholder="Max" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideFilter;
