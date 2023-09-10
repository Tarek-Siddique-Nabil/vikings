import React from "react";
import { imageOne, imageThree, imageTwo } from "../../../assets/Images";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSection = () => {
  return (
    <section className="flex flex-col gap-24">
      <div className="hidden  w-full md:flex justify-between h-[1110px] relative ">
        <img className="  w-[560px] h-[986px] object-center" src={imageThree} />
        <img
          className=" mix-blend-multiply object-center  absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1024px] h-[1024px]"
          src={imageOne}
        />
        <img className=" w-[560px] h-[986px] object-center" src={imageTwo} />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: -20,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="mySwiper sm:hidden"
      >
        <SwiperSlide>
          <img className="w-full h-[1024px] object-cover" src={imageOne} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[1024px] object-cover" src={imageTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[1024px] object-cover" src={imageThree} />
        </SwiperSlide>
      </Swiper>
      <p className="hidden md:block uppercase lg:whitespace-pre font-Hanson text-4xl lg:text-8xl font-bold overflow-hidden py-2 text-whitesmoke text-center [-webkit-text-stroke:1px_#000]">
        Origins of the Viking Pepes
      </p>
      <div className=" font-Hanson leading-10  font-bold overflow-hidden  text-whitesmoke text-center [-webkit-text-stroke:1px_#000] uppercase">
        <p className="text-[32px]"> Origins of the</p>
        <p className="text-[40px]">Viking Pepes</p>
      </div>
    </section>
  );
};

export default ImageSection;
