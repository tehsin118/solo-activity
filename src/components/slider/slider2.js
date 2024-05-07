import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Modal, Carousel } from "antd";

const Slider2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(1);

  const handleImageEnlarge = (id) => {
    setSelectedImage(id);
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
            onClick={() => handleImageEnlarge(item.id)}
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
        <Carousel afterChange={onChange}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </Modal>
    </>
  );
};
const data = [
  {
    id: 1,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 2,
    img: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    id: 3,
    img: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    id: 4,
    img: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
  {
    id: 5,
    img: "https://swiperjs.com/demos/images/nature-5.jpg",
  },
];
export default Slider2;
