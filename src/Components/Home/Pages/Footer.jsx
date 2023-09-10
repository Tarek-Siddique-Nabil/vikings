import React from "react";
import { imageFive, imageSix } from "../../../assets/Images";

const Footer = () => {
  return (
    <section className="flex justify-between items-end p-2">
      <img className="w-fit h-[600px]" src={imageFive} />
      <div className="flex flex-col items-center gap-2">
        <p className="font-MonumentExtendedUltrabold text-9xl font-extrabold">
          $VPEPE
        </p>
        <>
          <span className="font-Hanson font-bold text-2xl">Total Supply:</span>
          <span className="font-Hanson font-bold text-[110px]">10M</span>
          <span className="font-HappyMonkey font-normal text-2xl">$VPEPE</span>
        </>
        <>
          <span className="font-Hanson font-bold text-2xl">
            Liquidity Locked:
          </span>
          <span className="font-Hanson font-bold text-[110px]">100%</span>
        </>
        <>
          <span className="font-Hanson font-bold text-2xl">Buy/Sell Tax:</span>
          <span className="font-Hanson font-bold text-[110px]">3/3</span>
        </>
      </div>
      <img className="w-fit h-[600px]" src={imageSix} />
    </section>
  );
};

export default Footer;
