import React from "react";
import styled from "styled-components";

function Characteristics({ characteristics }) {



  return (
    <CharacteristicsWrapper>
      {Object.keys(characteristics).map((characteristic, i) => {

        return (
          <form key={characteristics[characteristic].id}>
            <CharacteristicsText>{characteristic}</CharacteristicsText>
            <Indicator>
              <Arrow/>
              <CharacteristicsScale/>
              <CharacteristicsScale/>
              <CharacteristicsScale/>
            </Indicator>
          </form>
        );
      })}
    </CharacteristicsWrapper>
  );
}

const Indicator = styled.div`
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    width: 100%;
`;

const CharacteristicsScale = styled.span`
    width: 100%;
    height: 100%;
    background: darkgray;
    border-radius: 5px;
`;

const Arrow = styled.div`
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #2a2a2a transparent transparent transparent;    position: absolute;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #2a2a2a transparent transparent transparent;
`;

const CharacteristicsWrapper = styled.div`
    padding: 0;
    width: 250px;
    margin-top: 30px;
`;

const CharacteristicsText = styled.span`
    font-weight: 500;
    font-size: 17px;
`;



export default Characteristics;


