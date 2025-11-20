import React, { useContext } from "react";
import Logo from "../../../components/logo/Logo";
import BoxContainer from "../../../components/utilities/BoxContainer";
import { Link, NavLink } from "react-router";
import ArrowIcon from "../../../components/utilities/ArrowIcon";
import { AuthContext } from "../../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser();
  };
  //console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="services">Services</NavLink>
      </li>
      <li>
        <NavLink to="coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="about-us">About us</NavLink>
      </li>
      <li>
        <NavLink to="pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <BoxContainer className="bg-white py-2 px-4 rounded-2xl">
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl">
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <img
              src={user.photoURL}
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <img
              src="https://i.ibb.co.com/HDvMs58y/user-avatar-male-5.png"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
          )}
          {user ? (
            <button
              className="btn btn-outline btn-secondary hover:text-primary"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="login"
              className="btn btn-outline btn-secondary hover:text-primary"
            >
              Sign In
            </Link>
          )}

          <div className="flex items-center">
            <Link to="rider" className="btn btn-primary text-secondary">
              Be a Rider
            </Link>
            <ArrowIcon size={24} className="w-10 h-10" />
          </div>
        </div>
      </nav>
    </BoxContainer>
  );
};

export default Navbar;
