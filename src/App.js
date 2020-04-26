import React from "react";
import MainPage from "./mainpage/mainpage";
import "./App.css";
import Vision from "./A propos/notre_vision/notre_vision";

function App() {
  return (
    <div className="App">
      {/* After importing the Main page (page Accueil) it will be called here*/}
      <Vision />
      <MainPage />
    </div>
  );
}

export default App;
