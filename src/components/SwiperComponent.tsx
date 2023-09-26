import React, { useRef, useState } from "react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import picture1 from "../assets/img/image05.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function SwiperComponent() {
  const pictureStyle = {
    width: "450px",
  };

  return (
    <>
      <Swiper
        style={{ height: "450px" }}
        slidesPerView={1}
        spaceBetween={100}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ width: "450px" }} src={picture1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img style={{ width: "450px" }} src={picture1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img style={{ width: "450px" }} src={picture1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img style={{ width: "450px" }} src={picture1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img style={{ width: "450px" }} src={picture1} />
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
