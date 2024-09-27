import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import LayOut from '../../Components/LayOut/LayOut';
import Loding from '../../Components/Loding/Loding';
function ProductDetail() {
    const {productId} = useParams()
    const [product, setproduct] = useState({})
  const [isLoding, setIsLoding] = useState(false)

    useEffect(() => {
        setIsLoding(true);
   axios.get(`${productUrl}/products/ ${productId}`)
   .then((res)=>{
    setproduct(res.data)
    setIsLoding(false)
   }).catch((err)=>{
    console.log(err);
    setIsLoding(false)
   })

     
    }, [])
    
  return (
 <LayOut>

    {isLoding ? (<Loding/>):(<ProductCard

   product={product}
   flex={true}
   renderDesc={true}
   renderAdd={true}
   />)}
   
   </LayOut>
  
  )
}

export default ProductDetail