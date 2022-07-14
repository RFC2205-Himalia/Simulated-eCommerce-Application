import React from "react";
import reactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from './Features/addProduct.js';
import addReviewsReducer from './Features/addReviews.js'


const store = configureStore ({
  reducer: {
    addProduct: addProductReducer,
    addReviews: addReviewsReducer,
  },
});


reactDOM.render(<Provider store = {store}><App /></Provider>,
document.getElementById("app"));