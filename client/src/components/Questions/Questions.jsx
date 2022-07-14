import React from "react";
import axios from "axios";

import List from "./List.jsx";
import Sort from "./Sort.jsx";
import Stars from "./stars.jsx";
import { GoSearch } from "react-icons/go"

import { useDispatch, useSelector } from "react-redux";
import { questionList, sorted, addRender, incrementCount, resetCount, answerRender} from "../../Features/questions.js";
import { useEffect } from "react";

function Questions () {

  // Hardcoded value for now, replace later with dynamic from URL
  var productNumber = 66612;
  // Variables to pass on current product id
  var productReq = `questions?product_id=${productNumber}`
  var textInput = '';


  // State components used later in file
  const dispatch = useDispatch();
  const counter = useSelector(state => state.questions.count);
  const questions = useSelector(state => state.questions.questions);
  const rendered = useSelector(state => state.questions.renderList);
  const sortedAnswers = useSelector(state => state.questions.sortedAnswers);





  // componentDidMount replacement
  useEffect(() => {
    getRequests(productReq)
  }, []);
  // Updates both sorted answers and question renderlist when questions are populated
  useEffect(() => {
    let size = questions.length;
    if (size > 0) {
      dispatch(sorted(Sort(questions)))
      dispatch(addRender((questions).slice(0, 4)));
    }
  }, [questions])
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
  // Sends request to report question or answer
  const putRequests = (qOrAID) => {
    let url = `${qOrAID}`;
    axios.put(`http://localhost:3000/qa/${url}`)
    .then(() => {
      console.log('PUT')
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
    // if char count is >= 3
      // check questions and answers for ispresent()
      // return list of filtered results
    console.log(`Query with value "${textInput}"`);
  }
  // pop out form to fill out to add question
  const addQuestionHandler = () => {
    // Send POST request with appropriate info attached
      //  /qa/questions/:question_id/answers
      //body, name, email, photos=[]
    console.log(`Add An Answer Clicked`);
  }

  // Incrememnt helpful count
  const helpfulHandler = (type, e) => {
    putRequests(`${type}s/${e.target.id}/helpful`)
  }

  // Have it change the report value from false to true in the question state. Do not just toggle since it can only be reported once. Then add question/asnwer to array of reported questions/answers to be looked over later.
  const reportHandler = (type, e) => {
    putRequests(`${type}s/${e.target.id}/report`)
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



  return (
    <div>
      <h2>Questions/Answers</h2>
      <Stars/>
      <form>
          <input style={formStyle} type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' onChange={(e) => changeHandler(e)}/>
          <GoSearch id='query' onClick = {queryHandler}/>
      </form>
      <List helpfulHandler={helpfulHandler} reportHandler={reportHandler}/>
      <br></br>
      {rendered.length > 0 && rendered.length < questions.length ? <button title="More" onClick={moreHandler} type='button'>MORE ANSWERED QUESTIONS</button> : null}
      {rendered.length > 4 && rendered.length <= questions.length ? <button title="More" onClick={collapseHandler} type='button'>COLLAPSE QUESTIONS</button> : null}
      <button title="Add" onClick={addQuestionHandler} type='button'>ADD A QUESTION + </button>
    </div>
  )
}

export default Questions;


// CSS styling to make things easier to look at
const formStyle = {
  'width': '325px',
};
