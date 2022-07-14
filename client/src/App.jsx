import React from "react";
import Overview from './components/Overview/Overview.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/Review/ReviewWidget.jsx';
import Similar from './components/Similar/Similar.jsx';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addProduct } from "./Features/addProduct.js"
import { addReviews } from "./Features/addReviews.js"







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


