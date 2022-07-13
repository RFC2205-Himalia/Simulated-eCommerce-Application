import React from "react";
import axios from "axios";
import Sort from "./Sort.jsx";
import { useDispatch } from "react-redux";
import { questionList, sorted } from "../../Features/questions.js";


function HandleDispatch(type, id, count) {
  const questionDispatch = (data) => useDispatch(questionList(data));
  const sortDispatch = (data) => useDispatch(sorted(data));

  console.log('type: ', type);
  console.log('id: ', id);
  console.log('count: ', count);
  if (type === 'GET') {
    console.log('inside if')
    requests(id, count)
  }

  function requests(productID, number) {
    axios.get(`http://localhost:3000/qa/${productID}&${number}`)
    .then((success) => {
      console.log(success);
      questionDispatch(success.data.results);
      sortDispatch((Sort(success.data.results)));
    })
    .catch((error) => {
      console.log("error", error)
    })
  }


}

export default HandleDispatch;