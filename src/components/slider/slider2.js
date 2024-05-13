import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Image, Modal } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import EffectCarousel from "../slider2/effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "../slider2/effect-carousel.css";
import "../slider2/MySwiper.css";
const Slider2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleImageEnlarge = (img) => {
    setSelectedImage(img);
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = "auto";
  };

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   centerPadding: "0px",
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 787,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 1500,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 1600,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //   ],
  // };

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
      {/* <Slider {...settings}>
        {data.map((item, index) => (
          <img
            src={item.img}
            alt=""
            className="m-auto pointer"
            key={index}
            // onClick={() => handleImageEnlarge(item.img)}
            onClick={() => handleImageEnlarge(index)}
          />
        ))}
      </Slider> */}

      <Swiper {...swiperParameters}>
        {data.map((item, index) => {
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

        {/* <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/02.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/03.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/04.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/05.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/06.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/07.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/08.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/09.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/10.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae"></div>
          </div>
        </SwiperSlide> */}
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
          {data.map((item, index) => (
            <div>
              <img
                src={item.img}
                alt=""
                className="m-auto pointer"
                key={index}
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
