import React from "react";
import { imageOne, imageThree, imageTwo } from "../../../assets/Images";
import Marquee from "react-fast-marquee";

const ImageSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="w-full flex justify-between">
        <img className="w-[400px] h-[600px] " src={imageThree} />{" "}
        <img className="w-[750px] h-[750px] mt-12 shadow-" src={imageOne} />
        <img className="w-[400px] h-[600px] " src={imageTwo} />
      </div>
      <Marquee className="font-Hanson text-8xl font-bold overflow-hidden py-2 text-whitesmoke text-center [-webkit-text-stroke:1px_#000]">
        Origins of the Viking Pepes
      </Marquee>
    </section>
  );
};

export default ImageSection;
