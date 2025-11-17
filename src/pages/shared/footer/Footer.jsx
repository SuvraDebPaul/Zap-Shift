import React from "react";
import BoxContainer from "../../../components/utilities/BoxContainer";
import Logo from "../../../components/logo/Logo";
import { NavLink } from "react-router";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink>Services</NavLink>
      </li>
      <li>
        <NavLink>Coverage</NavLink>
      </li>
      <li>
        <NavLink>About us</NavLink>
      </li>
      <li>
        <NavLink>Pricing</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );
  return (
    <BoxContainer className="bg-black rounded-2xl flex flex-col items-center text-base-100">
      <div className="mt-10 mb-5">
        <Logo></Logo>
      </div>
      <div className="max-w-200 text-center">
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="divider divider-primary w-10/12 mx-auto"></div>
      <div>
        <ul className="flex items-center gap-4">{links}</ul>
      </div>
      <div className="divider divider-primary w-10/12 mx-auto"></div>
      <div className="mb-15 flex items-center gap-10 cursor-pointer">
        <FaLinkedinIn />
        <BsTwitterX />
        <FaFacebook />
        <FaYoutube />
      </div>
    </BoxContainer>
  );
};

export default Footer;
