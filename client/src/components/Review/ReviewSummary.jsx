import React from "react";
import AverageReviewScore from "./AverageReviewScore.jsx";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";


import ReviewBreakdown from "./ReviewBreakdown.jsx";

function ReviewSummary({reviews}) {
    reviews = reviews || [];
    let [totalScore, setTotalScore] = useState(0);
    let [numOnes, setNumOnes] = useState(0);
    let [numTwos, setNumTwos] = useState(0);
    let [numThrees, setNumThrees] = useState(0);
    let [numFours, setNumFours] = useState(0);
    let [numFives, setNumFives] = useState(0);
    let [averageScore, setAverageScore] = useState(0);
    
    function calcAvgScore (reviewsArr) {
        let tempNumOnes = 0;
        let tempNumTwos = 0;
        let tempNumThrees = 0;
        let tempNumFours = 0;
        let tempNumFives = 0;
        let numItems = 0;
        let tempTotal = 0;
        let tempAvg = 0;
    
        reviewsArr.map((element) => {
            // console.log(element.review_id);
            switch(element.rating) {
              case 1:
                // setNumOnes(numOnes + 1);
                  tempNumOnes ++
                  numItems++;
                  break;
              case 2:
                // setNumTwos(numTwos + 1);
                  tempNumTwos++;
                  numItems++;
                  break;
              case 3:
                // setNumThrees(numThrees + 1);
                  numItems++;
                  tempNumThrees++;
                  break;
              case 4:
                // setNumFours(numFours + 1);
                  numItems++;
                  tempNumFours++;
                  break;
              case 5:
                // setNumFives(numFives + 1);
                  numItems++;
                  tempNumFives++;
                  break;
              default:
                  break;
            }
          })
        tempTotal = (tempNumOnes + (tempNumTwos*2) + (tempNumThrees*3) + (tempNumFours*4) + (tempNumFives*5));
        // console.log(tempTotal);
        tempAvg = tempTotal/numItems;
        // console.log(tempAvg);
    
        setTotalScore(tempTotal)
        setAverageScore(tempAvg);
        setNumOnes(tempNumOnes)
        setNumTwos(tempNumTwos)
        setNumThrees(tempNumThrees)
        setNumFours(tempNumFours)
        setNumFives(tempNumFives)
    }




    useEffect(() => {
        calcAvgScore(reviews);
        // console.log(totalScore);
      }, [reviews]); 

    useEffect(() => {
        // console.log("totalScore ",totalScore);
    }, [totalScore])

    useEffect(() => {
        // console.log("averageScore ",averageScore);
    }, [averageScore])
      
      
    return(
        <SummaryWrapper>
            <AverageReviewScore AverageScore={averageScore}/>
            <ReviewBreakdown ones={numOnes} twos={numTwos} threes={numThrees} fours={numFours} fives={numFives}/>
        </SummaryWrapper>
    )
}


function mapStateToProps(state) {
    // console.log("mapStateToProps: ",state.addReviews.reviews);
    let reviews = state.addReviews.reviews;
    return {reviews: reviews};
}


const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default connect(mapStateToProps)(ReviewSummary);