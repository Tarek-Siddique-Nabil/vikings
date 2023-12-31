import React, { useEffect, useState } from "react";
import { dexTools, coingecko, uniswap } from "../../../assets/Icons/icon";
import Marquee from "react-fast-marquee";

const Logo = () => {
  const [isMobile, setIsMobile] = useState(null);
  const logos = [
    {
      name: "Dextools",
      icon: dexTools,
    },
    {
      name: "Coingecko",
      icon: coingecko,
    },
    {
      name: "Uniswap",
      icon: uniswap,
    },
  ];

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-[255px] bg-[#56ac22]">
      <div className="flex items-center justify-center h-full">
        {!isMobile ? (
          <div className="flex items-end gap-52">
            {logos.map((logo, index) => (
              <div className="flex flex-col items-center" key={index}>
                <img
                  loading="lazy"
                  className="w-[109px] h-[109px]"
                  src={logo.icon}
                  alt={logo.name}
                />
                <p className="font-bold font-Hanson text-2xl text-whitesmoke">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <Marquee className="" speed={35} autoFill={true}>
            {logos.map((logo, index) => (
              <div className="flex flex-col items-center mx-3" key={index}>
                <img
                  loading="lazy"
                  src={logo.icon}
                  alt={logo.name}
                  className="w-[109px] h-[109px]"
                />
                <p className="font-bold font-Hanson text-2xl text-whitesmoke">
                  {logo.name}
                </p>
              </div>
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
};

export default Logo;
