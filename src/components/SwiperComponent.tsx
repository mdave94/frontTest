import { Swiper, SwiperSlide } from "swiper/react";
import picture1 from "../assets/img/image05.jpg";
import sliderCardPicture2 from "../assets/img/3item.jpg";
import picture4 from "../assets/img/image07.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/swiper.css";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCard from "./SwiperCard";

type SwiperComponentProps = {
  title: string;
};

function SwiperComponent({ title }: SwiperComponentProps) {
  return (
    <>
      <div className="header">
        <p className="header-text"> {title}</p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <SwiperCard picture={sliderCardPicture2}>
            Kialakításuknak köszönhetően stabilan helyben maradnak, ugyanakkor
            nem zavarják a fogak érintkezését.
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard picture={sliderCardPicture2}>
            Ennek eredményeként nem kell a helybentartásukra koncentrálni, és
            nem zavarják a beszédet.
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="siperPicture"
            style={{ width: "450px" }}
            src={sliderCardPicture2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="siperPicture" style={{ width: "450px" }} src={picture4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="siperPicture" style={{ width: "450px" }} src={picture1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
