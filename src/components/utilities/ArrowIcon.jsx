import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ArrowIcon = ({ size, className }) => {
  return (
    <>
      <span
        className={`${className} bg-secondary rounded-full flex justify-center items-center text-primary`}
      >
        <FiArrowUpRight size={size} />
      </span>
    </>
  );
};

export default ArrowIcon;
