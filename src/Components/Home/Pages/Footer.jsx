import React from "react";
import { imageFive, imageSix } from "../../../assets/Images";

const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center lg:items-end p-2 overflow-hidden">
      <img
        loading="lazy"
        className="hidden md:block w-fit h-[664px]"
        src={imageFive}
      />
      <div className="flex flex-col items-center  gap-12 text-center">
        <p className="font-MonumentExtendedUltrabold text-[84px] lg:text-9xl font-extrabold">
          $VPEPE
        </p>
        <div>
          <p className="font-Hanson font-bold text-base lg:text-2xl">
            Total Supply:
          </p>
          <p className="font-Hanson text-7xl lg:text-9xl ">10M</p>
          <p className="font-HappyMonkey font-normal text-3xl lg:text-2xl">
            $VPEPE
          </p>
        </div>
        <div>
          <p className="font-Hanson font-bold text-base lg:text-2xl">
            Liquidity Locked:
          </p>
          <p className="font-Hanson font-bold text-7xl lg:text-9xl">100%</p>
        </div>
        <div>
          <p className="font-Hanson font-bold text-base lg:text-2xl">
            Buy/Sell Tax:
          </p>
          <p className="font-Hanson font-bold text-7xl lg:text-9xl">3/3</p>
        </div>
      </div>
      <img
        loading="lazy"
        className="hidden md:block w-fit h-[664px]"
        src={imageSix}
      />
    </section>
  );
};

export default Footer;
