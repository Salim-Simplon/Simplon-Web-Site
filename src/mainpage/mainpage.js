import React from "react";
import Testimonies from "./Testimonies/Testimonies";
import Partners from "./Partners/Partners";
import pic1 from "./image/immeuble.jpg";
import pic2 from "./image/microsoft.png";
import pic3 from "./image/total.png";
import pic4 from "./image/Accenture_logo.png";
import pic5 from "./image/fondation-bnpp-1.jpg";
import pic6 from "./image/orange.png";

let partner = [pic1, pic2, pic3, pic4, pic5, pic6];

function MainPage() {
  return (
    <div className="mainPage">
      <Testimonies />
      <Partners pics={partner} />
    </div>
  );
}
export default MainPage;
