import React from 'react';
import axios from 'axios';
import ProductDetails from './Product Details/ProductDetails.jsx'
import StyleSelector from './Style Selector/StyleSelector.jsx'
import AddCart from './Add Cart/AddCart.jsx'

import { useDispatch } from "react-redux";
import { getStyles, setCurrentStyle } from '../../Features/Styles.js'
import { useEffect } from "react";



function Overview () {
  const dispatch = useDispatch();
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
      <ProductDetails data-testid="productDetails"/>
      <StyleSelector />
      <AddCart />

    </div>
    )
}


export default Overview