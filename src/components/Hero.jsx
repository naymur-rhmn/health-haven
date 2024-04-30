import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/hero.css";
import AppoinmentBtn from "./AppoinmentBtn";
import HeroContent from "./HeroContent";

function Hero() {
  const [resetAnimation, setResetAnimation] = useState(false);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "leaner",
    pauseOnHover: false,
    afterChange: () => {
      // console.log("slide changed");
      // setResetAnimation(true);
      // setTimeout(() => {
      //   setResetAnimation(false);
      // }, 1);
    },
  };

  return (
    <section className="hero overflow-hidden">
      <Slider {...settings}>
        <div className="hero-bg-1 hero-bg">
          <HeroContent />
        </div>
        <div className="hero-bg-2 hero-bg">
          <HeroContent />
        </div>
        <div className="hero-bg-3 hero-bg">
          <HeroContent />
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
