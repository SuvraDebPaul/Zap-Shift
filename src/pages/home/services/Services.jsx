import React from "react";
import services from "../../../data/services.json";
import ServiceCard from "./ServiceCard";

const Services = () => {
  //console.log(services);

  return (
    <div className="bg-secondary text-white text-center pt-24 rounded-2xl">
      <h2 className="text-4xl font-extrabold">Our Services</h2>
      <p>
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to
        <br />
        business shipments — we deliver on time, every time.
      </p>
      <div className="grid grid-cols-3 gap-6 p-18">
        {services.map((serviceItem, i) => {
          return <ServiceCard key={i} serviceItem={serviceItem} />;
        })}
      </div>
    </div>
  );
};

export default Services;
