import React from "react";
import { baseImage, subStractImage } from "../../../assets/Images";
import Marquee from "react-fast-marquee";
import VideoBackground from "../../Video/VideoBackground";
import bg_video from "../../../assets/videos/background video.mp4";
import SocialMedia from "../../libs/SocialMedia";
const Hero = () => {
  return (
    <main>
      <VideoBackground videoSrc={bg_video} />
      <div className="bg-transparent  absolute inset-0 flex flex-col items-center py-8">
        <img
          loading="lazy"
          className="w-[480px] h-[480px]"
          src={subStractImage}
        />
        <img loading="lazy" className="w-[380px] h-[380px]" src={baseImage} />
        <SocialMedia />
      </div>{" "}
      <div className=" bg-[#56AC22] h-[184px] ">
        <Marquee
          speed={75}
          direction="left"
          className="h-full font-Hanson whitespace-pre text-5xl lg:text-8xl uppercase  text-center [-webkit-text-stroke:3px_#000] text-whitesmoke font-bold p-1"
        >
          New Viking Pepe Gods are here to conquer.{"  "}
        </Marquee>
      </div>
    </main>
  );
};

export default Hero;
