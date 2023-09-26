import { Swiper, SwiperSlide } from "swiper/react";

import picture1 from "../assets/img/image05.jpg";
import picture2 from "../assets/img/smile1.jpg";
import picture3 from "../assets/img/3item.jpg";
import picture4 from "../assets/img/image07.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/swiper.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

type SwiperComponentProps = {
  title: string;
};

function SwiperComponent({ title }: SwiperComponentProps) {
  const pictureStyle = {
    width: "450px",
  };

  return (
    <>
      <div className="header">
        <p className="header-text"> {title}</p>
      </div>
      <Swiper
        style={{ height: "450px", maxWidth: "800px" }}
        slidesPerView={1}
        spaceBetween={100}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ maxWidth: "430px" }} src={picture1} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "450px" }} src={picture2} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "450px" }} src={picture3} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "450px" }} src={picture4} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "450px" }} src={picture1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
