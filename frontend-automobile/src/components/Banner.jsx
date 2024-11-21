import React from "react";
import Slider from "react-slick";
import "../assets/styles/Carousel.css"; // Optional CSS file for custom styling
import slide1 from "../assets/images/Banner1.jpeg";
import slide2 from "../assets/images/Banner2.jpeg";
import slide3 from "../assets/images/Banner3.jpeg";
import slide4 from "../assets/images/Banner4.jpeg";

const Banner = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite looping
    speed: 200, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed
    arrows: true, // Show next/prev arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container p-4">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
