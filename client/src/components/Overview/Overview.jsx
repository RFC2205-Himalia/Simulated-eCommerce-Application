import React from 'react';
import { useSelector } from "react-redux";
// import { useEffect } from "react";

function Overview () {
  const productName = useSelector((state) => state.addProduct.products.name)
  const productCategory = useSelector((state) => state.addProduct.products.category)
  const productPrice = useSelector((state) => state.addProduct.products.default_price)

    return (
    <div>
      <h1>Overview Component</h1>
      <h3>{productName}</h3>
      <h4>{productCategory} ${productPrice}</h4>
    </div>
    )
}


export default Overview