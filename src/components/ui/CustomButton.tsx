type CustomButtonProps = {
  title: string;
  href: string;
};

function CustomButton({ href, title }: CustomButtonProps) {
  return (
    <>
      <a className="custom-button" href="https://minnae.salonic.hu">
        {title}
      </a>
    </>
  );
}

export default CustomButton;
