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
  let [filters, setFilters] = useState([]);


  useEffect(() => {
    setReviews(reviewsFromStore);
  },[reviewsFromStore])

  useEffect(() => {
    filterReviewsByStar();
  },[filters])

  let filterReviewsByStar = () => {
    let results = []

    reviewsFromStore.forEach((element) => {
      filters.forEach(filter => {
        if(filter === element.rating){
          results.push(element);
        }
      })
    })

    // console.log(results);
    setReviews(results);
  }

  let addFilters = (star) => {
    // console.log(star);
    let tempFilters = [];

    filters.forEach((element) => {
      tempFilters.push(element);
    })


    if(tempFilters.includes(star)){
      tempFilters.splice(tempFilters.indexOf(star),1);
    } else {
      tempFilters.push(star);
    }

    setFilters(tempFilters);
    // console.log(filters);
  }

    return (
      <>
        <Title>Ratings & Reviews</Title>
        <Parent>
          <ReviewSummary  filterReviews={addFilters}/>
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



