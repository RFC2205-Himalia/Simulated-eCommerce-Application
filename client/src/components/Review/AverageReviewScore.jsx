import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';

import Stars from '../Questions/Stars.jsx';


function AverageReviewScore ({AverageScore}) {
    
    return (
        <AvgReviewScore>
            <div>{AverageScore} </div>
           <Stars numStars={AverageScore}/>
        </AvgReviewScore>
    )
}

const AvgReviewScore = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default AverageReviewScore;