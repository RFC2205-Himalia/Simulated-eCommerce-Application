import React from "react";
import Overview from './components/Overview/Overview.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/Review/ReviewWidget.jsx';
import Similar from './components/Similar/Similar.jsx';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "./Features/addProduct.js"
import { addReviews, addAvgScore } from "./Features/addReviews.js"







function App () {
  const dispatch = useDispatch();
  var product = '66646'

  const requests = (productID) => {
    axios.get(`http://localhost:3000/products/${productID}`)
    .then((success) => {
      // console.log("success", success)
      dispatch(addProduct(success.data))
    })
    .catch((error) => {
      // console.log("error", error)
    })
    
    axios.get(`http://localhost:3000/reviews?product_id=${productID}`)
    .then((success) => {
      dispatch(addReviews(success.data));

      //going to crunch the numbers for avg review score here but I wonder if were allowed
      // to do this in the mini server between the API call and the client
      let aggregateReviewScore = 0;

      success.data.results.forEach((element) => {
        aggregateReviewScore += element.rating;
      })

      
      dispatch(addAvgScore(aggregateReviewScore/success.data.results.length));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    requests(product);
  }, []);

    return (
      <div>
          <Overview/>
          <Questions/>
          <Reviews/>
          <Similar/>
      </div>
    )
}

export default App;


