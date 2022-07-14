import React from "react";
import axios from "axios";

import { questionList, sorted, addRender, incrementCount, resetCount, answerRender} from "../../Features/questions.js";


function Modal() {

  // Creates new message or answer
  const postRequests = (productID, number) => {
    let url = ``;
    axios.post(`http://localhost:3000/qa/${url}`)
    .then((success) => {
      dispatch(questionList(success.data.results));
      dispatch(sorted(Sort(success.data.results)));
    })
    .catch((error) => {
      console.log("error", error)
    })
  }


  return (
    <div>
      this will be modal
    </div>
  )





}

export default Modal;