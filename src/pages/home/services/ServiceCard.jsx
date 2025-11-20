import React from "react";
import serviceImg from "../../../assets/service.png";

const ServiceCard = ({ serviceItem }) => {
  //console.log(serviceItem);
  return (
    <div className="bg-base-100 p-6 rounded-lg text-gray-700 hover:bg-primary cursor-pointer transition-all duration-200 flex flex-col items-center gap-5 hover:shadow-md">
      <img src={serviceImg} alt="" />
      <h3 className="text-secondary text-2xl font-bold">{serviceItem.title}</h3>
      <p>{serviceItem.description}</p>
    </div>
  );
};

export default ServiceCard;
