import React from "react";
import bookingImg from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="p-15 ">
      <h2 className="font-extrabold text-3xl mb-15">How It Works </h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-xl space-y-4">
          <img src={bookingImg} alt="" className="w-14 h-14" />
          <h2 className="font-bold text-lg text-secondary">
            Booking Pick & Drop
          </h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl space-y-4">
          <img src={bookingImg} alt="" className="w-14 h-14" />
          <h2 className="font-bold text-lg text-secondary">Cash On Delivery</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl space-y-4">
          <img src={bookingImg} alt="" className="w-14 h-14" />
          <h2 className="font-bold text-lg text-secondary">Delivery Hub</h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl space-y-4">
          <img src={bookingImg} alt="" className="w-14 h-14" />
          <h2 className="font-bold text-lg text-secondary">
            Booking SME & Corporate
          </h2>
          <p className="text-gray-500">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
