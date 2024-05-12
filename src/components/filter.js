import React, { useState } from "react";
import filter from "../assets/icon/filter.svg";
import search from "../assets/icon/search-grey.svg";
import { Popover, DatePicker, Collapse, Panel } from "antd";
import checked from "../assets/icon/checkbox-selected.svg";
import uncheck from "../assets/icon/checkbox.svg";
import drop from "../assets/icon/chevron-down-small.svg";
import { Button, Modal } from "antd";
import Checkbox from "./checkbox";
import { Icon } from "@iconify/react";
import { Accordion, AccordionBody } from "react-bootstrap";

const Filter = (props) => {
  const [searchBox, setSearchBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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
  const content = (
    <>
      <div className="d-flex flex-column gap-1 filter-content">
        <label className=" fw-medium v-center gap-2  text-capitalize pointer">
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
        <label className=" fw-medium v-center gap-2 text-capitalize pointer">
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
        <label className=" fw-medium v-center gap-2 text-capitalize pointer">
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
    </>
  );

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (e) => {
    const tag = e.target.value;

    if (e.target.checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      if (selectedTags) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      }
    }
  };

  console.log(selectedTags);
  const removeTag = (tagToRemove) => {
    console.log(tagToRemove);
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
    console.log(selectedTags);
  };
  return (
    <>
      <div>
        {/* for desktop */}
        <div className={`filter-header  hide-on-mobile  ${props.className}`}>
          {/* <Popover content={content} title=" " trigger="click">
          <span className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2">
            <img src={filter} alt="" className="opacity-30" />
            Show Filter
          </span>
        </Popover> */}
          <div className="d-flex gap-2">
            <span
              className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2"
              onClick={showModal}
              style={{ width: "fit-content" }}
            >
              <img src={filter} alt="" className="opacity-30" />
              Show Filter
            </span>

            <p
              className={`small d-flex align-items-center pointer text-underline 
              ${
                selectedTags.length > 0
                  ? "visible opacity-1"
                  : "opacity-0 invisible"
              }`}
              onClick={() => setSelectedTags([])}
            >
              <u>Clear All</u>
            </p>
          </div>
          <div className="input-box  rounded-pill br-30  ms-5">
            <input type="text" placeholder="Linz" />
          </div>
          <div className="input-box rounded-pill">
            <DatePicker onChange={onChange} showTime needConfirm={false} />
          </div>

          {/* <span onClick={() => setSearchBox(!searchBox)}>
          <div
            className="input-box d-flex align-items-center  pointer  search-box activ e"
            style={{
              width: searchBox ? "250px" : "50px",
              transition: "width 0.5s ease",
            }}
          >
            <input type="text" name="searchBox" placeholder="Search here..." />
            <img src={search} alt="" />
          </div>
        </span> */}
        </div>

        {/* for mobile */}
        <div className="hide-on-desktop pb-1 filter-header gap-0">
          {/* search */}
          <span onClick={() => setSearchBox(!searchBox)}>
            <div
              className="input-box d-flex align-items-center   pointer  search-box activ e"
              style={{
                width: searchBox ? "250px" : "50px",
                transition: "width 0.5s ease",
              }}
            >
              <input
                type="text"
                name="searchBox"
                placeholder="Search here..."
              />

              <img src={search} alt="" />
            </div>
          </span>

          <Accordion defaultActiveKey="0">
            <Accordion.Header>
              <div className="input-box bg-transparent rounded-pill br-30 mt-3">
                <span className=" opt-btn-mb v-center justify-content-center w-100">
                  Options
                  <img
                    src={drop}
                    alt=""
                    style={{
                      transform: showMenu ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.3s ease",
                      opacity: "0.3",
                    }}
                  />
                </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className={`mobile-filter d-flex flex-column gap-3 mt-3  `}>
                {/* location */}
                <div className="input-box  rounded-pill br-30 ">
                  <input type="text" placeholder="Linz" />
                </div>

                {/* date-picker */}
                <div className="input-box rounded-pill">
                  <DatePicker
                    onChange={onChange}
                    showTime
                    needConfirm={false}
                  />
                </div>

                {/* popup */}
                {/* <Popover
            content={content}
            placement="bottom"
            title=" "
            trigger="click"
          >
            <span className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2">
              <img src={filter} alt="" className="opacity-30" />
              Show Filter
            </span>
          </Popover> */}
                <div
                  className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2"
                  onClick={showModal}
                >
                  <img src={filter} alt="" className="opacity-30" />
                  Show Filter
                </div>
                <p
                  className={`small d-flex align-items-center pointer text-underline 
              ${selectedTags.length > 0 ? "d-flex" : "d-none"}`}
                  onClick={() => setSelectedTags([])}
                >
                  <u>Clear All</u>
                </p>
              </div>
            </Accordion.Body>
          </Accordion>

          <div
            className={`mobile-filter d-flex flex-column gap-3 mt-3 ${
              showMenu ? "show-menu" : "hide-menu"
            }`}
            style={{
              minHeight: showMenu ? "120px" : " 0px",
              overflow: "hidden",
              transition: "all 0.3s ease", // Optional: add smooth transition
            }}
          >
            {/* location */}
            <div className="input-box  rounded-pill br-30 ">
              <input type="text" placeholder="Linz" />
            </div>

            {/* date-picker */}
            <div className="input-box rounded-pill">
              <DatePicker onChange={onChange} showTime needConfirm={false} />
            </div>

            {/* popup */}
            {/* <Popover
            content={content}
            placement="bottom"
            title=" "
            trigger="click"
          >
            <span className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2">
              <img src={filter} alt="" className="opacity-30" />
              Show Filter
            </span>
          </Popover> */}
            <div
              className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2"
              onClick={showModal}
            >
              <img src={filter} alt="" className="opacity-30" />
              Show Filter
            </div>
            <p
              className={`small d-flex align-items-center pointer text-underline 
              ${
                selectedTags.length > 0
                  ? "visible opacity-1"
                  : "opacity-0 invisible"
              }`}
              onClick={() => setSelectedTags([])}
            >
              <u>Clear All</u>
            </p>
          </div>
        </div>

        <div>
          {selectedTags.length > 0 && (
            <ul className="selected-chips ms-5">
              {selectedTags.map((item, index) => (
                <li className="chips pointer" key={index}>
                  {item}
                  <Icon
                    icon="ion:close-circle-outline"
                    width="20"
                    height="20"
                    onClick={() => removeTag(item)}
                    style={{ color: "#f2f1f6" }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={null}
      >
        <div className="pt-3 d-flex flex-wrap gap-3">
          <Checkbox
            values={initialTags}
            selectedTags={selectedTags}
            onChange={toggleTag}
          />
        </div>
      </Modal>
    </>
  );
};

const initialTags = [
  "Adventure & Sports",
  "Entertainment & Leisure",
  "Outdoor & Nature",
  "Food & Drink",
  "Culture & Art",
  "Wellness & Health",
  "Education & Learning",
  "Professional Services",
  "Technology & Innovatio",
];
export default Filter;
