import React from "react";
import ReviewList from './ReviewList.jsx';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "../../Features/addProduct.js"
import styled from "styled-components";

import sampleData from "./ReviewSampleData.js"



function ReviewWidget () {
  const dispatch = useDispatch();
  // let avgReviewScore = 3;

  useEffect(() => {
    console.log(sampleData);
    let aggregateReviewScore = 0;
    sampleData.results.forEach((element) => {
      aggregateReviewScore += element.rating;
    })

  }, [sampleData]);

    return (
      <>
      <Title>Ratings & Reviews</Title>
      <Parent>
        <ReviewList/>
      </Parent>
      </>
    )
}


const Title = styled.h1`
  font-size: 1em;
  color: dimgray;
`;
const Parent = styled.div`
  // border: 5px solid rgb(0,0,0);
  display: flex;
`;



export default ReviewWidget;



