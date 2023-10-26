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
      spaceBetween: 1,
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
      <div className="opinions-container">
        <div className="opinion-header">
          Mennyire egyszerű használni a MINNAE mosolyékszereket?
        </div>
        <Swiper
          effect={"coverflow"}
          breakpoints={breakpoints}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 10,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="opinion-swiper"
        >
          <SwiperSlide className="opinion-container">
            <div>
              <p className="opinion-text">
                “Kevesebb kézügyességet igényel, mint a műszempilla
                felhelyezése”
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
      </div>
    </>
  );
}

export default Opinions;
