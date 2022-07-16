import React from "react";
import Helpful from './helpfulComponent.jsx';
import { useDispatch, useSelector } from "react-redux";
import { answerRender } from "../../Features/questions.js";


function Answers(props) {
  const dispatch = useDispatch();
  const answersSorted = useSelector(state => state.questions.sortedAnswers);
  const answersInitial = useSelector(state => state.questions.renderAnswers);

  // Converts date from string to appropriate format
  const convertDate = (date) => {
    let convertedDate = (new Date(date)).toLocaleDateString(undefined, { timeZone: 'UTC', year: "numeric", month: "long", day: "numeric" })
    return convertedDate;
  }
  // Shows all answers for specific question
  const answerHandler = (e) => {
    let loadList = Object.assign({}, answersInitial);
    loadList[e.target.id] = (answersSorted[e.target.id]);
    dispatch(answerRender(loadList));
  }
  // Returns answers list for question to default list
  const answerCollapseHandler = (e) => {
    let loadList = Object.assign({}, answersInitial);
    loadList[e.target.id] = (answersSorted[e.target.id]).slice(0, 2);
    dispatch(answerRender(loadList));
  }


  // Aliases to keep code cleaner
  let id = props.question.question_id;
  let initialLength = answersInitial[id].length;
  let totalLength = answersSorted[id].length;

  return (
    <div >
      {initialLength > 0 ? answersInitial[id].map((answer) => {
        return (
          <div style={answersStyle} key={answer.id}><b>A: </b>{answer.body}
            <br></br>
            <span style={intitialStyle}>by {answer.answerer_name === 'Seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}, {convertDate(answer.date)}</span>&nbsp;
            <Helpful className="answerHelp"
              data={answer}
              title={id}
              reported={false}
            />
          </div>
        )
      }) : "No answers to question"}
      <br></br>
      {totalLength > 2 && initialLength < totalLength ?
        <span
          style={answerClickable}
          id={id}
          onClick={(e) => answerHandler(e)}
          >
            LOAD MORE ANSWERS
        </span> : null}
      {initialLength === totalLength && totalLength > 2 ?
        <span
          style={answerClickable}
          id={id}
          onClick={(e) => answerCollapseHandler(e)}
          >
            COLLAPSE ANSWERS
        </span> : null}
    </div>


  )
}


export default Answers;


//CSS styling
const answerClickable = {
  'fontSize': '12px',
  'color': '#5c5c5c',
  'cursor': 'pointer',
  'fontWeight': 'bold'
}

const intitialStyle = {
  'fontSize': '14px',
  'color': '#5c5c5c',
  'paddingLeft': '22px'
};
// const scrollable =
// {
//   'overflow': 'scroll',
//   'maxHeight': '200px',
// };

const answersStyle = {
  'position': 'relative',
  'display': 'flex',
  "flexDirection": "column",
  'alignItems': 'left',
  'width': '55vw',
  "alignSelf": "center",
  "textAlign": "left"
};