import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "./effect-carousel.css";
import "./MySwiper.css";

export default function MySwiper() {
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
        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/01.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Spider-Man: No Way Home
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/02.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Free Guy
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/03.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              The Nice Guys
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/04.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              John Wick
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/05.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Avatar
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/06.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Encanto
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/07.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Eternals
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/08.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Jurassic World
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/09.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Dr Strange
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-cf25">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/10.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity swiper-slide-content-64d1">
            <div className="swiper-slide-text swiper-slide-text-a9ae">
              Guardians Of The Galaxy
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
