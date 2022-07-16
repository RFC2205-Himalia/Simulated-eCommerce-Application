import React, { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { refresh } from "../../Features/questions.js";


function AnswersModal({ data, closeModal }) {

  const dispatch = useDispatch();
  const product = useSelector(state => state.addProduct.products);

  const formDefault = {answer: "", name: "", email: ""};
  const [formValues, setFormValues] = useState(formDefault);
  const [formErrors, setFormErrors] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);

  // When canSubmit state update to "true" it handles submitting
  // Can only run if no errors
  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && canSubmit) {
      let body = {
        "body": `${formValues.answer}`,
        "name": `${formValues.name}`,
        "email": `${formValues.email}`
      }
      postRequests(id, body)
      closeModal(id);
    }
  }, [canSubmit])


  // Creates new answer
  const postRequests = (questionID, body) => {
    axios.post(`http://localhost:3000/qa/questions/${questionID}/answers`, body)
      .then(() => {
        dispatch(refresh());
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  var id = data.question_id;
  // When submitted, checks if errors
  const answerSubmitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  }
  // Tracks changes being typed
  const handlechange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  // Validation checks
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.answer) {
      errors.answer = "Answer is required!"
    }
    if (!values.name) {
      errors.name = "Nickname is required!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format!"
    }
    if (Object.keys(errors).length === 0) {
      setCanSubmit(true);
    }
    return errors;
  }


  return (
    <div style={modalBackground} className="modalBackground">
      <div style={modalContainer} className="modalContainer">
        <form onSubmit={answerSubmitHandler}>
        <h2>Submit your Answer</h2>
        <h3>{product.name}: {data.question_body}</h3>

          <div style={formDiv} className="answer">
            <label >Answer* </label>
            <input
            style={textBox}
            type="text"
            maxLength="1000"
            placeholder="Example: It is shipped from USA"
            name="answer"
            value={formValues.answer}
            onChange={(e) => {handlechange(e)}}
            />
            <p style={error}>{ formErrors.answer }</p>
          </div>

          <div style={formDiv} className="nickname">
            <label >Nickname* </label>
            <input
            style={textBox}
            type="text"
            maxLength="60"
            placeholder="Example: jack543!"
            name="name"
            value={formValues.name}
            onChange={(e) => {handlechange(e)}}
            />
            {formErrors.name ? <p style={error}>{ formErrors.name }</p> :
            <p
              style={userStyle}
              className="nickNameNotice">
                For privacy reasons, do not use your full name or email address
            </p>
          }
          </div>

          <div style={formDiv} className="email">
            <label >Email* </label>
            <input
            style={textBox}
            type="text"
            maxLength="60"
            placeholder="Example: email123@gmail.com"
            name="email"
            value={formValues.email}
            onChange={(e) => {handlechange(e)}}
            />
            {formErrors.email ? <p style={error}>{ formErrors.email }</p> :
            <p
              style={userStyle}
              className="emailNotice">
                For authentication reasons, you will not be emailed
            </p>
          }
          </div>

          <div style={footer} className="modalFooter">
            <button style={button} onClick={(e) => closeModal(e)}> Cancel </button>
            <button type="submit" style={button} onSubmit={(e) => answerSubmitHandler(e.target.id)}> Submit </button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default AnswersModal;






//CSS Stuff.... Probably change later to styled-components

const error = {
  "color": "red",
}

const modalBackground = {
  "width": "100vw",
  "position": "absolute",
  "height": "100vh",
  "left": "0",
  "top": "0",
  "backgroundColor": "rgba(159,159,159,0.5)",
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
  // "display": "flex",
  // "flexDirection": "column",
  // "padding": "25px",
  "position": "absolute",
  // "justifyContent": "center",
  // "alignItems": "center",
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
  // "margin": "10px",
  "right": "0",
  "postition": "absolute",
}
const userStyle = {
  'fontSize': '12px',
  'color': '#5c5c5c',
  // "justifyContent": "center",
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