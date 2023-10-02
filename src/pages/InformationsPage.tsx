import { useEffect } from "react";
function InformationsPage() {
  useEffect(() => {
    console.log(" history useffect ");
    window.scrollTo(0, 0);
  }, []);
  return <>INFORMATIONS</>;
}

export default InformationsPage;
