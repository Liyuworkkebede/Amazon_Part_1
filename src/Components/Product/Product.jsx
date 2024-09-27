import React, { useEffect, useState } from 'react'
import classes from "./Product.module.css"
import axios from "axios"
import ProductCard from './ProductCard';
import Loding from '../Loding/Loding';
function Product() {
    const [product, setProduct] = useState([]);
    const [isLoding, setIsLoding] = useState(false)
useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setProduct(res.data);
        setIsLoding(false)
    }).catch((err)=>{
        console.log(err);
        setIsLoding(false)
    })
  

}, [])





    
  return (
    <>
      {isLoding? (
        <Loding />
      ) : (
        <section className={classes.product__container}>
          {product.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.Id} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product