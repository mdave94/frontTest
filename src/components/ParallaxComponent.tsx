type ParallaxComponentProps = {
  imageUrl: string;
  children?: any;
};

function ParallaxComponent({ imageUrl, children }: ParallaxComponentProps) {
  const parallaxStyle = {
    /* Set the dynamic background image using props */
    backgroundImage: `url(${imageUrl})`,
    /* Set other parallax styles as needed */
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="parallax" style={parallaxStyle}>
      {children}
    </div>
  );
}

export default ParallaxComponent;
