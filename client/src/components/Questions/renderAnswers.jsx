import React from "react";
import Helpful from './helpfulComponent.jsx';
import { convertDate } from "./eventHandlers.jsx";


function Answers({answersSorted, question}) {

  const intitialStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
    'paddingLeft': '22px'
  };

  return (
    <ul>
      {answersSorted[question.question_id] ? answersSorted[question.question_id].map(answer => {
        return <li style={{ 'listStyle': 'none', 'fontSize': '18px' }} key={answer.id}><b>A: </b>{answer.body}
          <br></br>
          <span style={intitialStyle}>by {answer.answerer_name === 'Seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}, {convertDate(answer.date)}</span>&nbsp;
          <Helpful data={answer} />
        </li>
      }) : "No answers to question"}
    </ul>
  )
}


export {Answers};