import React from "react";
import LogoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end font-black">
      <img src={LogoImg} alt="zapShift Logo" />
      <h3 className="text-3xl -ms-2.5">ZapShift</h3>
    </div>
  );
};

export default Logo;
