import styled from 'styled-components';

export const AppGrid = styled.div`
display: grid;
grid-template-columns: 70% auto;
grid-template-rows: auto;
margin-bottom: 50px;
`

export const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-right: 30px;
`

export const LeftSide = styled.div`
grid-row-1: 1 / span 1;
display: flex;
`
