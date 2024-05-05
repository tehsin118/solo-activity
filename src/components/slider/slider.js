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
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageEnlarge = (img) => {
    setSelectedImage(img);
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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt=""
              onClick={() => handleImageEnlarge(item.img)}
            />
          </SwiperSlide>
        ))}
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
        <img src={selectedImage} alt="" />
      </Modal>
    </>
  );
};
const data = [
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-5.jpg",
  },
];
export default Slider;
