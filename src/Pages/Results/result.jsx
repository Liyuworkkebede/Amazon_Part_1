import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loder from "../../Components/Loding/Loding"

function Result() {
  // Change to uppercase
  const { catagoryName } = useParams(); // Correctly call useParams
  const [results, setResults] = useState([]); // Use useState correctly
  const [isLoding, setIsLoding] = useState(false)

  useEffect(() => {
    setIsLoding(true)
    axios.get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoding(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoding(false)
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{catagoryName}</p>
        <hr />
        {isLoding ? (
          <Loder />
        ) : (
          <div className={classes.product__container}>
            {results?.map((product) => (
              <ProductCard product={product} key={product.id}
              renderDesk={false}
              renderAdd={true}
              
              /> // Return the JSX element
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Result;
