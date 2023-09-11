import React from "react";
import {
  imageFour,
  imageFive,
  imageSix,
  subStractImage,
  imageOne,
} from "../../../assets/Images";
import Marquee from "react-fast-marquee";
import SocialMedia from "../../libs/SocialMedia";

const Carousel = () => {
  const images = [
    {
      name: "",
      src: imageOne,
    },

    {
      name: "",
      src: imageFour,
    },
    {
      name: "",
      src: imageFive,
    },
    {
      name: "",
      src: imageSix,
    },
  ];
  return (
    <section className="flex flex-col gap-20 mt-5">
      <p className="hidden md:block font-Hanson font-bold text-5xl text-center uppercase">
        Collection Coming Soon!
      </p>
      <div className="md:hidden font-Hanson leading-9 font-bold uppercase text-center">
        <p className="text-[44px] ">Collection </p>
        <p className="text-[32px] text-whitesmoke  [-webkit-text-stroke:1px_#000]">
          Coming Soon!
        </p>
      </div>
      {/* first 
    marquee  */}
      <Marquee speed={20} direction="left" autoFill={true}>
        {images.map((image, index) => (
          <img className="carousel-image " key={index} src={image.src} />
        ))}
      </Marquee>

      {/* second marquee */}
      <Marquee speed={25} direction="right" autoFill={true}>
        {images.map((image, index) => (
          <img className="carousel-image " key={index} src={image.src} />
        ))}
      </Marquee>
      <div className="h-[255px] bg-black flex  items-center  justify-between lg:px-32 px-10">
        <img
          className=" md:w-[240px] w-[109px]  md:h-[240px] h-[109px] 
           object-cover"
          src={subStractImage}
        />
        <SocialMedia />
      </div>
    </section>
  );
};

export default Carousel;
