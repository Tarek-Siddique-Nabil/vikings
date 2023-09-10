import React from "react";
import {
  trust_wallet,
  coin_market_cap,
  uniswap,
  dexTools,
} from "../../../assets/Icons/icon";
import Marquee from "react-fast-marquee";

const Logo = () => {
  const logos = [
    {
      name: "trust wallet",
      icon: trust_wallet,
    },
    {
      name: "coin market cap",
      icon: coin_market_cap,
    },
    {
      name: "uni swap",
      icon: uniswap,
    },
    {
      name: "dextools",
      icon: dexTools,
    },
  ];
  return (
    <section className="h-[255px] bg-[#56ac22]">
      <div className=" flex  items-center  justify-center h-full">
        <div className="hidden md:flex gap-5 ">
          {" "}
          {logos.map((logo, index) => (
            <img key={index} src={logo.icon} alt={logo.name} />
          ))}
        </div>
        {/* <Marquee speed={20} autoFill={true} className="block md:hidden">
          {" "}
          {logos.map((logo, index) => (
            <img key={index} src={logo.icon} alt={logo.name} className="mx-5" />
          ))}
        </Marquee> */}
      </div>{" "}
    </section>
  );
};

export default Logo;
