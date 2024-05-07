import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Modal } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleImageEnlarge = (img) => {
    setSelectedImage(img);
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = "auto";
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Slider {...settings}>
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
      </Slider>

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
];

export default Slider2;
