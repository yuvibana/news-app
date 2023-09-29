import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CommonSlider({ sliderImages }) {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
    edgeFriction: 0.15,
  };

  return (
    <Slider {...settings}  >
      {sliderImages.map((image, i) => (
        <figure key={i}>
          <img src={image.urlToImage} alt="image" />
        </figure>
      ))}
    </Slider>
  )
}
