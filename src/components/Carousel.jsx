import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [currindex, setcurrIndex] = useState(0);
  function handlePrev() {
    setcurrIndex(currindex > 0 ? currindex - 1 : images.length - 1);
  }
  function handleNext() {
    setcurrIndex(currindex < images.length - 1 ? currindex + 1 : 0);
  }
  return (
    <>
      <div className="mainContainer">
        <div className="arrow" onClick={handlePrev}>
          <ArrowBackIosIcon />
        </div>
        <div className="imageBox">
          <img src={images[currindex].img} />
        </div>
        <div className="imageContainer">
          <div className="titleBox">
            <p>{images[currindex].title}</p>
          </div>
          <div className="subTitleBox">
            <p>{images[currindex].subtitle}</p>
          </div>
        </div>
        <div className="arrow" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
}

export default Carousel;
