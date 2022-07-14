import React from "react";
import axios from "axios";

import List from "./List.jsx";
import Sort from "./Sort.jsx";
import Stars from "./stars.jsx";
import { GoSearch } from "react-icons/go"

import { useDispatch, useSelector } from "react-redux";
import { questionList, sorted, addRender, incrementCount, resetCount, answerRender, reportedTracker} from "../../Features/questions.js";
import { useEffect, useRef } from "react";



// MOVE ALL THESE HANDLERS TO THEIR OWN PAGE WHEN ABLE. ALL THESE ON HERE MAKE IT MESSY

function Questions () {
  // State components used later in file
  const dispatch = useDispatch();
  const counter = useSelector(state => state.questions.count);
  const questions = useSelector(state => state.questions.questions);
  const rendered = useSelector(state => state.questions.renderList);
  const sortedAnswers = useSelector(state => state.questions.sortedAnswers);
  const answers = useSelector(state => state.questions.renderAnswers);

  var textInput = '';

  // Hardcoded value for now, replace later with dynamic from URL
  var productNumber = 66678;
  // Not hard coded values
  var productReq = `questions?product_id=${productNumber}`
  var countReq = `count=${counter}` // Temporary hard coding of ID

  // componentDidMount replacement
  useEffect(() => {
    getRequests(productReq, countReq)
    console.log('mounted');
  }, []);


  useEffect(() => {
    let size = questions.length;
    if (size > 0) {
      dispatch(sorted(Sort(questions)))
      dispatch(addRender((questions).slice(0, 4)));
    }
  }, [questions])

  useEffect(() => {
    let size = Object.keys(sortedAnswers).length;
    if (size > 0) {
      renderAnswers(sortedAnswers)
    }
  }, [sortedAnswers])




// Sends out request for Q&A data for specified product ID
  const getRequests = (productID) => {
    let url = `${productID}`
    axios.get(`http://localhost:3000/qa/${url}`)
    .then((success) => {
      dispatch(questionList(success.data.results));
    })
    .catch((error) => {
      console.log("error", error)
    })
  }

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
  // Sends request to report question
  const putRequests = (qOrAID) => {
    let url = `${qOrAID}`;
    axios.put(`http://localhost:3000/qa/${url}`)
    .then((success) => {
      console.log('Reported')
    })
    .catch((error) => {
      console.log("error", error)
    })
  };

  // Generic change handler
  const changeHandler = (e) => {
    textInput = e.target.value;
  }
  // Search answers based on value, do not send if not over 3 chars
  const queryHandler = () => {
    console.log(`Query with value "${textInput}"`);
  }
  // pop out form to fill out to add question
  const addQuestionHandler = () => {
    console.log(`Add An Answer Clicked`);
  }

  // Render 2 new answers
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

  // Incrememnt helpful count
  const helpfulHandler = (e) => {
    console.log(`YES Clicked at ID ${e.target.id}`)
  }

  // Have it change the report value from false to true in the question state. Do not just toggle since it can only be reported once. Then add question/asnwer to array of reported questions/answers to be looked over later.
  const reportHandler = (type, e) => {
    putRequests(`${type}s/${e.target.id}/report`)
  }

  // Intial load of 2 answers, on click loads them all for specific question
  const renderAnswers = (list) => {
    let questionIDs = Object.keys(list);
    let loadList = {};
    questionIDs.forEach((question) => {
      loadList[question] = (list[question]).slice(0, 2);
    })
    dispatch(answerRender(loadList));
  }
  // Shows all answers for specific question
  const answerHandler = (e) => {
    let loadList= Object.assign({}, answers);
    loadList[e.target.id] = (sortedAnswers[e.target.id]);
    dispatch(answerRender(loadList));
  }
  // Returns answers list for question to default list
  const answerCollapseHandler = (e) => {
    let loadList= Object.assign({}, answers);
    loadList[e.target.id] = (sortedAnswers[e.target.id]).slice(0, 2);
    dispatch(answerRender(loadList));
  }


// CSS styling to make things easier to look at
  const formStyle = {
    'width': '325px',
  };



  return (
    <div>
      <h2>Questions/Answers</h2>
      <Stars/>
      <form>
          <input style={formStyle} type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' onChange={(e) => changeHandler(e)}/>
          <GoSearch id='query' onClick = {queryHandler}/>
      </form>
      <List helpfulHandler={helpfulHandler} reportHandler={reportHandler} answerHandler={answerHandler} answerCollapseHandler={answerCollapseHandler}/>
      <br></br>
      {rendered.length > 0 && rendered.length < questions.length ? <button title="More" onClick={moreHandler} type='button'>MORE ANSWERED QUESTIONS</button> : null}
      {rendered.length > 4 && rendered.length <= questions.length ? <button title="More" onClick={collapseHandler} type='button'>COLLAPSE QUESTIONS</button> : null}
      <button title="Add" onClick={addQuestionHandler} type='button'>ADD A QUESTION + </button>
    </div>
  )
}

export default Questions;