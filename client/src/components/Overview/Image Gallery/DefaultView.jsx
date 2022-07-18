import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

function DefaultView () {
  const styleList = useSelector((state) => state.stylesList.styles.results)
  console.log('Style\'s List', styleList)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  console.log('Current Style', currentStyle)

  if (styleList) {
    var photos = styleList[currentStyle].photos
    console.log('photos', photos);
  }


  return (photos ?
   <div>
    {photos.map((photo, index) => {
      return <img src={`${photo.url ? photo.url : photo.thumbnail_url}`} key={'ImageGalleryMainPhoto-' + index}></img>
    })}
  </div>
  :
  <div>
    Loading images...
  </div>
  )
}

export default DefaultView