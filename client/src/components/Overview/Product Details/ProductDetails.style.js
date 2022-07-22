import styled from 'styled-components';
import {FaFacebook, FaTwitterSquare, FaPinterest} from 'react-icons/fa';

export const StyledPrice = styled.div`
  font-size: 15px;
`

export const StyledGenre = styled.p`
  font-size: 20px;
  margin-bottom: -23px;

`

export const StyledDesc = styled.p`
  font-style: italic;
`


export const FacebookIcon = styled(FaFacebook)`
  font-size: 1rem;
  color: #4267B2;
  cursor: pointer;
  user-select: none;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 30px;
`

export const TwitterIcon = styled(FaTwitterSquare)`
  font-size: 1rem;
  color: #1DA1F2;
  cursor: pointer;
  user-select: none;

  border-radius: 30px;
`

export const PinterestIcon = styled(FaPinterest)`
  font-size: 1rem;
  color: #E60023;
  cursor: pointer;
  user-select: none;
  border-radius: 30px;
`