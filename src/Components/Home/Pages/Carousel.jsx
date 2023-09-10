import React from "react";
import {
  imageOne,
  imageTwo,
  imageThree,
  imageSecondary,
  imageFour,
  imageFive,
  imageSix,
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
      <p className="font-Hanson font-bold text-5xl text-center">
        Collection Coming Soon!
      </p>
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
      <div className="h-[255px] bg-[#56ac22]"></div>
    </section>
  );
};

export default Carousel;
