import { ReactNode } from "react";

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
