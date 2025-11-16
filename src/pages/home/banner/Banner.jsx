import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ArrowIcon from "../../../components/utilities/ArrowIcon";
import rightImage1 from "../../../assets/heroSlides/male courier with a car carrying parcels.png";
import rightImage2 from "../../../assets/heroSlides/delivery_man 1.png";
import rightImage3 from "../../../assets/heroSlides/delivery_man 2.png";
import topImage1 from "../../../assets/heroSlides/running with parcel.png";

const Banner = () => {
  const slides = [
    {
      id: 1,
      rightImage: rightImage1,
      title: {
        before: "We Make Sure Your",
        highlight: "Parcel Arrives",
        after: "On Time – No Fuss.",
      },
      description:
        "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
      primaryButton: "Track Your Parcel",
      secondaryButton: "Be a Rider",
      topImg: topImage1,
    },
    {
      id: 2,
      rightImage: rightImage2,
      title: {
        before: "Fastest ",
        highlight: "Delivery",
        after: "& Easy Pickup",
      },
      description:
        "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
      primaryButton: "Track Your Parcel",
      secondaryButton: "Be a Rider",
      topImg: topImage1,
    },
    {
      id: 3,
      rightImage: rightImage3,
      title: {
        before: "Delivery in",
        highlight: "30 Minutes",
        after: "at your doorstep",
      },
      description:
        "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
      primaryButton: "Track Your Parcel",
      secondaryButton: "Be a Rider",
      topImg: topImage1,
    },
  ];
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{ clickable: true }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-between gap-30 bg-white px-24 py-18 rounded-2xl">
              <div className="basis-1/2 space-y-4">
                <img src={slide.topImg} alt="" className="w-56 h-24" />
                <h2 className="text-5xl font-extrabold text-secondary">
                  {slide.title.before}{" "}
                  <span className="text-primary">{slide.title.highlight}</span>{" "}
                  {slide.title.after}
                </h2>
                <p className="text-gray-500">{slide.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <button className="btn btn-primary text-secondary px-10 rounded-full">
                      {slide.primaryButton}
                    </button>
                    <ArrowIcon size={18} className="w-8 h-8" />
                  </div>
                  <button className="btn btn-outline btn-secondary">
                    {slide.secondaryButton}
                  </button>
                </div>
              </div>
              <div className="">
                <img src={slide.rightImage} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute left-25! bottom-12! flex gap-3 z-20"></div>
    </div>
  );
};

export default Banner;
