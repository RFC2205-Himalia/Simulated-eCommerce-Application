import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { StyledSlider, StyledImage, StyledRightArrow, StyledLeftArrow } from './DefaultView.style.js';


function DefaultView () {
  const styleList = useSelector((state) => state.stylesList.styles.results)
  console.log('Style\'s List', styleList)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  console.log('Current Style', currentStyle)
  const [currentPhoto, setCurrentPhoto] = useState(0)

  if (styleList) {
    var photos = styleList[currentStyle].photos
    console.log('photos', photos);
    var length = photos.length;

    var nextSlide = () => {
      setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1)
    }
    var prevSlide = () => {
      setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1)
    }
  }

  return (photos ?
   <StyledSlider >
    <StyledLeftArrow onClick={prevSlide}/>
    <StyledRightArrow onClick={nextSlide}/>
      <StyledImage src={`${photos[currentPhoto].thumbnail_url}`}></StyledImage>
  </StyledSlider>
  :
  <div>
    Loading images...
  </div>
  )
}

export default DefaultView