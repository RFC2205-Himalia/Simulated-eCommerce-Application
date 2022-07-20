import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


export const StyledSlider = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledImage = styled.img`
  border-radius: 10px;
`

export const StyledRightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

export const StyledLeftArrow = styled(FaArrowAltCircleLeft)`
position: absolute;
top: 50%;
left: 32px;
font-size: 3rem;
color: #000;
z-index: 10;
cursor: pointer;
user-select: none;
`