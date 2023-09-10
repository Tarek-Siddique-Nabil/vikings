import React from "react";
import { baseImage, subStractImage } from "../../../assets/Images";
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <main className=" ">
      <div className="bg-black flex flex-col items-center py-16">
        <img className="w-[400px] h-[400px]" src={subStractImage} />
        <img className="w-[320px] h-[320px]" src={baseImage} />
      </div>{" "}
      <div className=" bg-[#56AC22] h-[184px] ">
        <Marquee
          speed={100}
          direction="left"
          className="h-full font-Hanson whitespace-pre text-8xl uppercase  text-center [-webkit-text-stroke:3px_#000] text-whitesmoke font-bold p-1"
        >
          New Viking Pepe Gods are here to conquer.{"  "}
        </Marquee>
      </div>
    </main>
  );
};

export default Hero;
