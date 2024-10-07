import React from 'react'
import classes from "./Caraousel.module.css"
import {Carousel} from "react-responsive-carousel"
import {img} from "./Img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
// {use carousel effect}
// { Display a series of images in a responsive slideshow format}
// {Show different types of content, such as images, text, or videos, in a user-friendly manner}
function Caraousel() {
  return (
    <>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
        >
          {img.map((imageLinkItem) => (
            <img key={imageLinkItem} src={imageLinkItem} />
          ))}
        </Carousel>
        <div className={classes.hero__img}></div>
      </div>
    </>
  );
}

export default Caraousel