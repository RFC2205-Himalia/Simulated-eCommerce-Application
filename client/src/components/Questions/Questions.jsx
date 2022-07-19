import React from "react";
import axios from "axios";

import List from "./List.jsx";
import Sort from "./Sort.jsx";
import Stars from "./stars.jsx";
import Search from "./Search.jsx";
import Buttons from "./Buttons.jsx";


import { useDispatch, useSelector } from "react-redux";
import { questionList, sorted, addRender, answerRender, answersUnchange } from "../../Features/questions.js";
import { useEffect } from "react";

function Questions ({productID}) {

  // Hardcoded value for now, replace later with dynamic from URL
  var productNumber = Number(productID);
  // Variables to pass on current product id
  var productReq = `questions?product_id=${productNumber}`

  // State components used later in file
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const sortedAnswers = useSelector(state => state.questions.sortedAnswers);
  const renderList = useSelector(state => state.questions.renderList);
  const refresh = useSelector(state => state.questions.rerender)

  // componentDidMount replacement
  useEffect(() => {
    getRequests(productReq)
  }, []);

  useEffect(() => {
    getRequests(productReq)
  }, [refresh]);

  // Updates both sorted answers and question renderlist when questions are populated
  useEffect(() => {
    let size = questions.length;
    if (size > 0) {
      dispatch(addRender((questions).slice(0, 4)));
    }
  }, [questions])
  // Needed to separate out addRender to trigger reset to default
  useEffect(() => {
    let size = renderList.length;
    if (size > 0) {
      dispatch(sorted(Sort(questions)))
      dispatch(answersUnchange(Sort(questions)))
    }
  }, [renderList])
  // Update shorter answer lits to be rendered after they have been sorted
  useEffect(() => {
    let size = Object.keys(sortedAnswers).length;
    if (size > 0) {
      renderAnswers(sortedAnswers)
    }
  }, [sortedAnswers])
// Sends out request for Q&A data for specified product ID
  const getRequests = (url) => {
    axios.get(`http://localhost:3000/qa/${url}`)
    .then((success) => {
      dispatch(questionList(success.data.results));
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  // Intial load of 2 answers
  const renderAnswers = (list) => {
    let questionIDs = Object.keys(list);
    let loadList = {};
    questionIDs.forEach((question) => {
      loadList[question] = (list[question]).slice(0, 2);
    })
    dispatch(answerRender(loadList));
  }



  return (
    <div className="questionsWrapper" style={wrapper} >
      <p style={h2}>{'QUESTIONS & ANSWERS'}</p>
      {/* <Stars/> */}
      <Search />
      <List />
      <Buttons product={productNumber}/>
    </div>
  )
}

export default Questions;



const h2 = {
  position: 'relative',
  display: 'flex',
  textAlign: 'left',
  left: '20vw',
  flexDirection: "column",
  fontWeight: "100"
};

const wrapper = {
  width: "100vw",
  //backgroundColor: "#ecf2f9"
}
