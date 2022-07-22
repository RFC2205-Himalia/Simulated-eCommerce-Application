import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


export const StyledSlider = styled.section`
  width: 85%;
  height: 95vh;
  border-radius: 30px;
  background-color: black;
  margin-left: 40px;
`

export const StyledImage = styled.div`
  border-radius: 30px;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const LeftSplit = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.3);
`

export const GalleryThumbnail = styled.img`
  flex-grow: 1;
  height: 40px;
  width: 70px;
  margin: 30px;
  border-radius: 10px;

  &: hover {
    height: 50px;
    width: 80px;
  }
`

export const CurrentGalleryThumbnail = styled.img`
  flex-grow: 1;
  height: 50px;
  width: 50px;
  margin: 10px;
  border: 3px solid red;
`

export const LeftArrowSplit = styled.div`
  flex: 5%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const CenterSplit = styled.div`
  flex: 70%;
  height: 100%;
`

export const RightArrowSplit = styled.div`
  flex: 5%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const StyledRightArrow = styled(FaArrowAltCircleRight)`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  user-select: none;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 40px;

  & :hover {
    color: black;
    font-size: 100rem;
  }
`

export const StyledLeftArrow = styled(FaArrowAltCircleLeft)`
font-size: 3rem;
color: white;
cursor: pointer;
user-select: none;
background-color: rgb(0, 0, 0, 0.1);
border-radius: 40px;

& :hover {
  color: black;
}
`