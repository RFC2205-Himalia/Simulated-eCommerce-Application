import React from "react";
import axios from "axios";

import List from "./List.jsx";
import { clickHandler } from './eventHandlers.jsx';
import { FaSistrix } from "react-icons/fa"


import { useDispatch } from "react-redux";
import { questionList } from "../../Features/questions.js";
import { useEffect } from "react";

function Questions () {

  const dispatch = useDispatch();
  var product = 'questions?product_id=66643'

  const requests = (productID) => {
    axios.get(`http://localhost:3000/qa/${productID}`)
    .then((success) => {
      dispatch(questionList(success.data))
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  useEffect(() => {
    requests(product);
    console.log('mounted');
  }, []);



  const formStyle = {
    'width': '250px',
    'fontSize': '10px',
    'paddingTop': '5px'
  };

  return (
    <div>
      <h2>Questions/Answers</h2>
      <form>
          <input style={formStyle} type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
          <FaSistrix onClick = {(e) => clickHandler(e.target = {title: 'query'})}/>
      </form>
      <List/>
      <button title="More" onClick={(e) => clickHandler(e.target)} type='button'>MORE ANSWERED QUESTIONS</button>
      <button title="Add" onClick={(e) => clickHandler(e.target)} type='button'>ADD A QUESTION + </button>
    </div>
  )
}

export default Questions;