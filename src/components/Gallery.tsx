import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import firstPicture from "../assets/img/model1.jpg";
import secondPicture from "../assets/img/model2.jpg";
import thirdPicture from "../assets/img/smile1.jpg";
import fourthPicture from "../assets/img/smile2.jpg";

function Gallery() {
  const pictureStyle = {
    height: "700px",
  };

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
      spaceBetween: 20,
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="galery"
      >
        <SwiperSlide>
          <img style={pictureStyle} src={firstPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={pictureStyle} src={secondPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={pictureStyle} src={thirdPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={pictureStyle} src={fourthPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={pictureStyle} src={firstPicture} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={pictureStyle} src={secondPicture} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
