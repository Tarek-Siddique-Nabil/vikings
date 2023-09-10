import React from "react";
import { imageOne, imageThree, imageTwo } from "../../../assets/Images";

const ImageSection = () => {
  return (
    <section className="flex flex-col gap-24">
      <div className="w-full flex justify-between h-[1110px] relative ">
        <img className="w-[560px] h-[986px] object-center" src={imageThree} />
        <img
          className="mix-blend-multiply object-center  absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1024px] h-[1024px]"
          src={imageOne}
        />
        <img className="w-[560px] h-[986px] object-center" src={imageTwo} />
      </div>

      <p className=" uppercase whitespace-pre font-Hanson text-8xl font-bold overflow-hidden py-2 text-whitesmoke text-center [-webkit-text-stroke:1px_#000]">
        Origins of the Viking Pepes
      </p>
    </section>
  );
};

export default ImageSection;
