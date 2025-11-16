import React from "react";
import liveTrackingImg from "../../../assets/live-tracking.png";
import liveTrackingImg2 from "../../../assets/safe-delivery.png";
import merchantDesign from "../../../assets/Group-merchant.png";
import merchantLocation from "../../../assets/location-merchant.png";

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
      <div className="divider mb-20"></div>
      <div className="bg-secondary rounded-2xl relative overflow-hidden text-base-100 mb-20">
        <div className="absolute left-50 -top-70 -translate-left-50 w-full ">
          <img src={merchantDesign} alt="" className="" />
        </div>
        <div className="flex justify-between gap-10 py-20 px-10">
          <div className="basis-2/3">
            <h3 className="text-4xl font-extrabold">
              Merchant and Customer Satisfaction is Our First Priority
            </h3>
            <p className="my-5">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="space-x-4">
              <button className="btn btn-primary text-secondary rounded-full">
                Become a Merchant
              </button>
              <button className="btn btn-outline btn-primary rounded-full">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
          <div className="basis-1/3">
            <img src={merchantLocation} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
