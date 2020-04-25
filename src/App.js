import React from "react";

import "./App.css";
import MainPage from "./mainpage/mainpage";

function App() {
  return (
    <div className="App">
      {/* After importing the Main page (page Accueil) it will be called here*/}
      <MainPage />
    </div>
  );
}

export default App;
