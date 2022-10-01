import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { NextBtn, PrevBtn, Wrapper } from "./styled";
import { IMAGES } from "src/constants/images";

const images = [
  IMAGES.CAROUSEL_CONSULTATION_ROOM,
  IMAGES.CAROUSEL_DENTSPLY_SIRONA,
  IMAGES.CAROUSEL_LOBBY_AREA,
  IMAGES.CAROUSEL_ORTHOPHOS_SL,
  IMAGES.CAROUSEL_SNACK_AREA,
];

const CarouselSection = () => {
  return (
    <Wrapper>
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item) => (
          <SwiperSlide>
            <img src={item} />
          </SwiperSlide>
        ))}
        <NextBtn className="next" />
        <PrevBtn className="prev" />
      </Swiper>
    </Wrapper>
  );
};

export default CarouselSection;
