import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { useEffect, useState } from "react";



function ReviewRecommendations ({data}) {
    data = data || {"false": "1", "true": "22" }
    let [percentageRec, setPercentageRec] = useState(0);

    let calcPercentage = (metaData) => {
        let falseNum = parseInt(metaData.false);
        let trueNum = parseInt(metaData.true);
        // console.log(typeof trueNum);

        let percentRec = Math.floor((trueNum/(trueNum + falseNum))*100)
        setPercentageRec(percentRec)
    }

    useEffect(() => {
        calcPercentage(data);
      }, [data]); 



    return (
        <Recommended>
            <div>{percentageRec}% recommended this Item!</div>
        </Recommended>
    )
}

const Recommended = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default ReviewRecommendations;