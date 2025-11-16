import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import brandsImg1 from "../../../assets/brands/amazon.png";
import brandsImg2 from "../../../assets/brands/casio.png";
import brandsImg3 from "../../../assets/brands/moonstar.png";
import brandsImg4 from "../../../assets/brands/randstad.png";
import brandsImg5 from "../../../assets/brands/star.png";
import brandsImg6 from "../../../assets/brands/start_people.png";

const Brands = () => {
  return (
    <div className="my-24">
      <h3 className="text-secondary text-3xl text-center font-extrabold mb-10">
        We've helped thousands of sales teams
      </h3>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={brandsImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandsImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandsImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandsImg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandsImg5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brandsImg6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
