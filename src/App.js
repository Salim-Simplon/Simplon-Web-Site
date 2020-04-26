
import React from "react";
import MainPage from "./mainpage/mainpage";
import "./App.css";
import Vision from "./A propos/notre_vision/notre_vision";
import React from 'react';
import "./Navbar/navbar.css"
import  Navbar from "./Navbar/navbar";
import "./Nos Valeur/notrevaleur.css"
import NosValeur from "./Nos Valeur/notrevaleur";
import "./Reseau sociaux/reseau.css"
import Reseau from "./Reseau sociaux/reseau"
import "./App.css";
import Staff from "./Equipe/Staff";
import Foot from "./Footer/Footer";
import Map from "./Map/Map";
import SimpleSlider from "./Carousel/Carousel";
const list=["Acceuil","Equipe","Apropos","Contact"];


function App() {
  return (
    <div className="App">
      {/* After importing the Main page (page Accueil) it will be called here*/}
      <Vision />
      <MainPage />  
  <Navbar links={ list.map( el=><span className="liste">  <a    className = "links"   href="#" >   {el}</a></span>)}/>
       <NosValeur />
       <Reseau/>
      <SimpleSlider />
      <Map />
      <Staff />
      <Foot />
    </div>
  );
}

export default App;
