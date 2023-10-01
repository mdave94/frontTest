type ParallaxComponentProps = {
  imageUrl: string;
  children?: React.ReactNode;
  className?: string;
};

function ParallaxComponent({
  imageUrl,
  children,
  className,
}: ParallaxComponentProps) {
  const parallaxStyle = {
    backgroundImage: `url(${imageUrl})`,
    minHeight: "500px",
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
