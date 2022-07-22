import sampleData from "./ReviewSampleData.js"
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import ReviewListElement from "./ReviewListElement.jsx";
import ReviewButtons from "./ReviewButtons.jsx";


function ReviewList ({reviews, sortReviews}) {
    // console.log("Reviews: ", sampleData.results)

    return (
        <ReviewListWrapper>
            {/*pass whatever compoonent this div becomes sortReviews*/}
            <div>Sort Reviews by dropdown here</div>
            {
                reviews.map((element) => {
                    return <ReviewListElement key={element.review_id} review = {element}/>
                })
            }
            <ReviewButtons/>
        </ReviewListWrapper>
    )
}

const ReviewListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


export default ReviewList;