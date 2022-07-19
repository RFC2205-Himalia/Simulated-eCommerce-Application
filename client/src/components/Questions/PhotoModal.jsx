import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { refresh } from "../../Features/questions.js";


function PhotoModal({ closeModal, productID }) {


  let id = productID;


  // When submitted, checks if errors
  const questionSubmitHandler = (e) => {
    e.preventDefault();
    setQuestionErrors(validate(questionValues));
  }
  // Tracks changes being typed
  const handlechange = (e) => {
    const { name, value } = e.target;
    setQuestionValues({ ...questionValues, [name]: value })
  }



  return (
    <div className="photoBackground">

    </div>
  )
}

export default PhotoModal;