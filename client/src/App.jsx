import React from "react";
import Overview from './components/Overview/Overview.jsx';
import Questions from './components/Questions/Questions.jsx';
import Reviews from './components/Review/ReviewWidget.jsx';
import Similar from './components/Similar/Similar.jsx';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { tracker } from "./Features/questions.js";
import { addProduct } from "./Features/addProduct.js"






function App () {
  const dispatch = useDispatch();
  var product = '66670'

  const requests = (productID) => {
    axios.get(`http://localhost:3000/products/${productID}`)
    .then((success) => {
      //console.log("success", success)
      dispatch(addProduct(success.data))
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  useEffect(() => {
    requests(product);
  }, []);

    return (
      <div onClick={(e) => dispatch(tracker({
        element: e.target.getAttribute('element'),
        widget: e.target.getAttribute('widget'),
        time: `${new Date}`
      }))}>
          <Overview/>
          <Questions productID={product}/>
          <Reviews/>
          <Similar/>
      </div>
    )
}

export default App;


