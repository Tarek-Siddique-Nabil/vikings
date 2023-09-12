import React from "react";
import { dexTools, telegram, twiter } from "../../assets/Icons/icon";

const SocialMedia = () => {
  const socials = [
    {
      link: "https://t.me/vPEPE_erc",
      icon: telegram,
    },
    {
      link: "https://twitter.com/vPEPE_erc",
      icon: twiter,
    },
    {
      link: "https://www.dextools.io/app",
      icon: dexTools,
    },
  ];
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => (
        <a key={index} href={social?.link}>
          <img
            loading="lazy"
            className="lg:w-10 w-5 h-5 lg:h-10"
            src={social?.icon}
          />{" "}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
