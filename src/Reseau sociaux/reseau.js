import React from 'react';
import './reseau.css';
import linkedine from './linkedine.png'
import instagram from './instagram.png'
import email from './email.png'
import twitter from './twitter.png'
import facebook from './facebook.png'
import telephone from './telephone.jpg'

function Reseau() {
    return (
        <div className="reseausociau">
<span className="link">
<div className="logo-s"> 
<i class="fab fa-linkedin-in"  a href ="#" >likedine</i>
  <i class="fab fa-instagram" a href =" #">Instagram</i>
  </div>
  <div className="logos">
  <i class="fab fa-facebook"  a href =" #">Facebook</i>
  <i class="fas fa-phone">Telephone: 213154663</i>
  </div>
  <div className="logoss">
  <i class="fab fa-twitter-square" a href ="#">Twitter</i>
  <i class="fas fa-envelope-open-text" a href ="#">Email:</i>
  </div>
        </span>

        <div className="paragraph">
                    <p><b>Adresse</b> Le 15, 15 Avenue de Carthage, Tunis, Tunisia </p>
                    


        </div>

</div>
    )
}

export default Reseau;