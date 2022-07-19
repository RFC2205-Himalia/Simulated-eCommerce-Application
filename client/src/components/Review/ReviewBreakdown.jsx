import React from "react";
import styled from "styled-components";



function ReviewBreakdown ({ones,twos,threes,fours,fives}) {
    return(
        <BreakdownWrapper>
            <div>1 Star {ones}</div>
            <div>2 Star {twos}</div>
            <div>3 Star {threes}</div>
            <div>4 Star {fours}</div>
            <div>5 Star {fives}</div>

            
        </BreakdownWrapper>
    );
}

const BreakdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


export default ReviewBreakdown;