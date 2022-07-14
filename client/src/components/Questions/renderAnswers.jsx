import React from "react";
import Helpful from './helpfulComponent.jsx';
import { useSelector } from "react-redux";


function Answers(props) {
  const answersSorted = useSelector(state => state.questions.sortedAnswers);
  const answersInitial = useSelector(state => state.questions.renderAnswers);

  const convertDate = (date) => {
    let convertedDate = (new Date(date)).toLocaleDateString(undefined, {year:"numeric", month:"long", day:"numeric"})
    return convertedDate;
  }

  const underlineStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
    'textDecoration': 'underline'
  };
  const intitialStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
    'paddingLeft': '22px'
  };
  const scrollable =
  {
    'overflow': 'scroll',
    'maxHeight': '200px',
  };


  let initialLength = answersInitial[props.question.question_id].length;
  let totalLength = answersSorted[props.question.question_id].length;

  return (
    <ul style={scrollable}>
      {answersInitial[props.question.question_id] ? answersInitial[props.question.question_id].map((answer) => {
        return <li style={{ 'listStyle': 'none', 'fontSize': '18px'}} key={answer.id}><b>A: </b>{answer.body}
        <br></br>
          <span style={intitialStyle}>by {answer.answerer_name === 'Seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}, {convertDate(answer.date)}</span>&nbsp;
          <Helpful data={answer} title={props.question.question_id} reported={false} helpfulHandler={props.helpfulHandler} reportHandler={props.reportHandler}/>
        </li>
      }) : "No answers to question"}
      <br></br>
      {totalLength > 2 && initialLength < totalLength ? <span id={props.question.question_id} onClick={(e) => props.answerHandler(e)} style={underlineStyle}>Show All Answers</span> : null}
      {initialLength === totalLength && totalLength > 2 ? <span id={props.question.question_id} onClick={(e) => props.answerCollapseHandler(e)} style={underlineStyle}>Collapse All Answers</span> : null}
    </ul>

  )
}


export default Answers;