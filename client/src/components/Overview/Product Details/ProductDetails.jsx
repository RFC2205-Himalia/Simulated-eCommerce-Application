import React from 'react';
import Price from './Price.jsx'
import Details from './Details.jsx'
import ShareSocial from './ShareSocial.jsx'



import { useSelector } from 'react-redux'

function ProductDetails () {


  const productName = useSelector((state) => state.addProduct.products.name)
  const productCategory = useSelector((state) => state.addProduct.products.category)

  return (
    <div>
      <h3 data-testid="productName">{productName}</h3>
      <h4 data-testid="productCategory">{productCategory}</h4>
      <Price />
      <Details />
      <ShareSocial />
    </div>
  )
}

export default ProductDetails