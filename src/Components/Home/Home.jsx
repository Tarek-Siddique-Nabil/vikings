import React from "react";
import Hero from "./Pages/Hero";
import ImageSection from "./Pages/ImageSection";
import Descrive from "./Pages/Descrive";
import Footer from "./Pages/Footer";
import Logo from "./Pages/Logo";
import Carousel from "./Pages/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 overflow-hidden">
      <Hero />
      <ImageSection />
      <Descrive />
      <Footer />
      <Logo />
      <Carousel />
    </div>
  );
};

export default Home;
