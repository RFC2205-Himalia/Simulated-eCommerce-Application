import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';


function AverageReviewScore ({AverageScore}) {

    
    return (
        <AvgReviewScore>
            <div>{AverageScore} </div>
            <div> Average Review Stars Here</div>
        </AvgReviewScore>
    )
}

const AvgReviewScore = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default AverageReviewScore;