import React from "react";
import axios from "axios";

import List from "./List.jsx";
import Sort from "./Sort.jsx"
import Stars from "./stars.jsx";
import {changeHandler, clickHandler, addAnswersHandler} from './eventHandlers.jsx';
import { GoSearch } from "react-icons/go"

import { useDispatch } from "react-redux";
import { questionList, sorted } from "../../Features/questions.js";
import { useEffect } from "react";
import { useSelector} from 'react-redux';

function Questions () {

  const dispatch = useDispatch();
  const list = useSelector(state => state.questions.questions);

  var product = 'questions?product_id=66643' // Temporary hard coding of ID

// Sends out request for Q&A data for specified product ID
  const requests = (productID) => {
    axios.get(`http://localhost:3000/qa/${productID}`)
    .then((success) => {
      dispatch(questionList(success.data.results));
      dispatch(sorted(Sort(success.data.results)));
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  // componentDidMount replacement
  useEffect(() => {
    requests(product);
    console.log('mounted');
  }, []);


// CSS styling to make things easier to look at
  const formStyle = {
    'width': '325px',
    'paddingTop': '5px'
  };


  return (
    <div>
      <h2>Questions/Answers</h2>
      <Stars/>
      <form>
          <input style={formStyle} type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' onChange={changeHandler}/>
          <GoSearch id='query' onClick = {clickHandler}/>
      </form>
      <List/>
      <br></br>
      <button title="More" onClick={addAnswersHandler} type='button'>MORE ANSWERED QUESTIONS</button>&nbsp;
      <button title="Add" onClick={clickHandler} type='button'>ADD A QUESTION + </button>
    </div>
  )
}

export default Questions;