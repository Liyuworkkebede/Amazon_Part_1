import React, { useEffect, useState } from 'react'
import classes from "./Product.module.css"
import axios from "axios"
import ProductCard from './ProductCard';
function Product() {
    const [product, setProduct] = useState([]);
useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setProduct(res.data);
    }).catch((err)=>{
        console.log(err);
    })
  

}, [])





    
  return (
    <>
    <section className={classes.product__container}>
        {
            product.map((singleProduct)=>{
              return  <ProductCard product={singleProduct}key={singleProduct.Id}/>
})
        }
    </section>
    </>
  )
}

export default Product