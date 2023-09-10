import React from "react";
import {
  imageOne,
  imageTwo,
  imageThree,
  imageSecondary,
  imageFour,
  imageFive,
  imageSix,
  baseImage,
} from "../../../assets/Images";
import Marquee from "react-fast-marquee";

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
      <div className="h-[255px] bg-[#56ac22] flex  items-center  justify-center">
        <img className="scale-75 w-fit h-fit object-cover" src={baseImage} />
      </div>
    </section>
  );
};

export default Carousel;
