import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ananasImg from "../assets/Images/Loading/ananas.png";
// import avakadoImg from "../assets/Images/Loading/avakado.png";
import ejderImg from "../assets/Images/Loading/ejder.png";
import uzumImg from "../assets/Images/Loading/uzum.png";

export function LoadingCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div
      className="absolute inset-0 z-50 transition-all opacity-200 ease-in-out duration-1000 h-screen"
      id="page-loader"
    >
      <div className="slider-container w-96 absolute -translate-x-1/2  left-1/2 -translate-y-1/2 top-2/4   ">
        <Slider {...settings}>
          <div>
            <img src={ananasImg} alt="ananas" />
          </div>
          <div>
            <img src={uzumImg} alt="uzum" />
          </div>
          <div>
            <img src={ejderImg} alt="ejder" />
          </div>
          <div>
            <img src={ananasImg} alt="ananas" />
          </div>
          <div>
            <img src={uzumImg} alt="uzum" />
          </div>
          <div>
            <img src={ejderImg} alt="ejder" />
          </div>
          <div>
            <img src={ananasImg} alt="ananas" />
          </div>
          <div>
            <img src={uzumImg} alt="uzum" />
          </div>
          <div>
            <img src={ejderImg} alt="ejder" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
