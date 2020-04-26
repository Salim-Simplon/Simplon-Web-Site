import React, { Component } from "react";
/* Il faut ajouter la Carousel component : "It is a react port of slick carousel"
l'ajout avec la commande : npm install react-slick --save */
import Slider from "react-slick";
/* Aussi il faut installer "slick-carousel" pour le style css et la forme
l'ajout avec la commande : npm install slick-carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div id="car">
        <h2> Simplon... </h2>
        <Slider {...settings}>
          <div>
            <img className="Carre" src="/images/GP2.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP2-1.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP2-2.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP2-3.png" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP2-4.jpg" alt="" />
          </div>
          <div>
            <img className="Carre" src="/images/GP1-1.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
