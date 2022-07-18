import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";

import ReviewList from './ReviewList.jsx';
import AverageReviewScore from "./AverageReviewScore.jsx";

import sampleData from "./ReviewSampleData.js"


function ReviewWidget () {
  const reviews = useSelector((state) => state.addReviews.reviews);
  let [totalScore, setTotalScore] = useState(0);
  let [numOnes, setNumOnes] = useState(0);
  let [numTwos, setNumTwos] = useState(0);
  let [numThrees, setNumThrees] = useState(0);
  let [numFours, setNumFours] = useState(0);
  let [numFives, setNumFives] = useState(0);
  let [averageScore, setAverageScore] = useState(0);
  



  useEffect(() => {
    console.log(reviews);
    reviews.map((element) => {
      // console.log(element.review_id);
      switch(element.rating) {
        case 1:
          setNumOnes(numOnes + 1);
          break;
        case 2:
          setNumTwos(numTwos + 1);
          break;
        case 3:
          setNumThrees(numThrees + 1);
          console.log(numThrees);
          break;
        case 4:
          setNumFours(numFours + 1);
          break;
        case 5:
          setNumFives(numFives + 1);
          break;
        default:
          break;
      }
    })
  
  setTotalScore(numOnes + (numTwos*2) + (numThrees*3) + (numFours*4) + (numFives*5));
  setAverageScore(totalScore/reviews.length);

  console.log(numThrees);

  }, [reviews]);

    return (
      <>
        <Title>Ratings & Reviews</Title>
        <Parent>
          <AverageReviewScore AverageScore={averageScore}/>
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
  flex-direction: row;
`;



export default ReviewWidget;



