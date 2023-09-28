import { ReactNode } from "react";
import sliderPict1 from "../assets/img/model_mirror.jpg";

type SwiperCardProps = {
  children: ReactNode;
  picture: string;
};

function SwiperCard({ children, picture }: SwiperCardProps) {
  const sliderPictureStyle = {
    width: "auto",
    height: "350px",
  };

  return (
    <>
      <div className="card-container">
        <div className="text-side">
          <div className="card-text">{children}</div>
          <div className="card-button">Részletek</div>
        </div>
        <div className="picture-side">
          <img src={picture} id="card-picture" alt="pict1" />
        </div>
      </div>
    </>
  );
}

export default SwiperCard;
