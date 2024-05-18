import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../slider2/MySwiper.css";
import "../slider2/effect-carousel.css";
import EffectCarousel from "../slider2/effect-carousel.esm.js";

const Slider2 = ({ sliderData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [list, setlist] = useState([]);

  useEffect(() => {
    if (sliderData) {
      const rs = sliderData.map((item) => ({ img: item }));
      if (rs.length > 0) setlist(rs);
    } else {
      setlist(data);
    }
  }, [sliderData]);
  const handleImageEnlarge = (img) => {
    setSelectedImage(img);
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = "auto";
  };

  const swiperParameters = {
    modules: [A11y, Navigation, EffectCarousel],
    slidesPerView: "auto",
    navigation: { enabled: false },
    loop: true,
    breakpoints: { 768: { navigation: { enabled: true }, initialSlide: 1 } },
    effect: "carousel",
    centeredSlides: true,
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        {list.map((item, index) => {
          return (
            <SwiperSlide
              className="swiper-slide-cf25"
              key={index}
              onClick={() => handleImageEnlarge(index)}
            >
              <img
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
                src={item.img}
              />
              <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
                <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
              </div>
            </SwiperSlide>
          );
        })}
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
        <Carousel
          selectedItem={selectedImage}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          {list.map((item, index) => (
            <div
              style={
                {
                  // marginTop:"6%"
                }
              }
            >
              <img
                src={item.img}
                alt=""
                className="m-auto pointer"
                key={index}
                style={{
                  height: 500,
                  justifyContent: "center",
                  borderRadius: 9,
                }}
              />
            </div>
          ))}
        </Carousel>
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
  {
    img: "https://swiperjs.com/demos/images/nature-6.jpg",
  },
  {
    img: "https://swiperjs.com/demos/images/nature-7.jpg",
  },
];

export default Slider2;
