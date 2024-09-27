import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/SignUp";
import Payment from "./Pages/Payments/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/result";
import ProductDetail from "./Pages/ProductDetial/ProductDetail";

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category/:catagoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} /> 
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
