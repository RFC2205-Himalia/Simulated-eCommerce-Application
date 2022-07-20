import React from "react";
import styled from "styled-components";



function ReviewBreakdown ({filterReviews,ones,twos,threes,fours,fives}) {

    

    return(
        <BreakdownWrapper>
            <div onClick={() => {filterReviews(1)}}>1 Star {ones}</div>
            <div onClick={() => {filterReviews(2)}}>2 Star {twos}</div>
            <div onClick={() => {filterReviews(3)}}>3 Star {threes}</div>
            <div onClick={() => {filterReviews(4)}}>4 Star {fours}</div>
            <div onClick={() => {filterReviews(5)}}>5 Star {fives}</div>

            
        </BreakdownWrapper>
    );
}

const BreakdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


export default ReviewBreakdown;