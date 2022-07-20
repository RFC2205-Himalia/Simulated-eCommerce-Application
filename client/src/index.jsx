import React from "react";
import reactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from './Features/addProduct.js';
import styleReducer from './Features/Styles.js';


const store = configureStore ({
  reducer: {
    addProduct: addProductReducer,
    stylesList: styleReducer,
  },
});


reactDOM.render(<Provider store = {store}><App /></Provider>,
document.getElementById("app"));