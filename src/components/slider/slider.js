import React, { useState } from "react";
import { Button, Modal } from "antd";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

import { Image } from "antd";
import { EffectCards } from "swiper/modules";

const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageEnlarge = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCards, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt=""
            onClick={handleImageEnlarge}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt=""
            onClick={handleImageEnlarge}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt=""
            onClick={handleImageEnlarge}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt=""
            onClick={handleImageEnlarge}
          />
        </SwiperSlide>{" "}
      </Swiper>

      <Modal
        open={isModalOpen}
        onOk={handleImageEnlarge}
        onCancel={handleImageEnlarge}
        footer={null}
        width="800px"
        className="img-modal"
        centered={true}
      >
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
      </Modal>
    </>
  );
};

export default Slider;
