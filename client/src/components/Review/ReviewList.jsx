import sampleData from "./ReviewSampleData.js"
import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "../../Features/addProduct.js"
import styled from "styled-components";

import ReviewListElement from "./ReviewListElement.jsx";


function ReviewList () {
    // console.log("Reviews: ", sampleData.results)

    return (
        <ReviewListWrapper>
            {
                sampleData.results.map((element) => {
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