import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewData from "../../../data/reviews.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import reviewTopImg from "../../../assets/customer-top.png";
import ReviewCard from "./ReviewCard";

const Review = () => {
  console.log(reviewData);

  return (
    <div className="mb-20">
      <div className="flex flex-col items-center gap-2">
        <img src={reviewTopImg} alt="" />
        <h3 className="text-4xl font-extrabold text-secondary">
          What our customers are sayings
        </h3>
        <p className="max-w-200 text-center text-gray-500">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="mt-10 relative w-full">
        <Swiper
          slidesPerView={3.5}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".testimonial-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper testimonial-swiper"
        >
          {reviewData.map((review, i) => (
            <SwiperSlide className="w-[350px]! md:w-[420px]!" key={i}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div class="flex items-center justify-center gap-6 mt-8">
          <button class="prev bg-base-100 text-secondary shadow-lg w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <span class="text-xl">←</span>
          </button>
          <div class="testimonial-pagination w-auto!"></div>
          <button class="next bg-primary text-secondary w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <span class="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
