import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import firstPicture from "../assets/img/model1.jpg";
import secondPicture from "../assets/img/model2.jpg";
import thirdPicture from "../assets/img/smile1.jpg";
import fourthPicture from "../assets/img/smile2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/css/opinion.css";

function Opinions() {
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
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={breakpoints}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="opinion-swiper"
      >
        <SwiperSlide className="opinion-container">
          <div>
            <p className="opinion-text">
              “Kevesebb kézügyességet igényel, mint a műszempilla felhelyezése”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Nagyon gyorsan hozzá lehet szokni, már csak egy mozdulat és a
            helyén van“
          </p>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Nagyon gyorsan hozzá lehet szokni, már csak egy mozdulat és a
            helyén van“
          </p>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Kevesebb kézügyességet igényel, mint a műszempilla felhelyezése”
          </p>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Nagyon gyorsan hozzá lehet szokni, már csak egy mozdulat és a
            helyén van“
          </p>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Nagyon gyorsan hozzá lehet szokni, már csak egy mozdulat és a
            helyén van“
          </p>
        </SwiperSlide>

        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Olyan szabil,hogy 5 perc után észre sem veszem,hogy rajtam van“
          </p>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Nagyon gyorsan hozzá lehet szokni, már csak egy mozdulat és a
            helyén van“
          </p>
        </SwiperSlide>

        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Olyan szabil,hogy 5 perc után észre sem veszem,hogy rajtam van“
          </p>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Nagyon gyorsan hozzá lehet szokni, már csak egy mozdulat és a
            helyén van“
          </p>
        </SwiperSlide>
        <SwiperSlide className="opinion-container">
          <p className="opinion-text">
            “Olyan szabil,hogy 5 perc után észre sem veszem,hogy rajtam van“
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Opinions;
