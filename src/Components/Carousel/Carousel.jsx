import React from 'react'
import classes from "./Caraousel.module.css"
import {Carousel} from "react-responsive-carousel"
import {img} from "./Img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
            <img src={imageLinkItem} />
          ))}
        </Carousel>
        <div className={classes.hero__img}></div>
      </div>
      
    </>
  );
}

export default Caraousel