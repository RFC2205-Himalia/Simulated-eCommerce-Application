import React from "react";
import axios from "axios";

import List from "./List.jsx";

import { useDispatch } from "react-redux";
import { questionList } from "../../Features/questions.js";
import { useEffect } from "react";

function Questions () {

  const dispatch = useDispatch();
  var product = 'questions?product_id=66643'

  const requests = (productID) => {
    axios.get(`http://localhost:3000/qa/${productID}`)
    .then((success) => {
      console.log("success", success)
      dispatch(questionList(success.data))
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  useEffect(() => {
    requests(product);
  }, []);

  return (
    <div>
      <h2>Questions/Answers</h2>
      <List/>
    </div>
  )
}

export default Questions;