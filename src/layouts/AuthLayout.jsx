import React from "react";
import Logo from "../components/logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <>
      <div className="flex justify-between items-start h-screen">
        <div className="flex-1 bg-base-100 h-screen pl-15 pt-5">
          <div className="mb-10">
            <Logo></Logo>
          </div>
          <div className="flex justify-center items-center">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center h-full">
          <img src={authImg} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
