import React from "react";
import Navbar from "../shared/header/Navbar";
import Banner from "./banner/Banner";
import BoxContainer from "../../components/utilities/BoxContainer";
import HowItWorks from "./howItWorks/HowItWorks";
import Services from "./services/Services";
import Brands from "./brands/brands";
import LiveTracking from "./livetracking/LiveTracking";
import Review from "./review/Review";

const Home = () => {
  return (
    <>
      <BoxContainer>
        <Banner></Banner>
        <HowItWorks></HowItWorks>
        <Services></Services>
        <Brands></Brands>
        <LiveTracking></LiveTracking>
      </BoxContainer>
      <Review></Review>
    </>
  );
};

export default Home;
