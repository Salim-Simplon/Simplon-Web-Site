import React from "react";
import "./App.css";
import Staff from "./Equipe/Staff";
import Foot from "./Footer/Footer";
import Map from "./Map/Map";
import SimpleSlider from "./Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <SimpleSlider />
      <Map />
      <Staff />
      <Foot />
    </div>
  );
}

export default App;
