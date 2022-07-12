import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import Price from './Price.jsx'
import { getStyles, setCurrentStyle } from '../../Features/Styles.js'
import { useEffect } from "react";

function Overview () {
  const dispatch = useDispatch();
  const productName = useSelector((state) => state.addProduct.products.name)
  const productCategory = useSelector((state) => state.addProduct.products.category)

  const product = '66644'

  const requests = (productID) => {
    axios.get(`http://localhost:3000/products/${productID}/styles`)
    .then((success) => {
      console.log("Styles", success)
      dispatch(getStyles(success.data))
      dispatch(setCurrentStyle(0))
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  useEffect(() => {
    requests(product);
  }, []);

    return (
    <div>
      <h1>Overview Component</h1>
      <h3>{productName}</h3>
      <h4>{productCategory}</h4>
      <Price />
    </div>
    )
}


export default Overview