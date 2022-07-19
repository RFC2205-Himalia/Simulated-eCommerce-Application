import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";

import ReviewList from './ReviewList.jsx';
import ReviewSummary from "./ReviewSummary.jsx";

import sampleData from "./ReviewSampleData.js"


function ReviewWidget () {
  const reviewsFromStore = useSelector((state) => state.addReviews.reviews);
  let [reviews, setReviews] = useState([]);


  useEffect(() => {
    setReviews(reviewsFromStore);
  },[reviewsFromStore])

  let filterReviewsByStar = (star) => {
    let tempArray = reviewsFromStore;

    let results = tempArray.filter(element => {
      // console.log(element.rating === star);
      return element.rating === star
    })

    console.log(results);
    setReviews(results);
    
    // console.log(tempArray);
  }

    return (
      <>
        <Title>Ratings & Reviews</Title>
        <Parent>
          <ReviewSummary filterReviews={filterReviewsByStar}/>
          <ReviewList reviews={reviews}/>
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
  flex-direction: row;
`;



export default ReviewWidget;



