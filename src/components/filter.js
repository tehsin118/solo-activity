import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { DatePicker, Modal } from "antd";
import { Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import drop from "../assets/icon/chevron-down-small.svg";
import filter from "../assets/icon/filter.svg";
import search from "../assets/icon/search-grey.svg";
import {
  selectCategoires,
  setSelectedActivityTag,
} from "../redux-query/ActivitySlice";
import Checkbox from "./checkbox";

const Filter = ({ className, onSearch, activitySearch }) => {
  const categoryTags = useSelector(selectCategoires);
  const [searchBox, setSearchBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

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

  const removeTag = (tagToRemove) => {
    console.log(tagToRemove);
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleApply = () => {
    setTags(selectedTags);
    handleCancel();
  };

  useEffect(() => {
    setSelectedTags(tags);
    dispatch(setSelectedActivityTag(tags));
  }, [tags]);

  return (
    <>
      <div>
        {/* for desktop */}
        <div className={`filter-header  hide-on-mobile custom ${className}`}>
          <div className="d-flex gap-2">
            <span
              className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2"
              onClick={showModal}
              style={{ width: "fit-content" }}
            >
              <img src={filter} alt="" className="opacity-30" />
              Filter Categories
            </span>
            <p
              className={`small d-flex align-items-center pointer text-underline 
              ${tags.length > 0 ? "visible opacity-1" : "opacity-0 invisible"}`}
              onClick={() => {
                setSelectedTags([]);
                setTags([]);
              }}
            >
              <u>Clear All</u>
            </p>
          </div>
          <div className="input-box location-box  rounded-pill br-30">
            <input
              type="text"
              placeholder="Linz"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <div className="input-box rounded-pill">
            <DatePicker onChange={onChange} showTime needConfirm={false} />
          </div>
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
                placeholder="Search here... mobile"
                onChange={activitySearch}
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
                <div
                  className="d-flex input-box border-0  align-items-center gap-2 pointer fw-medium rounded-pill bg-grey px-2"
                  onClick={showModal}
                >
                  <img src={filter} alt="" className="opacity-30" />
                  Filter Categories
                </div>
                <p
                  className={`small d-flex  align-items-center text-center pointer text-underline 
              ${tags.length > 0 ? "d-flex" : "d-none"}`}
                  onClick={() => {
                    setSelectedTags([]);
                    setTags([]);
                  }}
                >
                  <u className="m-auto">Clear All</u>
                </p>
              </div>
            </Accordion.Body>
          </Accordion>
        </div>
        <div>
          {tags.length > 0 && (
            <ul className="selected-chips ms-5">
              {tags.map((item, index) => (
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
            values={categoryTags}
            selectedTags={selectedTags}
            onChange={toggleTag}
          />
        </div>
        <button onClick={handleApply} className="  mt-3">
          Apply
        </button>
      </Modal>
    </>
  );
};
export default Filter;
