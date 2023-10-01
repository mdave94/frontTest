import "../assets/css/herosection.css";

type ScrolltoElementButtonProps = {
  targetId?: any;
};

function ScrolltoElementButton({ targetId }: ScrolltoElementButtonProps) {
  const scrollToTargetSection = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 95,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={scrollToTargetSection}
      className="ca3-scroll-down-link ca3-scroll-down-arrow"
      data-ca3_icon=""
    ></div>
  );
}

export default ScrolltoElementButton;
