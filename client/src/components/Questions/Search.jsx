import React from "react";
import { GoSearch } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux";

import { addRender, answerRender, searchingRender} from "../../Features/questions.js";

function Search() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const unchangingAnswers = useSelector(state => state.questions.unchangingAnswers);
  const sortedAnswers = useSelector(state => state.questions.sortedAnswers);

  var textInput = '';


  // Generic change handler
  const changeHandler = (e) => {
    console.log(e.target.value);
    textInput = e.target.value;
    queryHandler(textInput);
  }
  // Search answers based on value, do not send if not over 3 chars
  const queryHandler = (input) => {
    if (input.length >= 3) {
      let matchingQuestions = [];
      let matchingAnswers = {};
      // Check if any questions match
      // If so add question to render list
      // and add all answers for question to answer list
      questions.forEach((question) => {
        if (question.question_body.includes(input)) {
          matchingQuestions.push(question);
          matchingAnswers[question.question_id] = sortedAnswers[question.question_id];
        }
      })

      // Check answers to see if they match
      // If so add qeuestion to render list
      // and add applicable answers only to list
      let answerKeys = Object.keys(unchangingAnswers);
      answerKeys.forEach((key) => {
        let answersArray = [];
        unchangingAnswers[key].forEach((answer) => {
          if (answer.body.includes(input)) {
            answersArray.push(answer);
            questions.forEach((item) => {
              if (item.question_id == Number(key)) {
                if(matchingQuestions.includes(item) !== true) {
                  let questionCopy = Object.assign({}, item);
                  questionCopy.answers = {};
                  matchingQuestions.push(questionCopy);
                }
              }
            })
          }
        })
        if (answersArray.length > 0) {
          matchingAnswers[key] = answersArray;
        }
      })
      dispatch(searchingRender(true));
      dispatch(addRender(matchingQuestions));
      dispatch(answerRender(matchingAnswers));
    } else {
      console.log('else');
      dispatch(searchingRender(false));
      dispatch(addRender((questions).slice(0, 4)));
    }
  }



  return (
      <form style={formStyle}>
        <div className='form'>
         <input style={inputStyle} type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' onChange={(e) => changeHandler(e)}/>
         <span className="icon" style={icon}><GoSearch onClick= {queryHandler}/></span>
        </div>
      </form>
  )
}

export default Search;



// CSS styling to make things easier to look at
const formStyle = {
  //"margin": "auto",
  "display": "block",
  "marginLeft": "auto",
  "marginRight": "auto",
  "width": "60%",
  // 'position': 'relative',
  // 'display': 'inlineBlock',
  // 'selfAlign': 'center',
  // 'width': '50%',
};

const inputStyle = {
  'position': 'relative',
  'display': 'flex',
  'alignItems': 'center',
  'width': '60vw',
  "alignSelf": "center",
  "height": "40px"
};

const icon = {
  'position': 'relative',
  'left': '58vw',
  'cursor': 'pointer'
}