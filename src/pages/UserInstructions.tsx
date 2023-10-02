import { useEffect } from "react";

function UserInstructions() {
  useEffect(() => {
    console.log(" history useffect ");
    window.scrollTo(0, 0);
  }, []);

  return <>userInstrucions</>;
}

export default UserInstructions;
