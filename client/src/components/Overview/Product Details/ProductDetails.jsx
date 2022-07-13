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
      <h3>{productName}</h3>
      <h4>{productCategory}</h4>
      <Price />
      <Details />
      <ShareSocial />
    </div>
  )
}

export default ProductDetails