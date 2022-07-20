import React from "react";
import reactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from './Features/addProduct.js';
<<<<<<< HEAD
import addReviewsReducer from './Features/addReviews.js'
=======
import questionReducer from './Features/questions.js';
import styleReducer from './Features/Styles.js';
>>>>>>> dev


const store = configureStore ({
  reducer: {
    addProduct: addProductReducer,
<<<<<<< HEAD
    addReviews: addReviewsReducer,
=======
    questions: questionReducer,
    stylesList: styleReducer,
>>>>>>> dev
  },
});


reactDOM.render(<Provider store = {store}><App /></Provider>,
document.getElementById("app"));