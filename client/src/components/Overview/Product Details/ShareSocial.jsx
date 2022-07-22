/*
Below the product information, buttons should provide the ability to share this product on popular social media platforms.
Facebook
Twitter
Pinterest
*/

import React from 'react';
import { PinterestIcon, TwitterIcon, FacebookIcon } from './ProductDetails.style.js'

function ShareSocial () {

  return (
    <div>
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <PinterestIcon></PinterestIcon>
    </div>
  )

}

export default ShareSocial