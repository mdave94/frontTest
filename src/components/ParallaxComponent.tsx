type ParallaxComponentProps = {
  imageUrl?: string;
  children?: React.ReactNode;
  className?: string;
  minHeight?: string;
  style?: string;
  id?: string;
};

function ParallaxComponent({
  imageUrl,
  children,
  className,
  minHeight,
}: ParallaxComponentProps) {
  const parallaxStyle = {
    backgroundImage: `url(${imageUrl})`,
    height: `${minHeight}`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className={`parallax ${className}`} style={parallaxStyle}>
      {children}
    </div>
  );
}

export default ParallaxComponent;
