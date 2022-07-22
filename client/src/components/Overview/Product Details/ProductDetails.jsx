import React from 'react';
import Price from './Price.jsx'
import Details from './Details.jsx'
import ShareSocial from './ShareSocial.jsx'

import { StyledGenre } from './ProductDetails.style.js'

import { useSelector } from 'react-redux'

function ProductDetails () {


  const productName = useSelector((state) => state.addProduct.products.name)
  const productCategory = useSelector((state) => state.addProduct.products.category)

  return (
    <div>
      <StyledGenre data-testid="productCategory">{productCategory}</StyledGenre>
      <h1 data-testid="productName">{productName}</h1>
      <Price />
      <Details />
      <ShareSocial />
    </div>
  )
}

export default ProductDetails