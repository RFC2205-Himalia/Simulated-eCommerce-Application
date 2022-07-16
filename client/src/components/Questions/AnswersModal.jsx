import React, {useState} from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { sorted } from "../../Features/questions.js";


function AnswersModal({data, closeModal}) {

  const dispatch = useDispatch();
  const product = useSelector(state => state.addProduct.products);
  const sortedAnswers = useSelector(state => state.questions.sortedAnswers);

  // Creates new answer
  const postRequests = (questionID, body) => {
    axios.post(`http://localhost:3000/qa/questions/${questionID}/answers`, body)
    .then(() => {
      console.log('Answer Posted')
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  var answerInput = '';
  var nameInput = '';
  var emailInput = '';

  const questionSubmitHandler = (questionID) => {
    console.log(questionID);
    let body = {
      "body": `${answerInput}`,
      "name": `${nameInput}`,
      "email": `${emailInput}`
    }
    postRequests(questionID, body);
    // let answersCopy = {...sortedAnswers};
    // answersCopy[questionID] = answersCopy[questionID].push({
    //   id: questionID,
    //   body: answerInput,
    //   date: Date(),
    //   answerer_name: nameInput,
    //   helpfulness: 0,
    //   photos: []
    // });
    // console.log(answersCopy);
    // dispatch(sorted(answersCopy));
    closeModal(questionID);
  }

  return (
    <div style={modalBackground} className="modalBackground">
      <div style={modalContainer} className="modalContainer">
        <h2>Submit your Answer</h2>
        <h3>{product.name}: {data.question_body}</h3>
        <div style={formDiv} className="answer">
          <label >Answer* </label>
          <input style={textBox} type="text" maxLength="1000" placeholder="Example: It is shipped from USA" required onChange={(e) => {answerInput = e.target.value}}/>
        </div>
        <div style={formDiv} className="nickname">
        <label >Nickname* </label>
          <input style={textBox} type="text" maxLength="60" placeholder="Example: jack543!" required onChange={(e) => {nameInput = e.target.value}}/>
            <br></br>
          <span style={userStyle} className="nickNameNotice">For privacy reasons, do not use your full name or email address</span>
        </div>
        <div style={formDiv} className="email">
        <label >Email* </label>
          <input style={textBox} type="email" maxLength="60" placeholder="Example: email123@gmail.com" required={true} onChange={(e) => {emailInput = e.target.value}}/>
            <br></br>
          <span style={userStyle} className="emailNotice">For authentication reasons, you will not be emailed</span>
        </div>
        <div style={footer} className="modalFooter">
        <button style={button} id={data.question_id} onClick={(e) => closeModal(e)}> Cancel </button>
        <button style={button} id={data.question_id} onClick={(e) => questionSubmitHandler(e.target.id)}> Submit </button>
        </div>
      </div>
    </div>
  )
}

export default AnswersModal;






//CSS Stuff.... Probably change later to styled-components

const modalBackground = {
  "width": "100vw",
  "position": "absolute",
  "marginLeft": "-50vw",
  "height": "100vh",
  "left": "50%",
  "top": 0,
  "backgroundColor" : "rgba(159,159,159,0.5)",
  "overflow": "hidden",
}

const modalContainer = {
  "border": "2px solid black",
  "width": "auto",
  "height": "auto",
  "left": "30vw",
  "top": "25vh",
  "borderRadius": "12px",
  "backgroundColor": "white",
  "boxShadow": "grey",
  "display": "flex",
  "flexDirection": "column",
  "padding": "25px",
  "position": "absolute",
  "justifyContent": "center",
  "alignItems": "center",
}

const formDiv = {
  "display": "inlineBlock",
  "width": "500px",
  "textAlign": "right",
  "marginRight": "100px"
}

const textBox = {
  "width": "300px",
  "height": "25px",
  "margin": "10px",
  "right": "0",
  "postition": "absolute",
}
const userStyle = {
  'fontSize': '12px',
  'color': '#5c5c5c',
  "justifyContent": "center",
  "marginRight": "10px",
};
const footer = {
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
}

const button = {
  "width": "100px",
  "height": "25px",
  "margin": "10px",
  "border": "none",
  "borderRadius": "8px",
  "fontSize": "16px",
  "cursor": "pointer"
}