import React from "react";
import Modal from "./Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addRender, incrementCount, resetCount } from "../../Features/questions.js";

function Buttons() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.questions.count);
  const questions = useSelector(state => state.questions.questions);
  const rendered = useSelector(state => state.questions.renderList);
  const searching = useSelector(state => state.questions.searching);


  // Render 2 more questions
  const moreHandler = () => {
    console.log('More Answers Clicked');
    async function increment() {
      await dispatch(incrementCount())
    }
    increment().then(dispatch(addRender(questions.slice(0, counter + 2)))); // It seems to update count before it dispatches addRender but is always behind
    console.log('done');
  }
  // Collaspe question list down to default amount
  const collapseHandler = () => {
    dispatch(resetCount());
    dispatch(addRender(questions.slice(0, 4)))
  }

  // pop out form to fill out to add question
  const addQuestionHandler = () => {
    // Send POST request with appropriate info attached
    //  /qa/questions/:question_id/answers
    //body, name, email, photos=[]
    console.log(`Add An Answer Clicked`);
  }


  return (
    <div>
      {rendered.length > 0 && rendered.length < questions.length && searching === false ?
        <button title="More" onClick={moreHandler} type='button'>MORE ANSWERED QUESTIONS</button> : null}
      {rendered.length > 4 && rendered.length <= questions.length ?
        <button title="More" onClick={collapseHandler} type='button'>COLLAPSE QUESTIONS</button> : null}
      <button title="Add" onClick={addQuestionHandler} type='button'>ADD A QUESTION + </button>
    </div>
  )
}

export default Buttons;


