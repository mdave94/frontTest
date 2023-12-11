import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import picture1 from "../assets/images/gallery/1.jpg";
import picture2 from "../assets/images/gallery/2.jpg";
import picture3 from "../assets/images/gallery/3.jpg";
import picture4 from "../assets/images/gallery/4.jpg";
import picture5 from "../assets/images/gallery/5.jpg";
import picture6 from "../assets/images/gallery/6.jpg";
import picture7 from "../assets/images/gallery/7.jpg";

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
          <img className="galery-picture" src={picture1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={picture2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={picture3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={picture4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={picture5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="galery-picture" src={picture6} />
        </SwiperSlide>

        <SwiperSlide>
          <img className="galery-picture" src={picture7} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
