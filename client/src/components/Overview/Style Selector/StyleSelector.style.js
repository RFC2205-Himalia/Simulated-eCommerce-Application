import styled from 'styled-components';



export const StyledStyleGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 55px);
grid-auto-rows: 55px;
padding-bottom: 20px;
`

export const CurrentStyleText = styled.div`
font-size: 40px;
`

export const StyledThumbnail = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
margin: 10px;

&:hover {
  border: 3px solid red;
}
`

export const CurrentStyledThumbnail = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
border: 3px solid red;
margin: 10px;
`


