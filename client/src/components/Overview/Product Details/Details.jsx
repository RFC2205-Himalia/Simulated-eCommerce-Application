import React from 'react';
import { useSelector } from 'react-redux';

function Details () {
const productDetails = useSelector((state) => state.addProduct.products.description)

  return (
    <div>
      <p>{productDetails}</p>
    </div>
  )
}

export default Details