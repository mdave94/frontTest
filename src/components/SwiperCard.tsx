import { ReactNode } from "react";
import picture1 from "../assets/img/groupPicture_5.jpg";

type SwiperCardProps = {
  children: ReactNode;
  picture: string;
};

function SwiperCard({ children, picture }: SwiperCardProps) {
  return (
    <>
      <div className="card-container">
        <div className="text-side">
          <div className="card-text">{children}</div>
        </div>
        <div className="picture-side">
          <img src={picture} id="card-picture" alt="picture" />
        </div>
      </div>
    </>
  );
}

export default SwiperCard;
