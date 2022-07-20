import React from "react";
import styled from "styled-components";



function ReviewListElement ({review}) {
    const dateOfReview = new Date(review.date)
    const formattedDate = dateOfReview.toDateString()

    return (
        <IndividualReviewElement>
            <StarsAndDate>
                <SecondaryText>Stars Here </SecondaryText>
                <ReviewDate>{review.reviewer_name}, {formattedDate}</ReviewDate>
            </StarsAndDate>
            <Title>{review.summary}</Title>
            <BodyText>{review.body}</BodyText>
            <SecondaryText>Helpful | Report Here</SecondaryText>
        </IndividualReviewElement>

    )
}



const Title = styled.p`
  font-size: 1em;
  text-align: flex-start;
  margin-top: 0px;
  font-weight: bold;
`;

const StarsAndDate = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
`;

const SecondaryText = styled.p`
    font-size: .75em;
    justify-content: flex-start;
`;

const ReviewDate = styled.p`
    font-size: .75em;
    justify-content: flex-end;
`;

const IndividualReviewElement = styled.div`
//   border: 5px solid rgb(0,0,0);
  width: 400px;

`;

const BodyText = styled.p`
    font-size: .75em;
`;


export default ReviewListElement;