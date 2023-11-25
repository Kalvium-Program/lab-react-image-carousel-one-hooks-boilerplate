import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currentindex, setCurrentIndex] = useState(0);

  const currentImage = images[currentindex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="carousel-container">
        <button className="arrow-btn-left" onClick={handlePrev}>
          <ArrowBackIosIcon />
        </button>
        <div className="carousel-item">
          <img className="image" src={currentImage.img} alt={currentImage.title} />
          <h2>{currentImage.title}</h2>
          <p>{currentImage.subtitle}</p>
        </div>
        <button className="arrow-btn-right" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
};

export default Carousel;
