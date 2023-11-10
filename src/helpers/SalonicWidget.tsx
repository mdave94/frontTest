import { useEffect } from "react";

function SalonicWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://minnae.salonic.hu/widget.js";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return <></>;
}

export default SalonicWidget;
