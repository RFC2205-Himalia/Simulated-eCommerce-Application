import React from 'react';
import Price from './Price.jsx'
import Details from './Details.jsx'
import ShareSocial from './ShareSocial.jsx'

import { StyledGenre, Container } from './ProductDetails.style.js'

import { useSelector } from 'react-redux'

function ProductDetails () {


  const productName = useSelector((state) => state.addProduct.products.name)
  const productCategory = useSelector((state) => state.addProduct.products.category)

  return (
    <Container>
      <StyledGenre data-testid="productCategory" style={{color: "#F0EAD6"}}>{productCategory}</StyledGenre>
      <h1 data-testid="productName" style={{color: "#F0EAD6"}}>{productName}</h1>
      <Price />
      <Details />
    </Container>
  )
}

export default ProductDetails