import sampleData from "./ReviewSampleData.js"
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import ReviewListElement from "./ReviewListElement.jsx";


function ReviewList ({reviews}) {
    // console.log("Reviews: ", sampleData.results)

    return (
        <ReviewListWrapper>
            {
                reviews.map((element) => {
                    return <ReviewListElement key={element.review_id} review = {element}/>
                })
            }
        </ReviewListWrapper>
    )
}

const ReviewListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


export default ReviewList;