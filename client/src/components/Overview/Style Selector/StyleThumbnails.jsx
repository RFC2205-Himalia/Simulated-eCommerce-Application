import React from 'react';

function StyleThumbnails (props) {
  return (
    <img src={`${props.style.photos[0].thumbnail_url}`}></img>
  )

}

export default StyleThumbnails