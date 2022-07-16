import React from 'react';
import { StyledThumbnail, CurrentStyledThumbnail } from './StyleSelector.style.js'
import { useDispatch } from "react-redux";
import { setCurrentStyle } from '../../../Features/Styles.js';
import { useSelector } from 'react-redux';

function StyleThumbnail (props) {
  const dispatch = useDispatch();
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)

  const changeStyle = () => {
    var newStyle = props.styleNumber;
    dispatch(setCurrentStyle(newStyle));
  }

  return (currentStyle === props.styleNumber ?
  <CurrentStyledThumbnail src={props.style.photos[0].thumbnail_url} onClick={changeStyle}></CurrentStyledThumbnail>
  : <StyledThumbnail src={props.style.photos[0].thumbnail_url} onClick={changeStyle}></StyledThumbnail>)

}

export default StyleThumbnail