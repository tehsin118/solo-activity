import React from "react";

const Checkbox = ({ values, onChange, selectedTags }) => {
  return (
    <>
      {values ? (
        values.map((value, index) => (
          <div className="checkbox-wrapper" key={index}>
            <label className="pointer">
              <input
                type="checkbox"
                className="d-none"
                checked={selectedTags.includes(value)}
                value={value}
                onChange={onChange}
              />
              <p className="fw-medium small ">{value}</p>
            </label>
          </div>
        ))
      ) : (
        <p>No values available</p>
      )}
    </>
  );
};

export default Checkbox;
