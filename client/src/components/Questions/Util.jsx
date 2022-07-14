import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { questionList, sorted, addRender, incrementCount, resetCount, answerRender, reportedTracker} from "../../Features/questions.js";

function Handlers() {
  const questionDispatch = (data) => useDispatch(questionList(data));
  const sortDispatch = (data) => useDispatch(sorted(data));

  const dispatch = useDispatch();
  const counter = useSelector(state => state.questions.count);
  const questions = useSelector(state => state.questions.questions);
  const rendered = useSelector(state => state.questions.renderList);
  const sortedAnswers = useSelector(state => state.questions.sortedAnswers);
  const answers = useSelector(state => state.questions.renderAnswers);

  var textInput = '';


  Handlers.getRequests = (productID) => {
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
  Handlers.postRequests = (productID, number) => {
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
  Handlers.putRequests = (qOrAID) => {
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
  Handlers.changeHandler = (e) => {
    textInput = e.target.value;
  }
  // Search answers based on value, do not send if not over 3 chars
  Handlers.queryHandler = () => {
    console.log(`Query with value "${textInput}"`);
  }
  // pop out form to fill out to add question
  Handlers.addQuestionHandler = () => {
    console.log(`Add An Answer Clicked`);
  }

  // Render 2 new answers
  Handlers.moreHandler = () => {
    console.log('More Answers Clicked');
    async function increment() {
      await dispatch(incrementCount())
    }
    increment().then(dispatch(addRender(questions.slice(0, counter + 2)))); // It seems to update count before it dispatches addRender but is always behind
    console.log('done');
  }

  // Collaspe question list down to default amount
  Handlers.collapseHandler = () => {
    dispatch(resetCount());
    dispatch(addRender(questions.slice(0, 4)))
  }

  // Incrememnt helpful count
  Handlers.helpfulHandler = (e) => {
    console.log(`YES Clicked at ID ${e.target.id}`)
  }

  // Have it change the report value from false to true in the question state. Do not just toggle since it can only be reported once. Then add question/asnwer to array of reported questions/answers to be looked over later.
  Handlers.reportHandler = (type, e) => {
    if (type === 'question') {
      dispatch(reportedTracker(e.target.id))
    } else if (type === 'answer') {
      //add reported: true
      console.log('not filled in for answer at report handler yet')
    }
    putRequests(`${type}s/${e.target.id}/report`)
    console.log(`Reported Clicked with ID ${e.target.id}`);
  }

  // Intial load of 2 answers, on click loads them all for specific question
  Handlers.renderAnswers = (list) => {
    let questionIDs = Object.keys(list);
    let loadList = {};
    questionIDs.forEach((question) => {
      loadList[question] = (list[question]).slice(0, 2);
    })
    dispatch(answerRender(loadList));
  }
  // Shows all answers for specific question
  Handlers.answerHandler = (e) => {
    let loadList= Object.assign({}, answers);
    loadList[e.target.id] = (sortedAnswers[e.target.id]);
    dispatch(answerRender(loadList));
  }
  // Returns answers list for question to default list
  Handlers.answerCollapseHandler = (e) => {
    let loadList= Object.assign({}, answers);
    loadList[e.target.id] = (sortedAnswers[e.target.id]).slice(0, 2);
    dispatch(answerRender(loadList));
  }
}

export default Handlers;