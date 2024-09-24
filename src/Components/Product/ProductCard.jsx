import React from 'react'
import classes from "./Product.module.css"
import Rating from "@mui/material/Rating"
import CurencyFormater from '../CurencyFormater/CurencyFormater';
function ProductCard({ product }) {
   const {image, title, id, rating, price} = product;
  return (
    <>
      <div className={classes.card_container}>
        <a href="">
          <img src={image} alt="" />
        </a>
        <div >
          <h3>{title}</h3>
          <div className={classes.rating}>
            {/* {rating} */}
            <Rating value={rating.rate} precision={0.1} />
            <small>{rating.count}</small>
            {/* {price} */}
          </div>
          <div>
            {/* {price} */}
            <CurencyFormater amount={price} />
          </div>
          <button className={classes.button}>Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard