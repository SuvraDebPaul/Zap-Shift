import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `${
          isActive ? "bg-primary font-semibold text-secondary rounded-full" : ""
        }`;
      }}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
