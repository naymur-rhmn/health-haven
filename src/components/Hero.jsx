import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/banner/hero-1.jpg";
import banner2 from "../assets/banner/yann.jpg";

function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "smooth",
    pauseOnHover: true,
  };
  return (
    <section className="hero overflow-hidden">
      <Slider {...settings} className="h-[calc(100vh-120px)]">
        <div className="h-[calc(100vh-120px)]">
          <img
            className="bg-cover bg-center bg-no-repeat w-full h-full"
            src={banner1}
            alt=""
          />
        </div>
        <div className="h-[calc(100vh-120px)]">
          <img
            className="bg-cover bg-center bg-no-repeat w-full h-full"
            src={banner2}
            alt=""
          />
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
