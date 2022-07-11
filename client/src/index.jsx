import React from "react";
import reactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from './Features/addProduct.js';
import testReducer from './Features/test.js'


const store = configureStore ({
  reducer: {
    addProduct: addProductReducer,
    test: testReducer,
  },
});


reactDOM.render(<Provider store = {store}><App /></Provider>,
document.getElementById("app"));