import React from 'react';
import "./Navbar/navbar.css"
import  Navbar from "./Navbar/navbar";
import "./Nos Valeur/notrevaleur.css"
import NosValeur from "./Nos Valeur/notrevaleur";
import "./Reseau sociaux/reseau.css"
import Reseau from "./Reseau sociaux/reseau"



const list=["Acceuil","Equipe","Apropos","Contact"];

function App() {
  return (
    <div className="App">

      
  <Navbar links={ list.map( el=><span className="liste">  <a    className = "links"   href="#" >   {el}</a></span>)}/>

       <NosValeur />
       <Reseau/>
     
    </div>
  );
}

export default App;
