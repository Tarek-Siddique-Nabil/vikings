import React from "react";
import Hero from "./Pages/Hero";
import ImageSection from "./Pages/ImageSection";
import Descrive from "./Pages/Descrive";
import Footer from "./Pages/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Hero />
      <ImageSection />
      <Descrive />
      <Footer />
    </div>
  );
};

export default Home;
