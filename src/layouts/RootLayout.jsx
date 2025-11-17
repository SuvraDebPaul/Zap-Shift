import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/header/Navbar";
import Footer from "../pages/shared/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <header className="py-2">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="pb-2">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default RootLayout;
