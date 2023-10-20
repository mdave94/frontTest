import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import firstPicture from "../assets/img/model1.jpg";
import secondPicture from "../assets/img/model2.jpg";
import thirdPicture from "../assets/img/smile1.jpg";
import fourthPicture from "../assets/img/smile2.jpg";

import "../assets/css/galery.css";
function Gallery() {
  const breakpoints = {
    370: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    900: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="galery-container"
      >
        <SwiperSlide>
          <img className="galery-picture" src={firstPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={secondPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={thirdPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={fourthPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={firstPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={secondPicture} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
