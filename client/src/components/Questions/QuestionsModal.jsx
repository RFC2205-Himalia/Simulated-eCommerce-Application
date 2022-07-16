import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { questionList } from "../../Features/questions.js";


function QuestionsModal({closeModal, productID}) {

  const dispatch = useDispatch();
  const product = useSelector(state => state.addProduct.products);
  const questions = useSelector(state => state.questions.questions);
  console.log(questions);

  // Creates new message or answer
  const postRequests = (body) => {
    axios.post(`http://localhost:3000/qa/questions`, body)
    .then(() => {
      console.log('posted');
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

  var bodyInput = '';
  var nameInput = '';
  var emailInput = '';

  const questionSubmitHandler = () => {
    console.log(productID);
    let body = {
      "body": `${bodyInput}`,
      "name": `${nameInput}`,
      "email": `${emailInput}`,
      "product_id": productID
    }
    postRequests(body);
    let questionsCopy = [...questions];
    questionsCopy.push({
      question_id: productID,
      question_body: bodyInput,
      question_date: Date(),
      asker_name: nameInput,
      question_helpfulness: 0,
      reported: false,
      answers: []
    })
    console.log(questionsCopy);
    dispatch(questionList(questionsCopy));
    closeModal();
  }


  return (
    <div style={modalBackground} className="modalBackground">
      <div style={modalContainer} className="modalContainer">
        <h2>Ask Your Question</h2>
        <h3>About the {product.name}</h3>
        <div style={formDiv} className="answer">
          <label>Your Question* </label>
          <input style={textBox} type="text" maxLength="1000" placeholder="Example: Is it shipped from USA?" required onChange={(e) => {bodyInput = e.target.value}}/>
        </div>
        <div style={formDiv} className="nickname">
          <label>Nickname* </label>
          <input style={textBox} type="text" maxLength="60" placeholder="Example: jack543!" required onChange={(e) => {nameInput = e.target.value}}/>
            <br></br>
          <span style={userStyle} className="nickNameNotice">For privacy reasons, do not use your full name or email address</span>
        </div>
        <div style={formDiv} className="email">
          <label>Email* </label>
          <input style={textBox} type="email" maxLength="60" placeholder="Example: email123@gmail.com" required onChange={(e) => {emailInput = e.target.value}}/>
            <br></br>
          <span style={userStyle} className="emailNotice">For authentication reasons, you will not be emailed</span>
        </div>
        <div style={footer} className="modalFooter">
        <button style={button} onClick={() => closeModal()}> Cancel </button>
        <button style={button} onClick={() => questionSubmitHandler()}> Submit </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionsModal;




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
