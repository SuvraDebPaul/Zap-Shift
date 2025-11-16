import React from "react";
import liveTrackingImg from "../../../assets/live-tracking.png";
import liveTrackingImg2 from "../../../assets/safe-delivery.png";

const LiveTracking = () => {
  return (
    <div>
      <div className="my-20">
        <div className="bg-base-100 p-8 rounded-xl flex justify-between items-center gap-8">
          <div className="w-40 shrink-0">
            <img src={liveTrackingImg} alt="" className="w-full" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-secondary mb-4">
              Live Parcel Tracking
            </h3>
            <p className="text-gray-500 pr-10">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        <div className="bg-base-100 p-8 rounded-xl flex justify-between items-center gap-8 my-10">
          <div className="w-40 shrink-0">
            <img src={liveTrackingImg2} alt="" className="w-full" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-secondary mb-4">
              100% Safe Delivery
            </h3>
            <p className="text-gray-500 pr-10">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="bg-base-100 p-8 rounded-xl flex justify-between items-center gap-8">
          <div className="w-40 shrink-0">
            <img src={liveTrackingImg2} alt="" className="w-full" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-secondary mb-4">
              24/7 Call Center Support
            </h3>
            <p className="text-gray-500 pr-10">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
