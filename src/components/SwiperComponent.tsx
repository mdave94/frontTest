import { Swiper, SwiperSlide } from "swiper/react";
import picture1 from "../assets/img/swiper-3-2/green1.jpg";
import picture2 from "../assets/img/swiper-3-2/pink1.jpg";
import picture4 from "../assets/img/same-scale/IMG_0223.jpg";
import picture3 from "../assets/img/smile.jpg";
import picture5 from "../assets/img/same-scale/IMG_0215.jpg";
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
          <SwiperCard picture={picture1}>
            A MINNAE mosolyékszer fogorvosi tervezés alapján készült, tehát
            minden lehetséges kockázatot szem előtt tartottunk és igyekeztünk
            minimálisra csökkenteni azokat
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard picture={picture2}>
            Nem kell fúrni a fogakat, és a tisztítást sem befolyásolja. Nem
            szükséges felkeresni a fogorvost ha fel szeretnénk helyezni, vagy le
            szeretnénk venni. Szabadon viselhető.
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard picture={picture5}>
            A fogékszer első hallásra sokaknak a 2000-es évek rapp zenészeit
            juttatja eszébe, vagy a fogakra ragasztott apró kristályt, amely
            bizonytalan idő után leesik.
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard picture={picture4}>
            A mosoly ékszerek a fogak közé csúsztathatók be, így nem
            befolyásolják a harapást. Viseletük kényelmes és stabil.
          </SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard picture={picture3}>
            Használata egyszerű, de az eredmény látványos.
          </SwiperCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
