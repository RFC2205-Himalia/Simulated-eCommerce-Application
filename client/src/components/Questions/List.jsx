import React from "react";
import { useSelector} from 'react-redux';
import {convertDate, clickHandler, reportHandler} from './eventHandlers.jsx';

function List() {
  const list = useSelector(state => state.questions.questions);
  const answersSorted = useSelector(state => state.questions.sortedAnswers);
  //const renderQuestions = useSelector(state => state.questions.renderList);

  // CSS styling to make things easier to look at
  const underlineStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
    'textDecoration': 'underline'
  };
  const userStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
  };
  const intitialStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
    'paddingLeft': '22px'
  };
  console.log('list: ', list);
  console.log('answersSorted: ', answersSorted);
  return (
    <div>
      {list ? list.map((question) => {
        return <div key = {`${question.question_id}`}>
            <br></br>
          <span style={{'fontSize': '20px'}}><b>Q: {question.question_body}</b></span>
          <ul>
          {answersSorted[question.question_id] ? answersSorted[question.question_id].map(answer => {
            return <li style={{'listStyle': 'none', 'fontSize': '18px'}} key = {answer.id}><b>A: </b>{answer.body}
              <br></br>
              <span style={intitialStyle}>by {answer.answerer_name === 'Seller' ? <b>{answer.answerer_name}</b> : answer.answerer_name}, {convertDate(answer.date)}</span>&nbsp;
              <span style={userStyle}>Helpful?</span>&nbsp;
              <span style={userStyle}>|</span>&nbsp;
              <span style={underlineStyle} title="Yes" id={answer.id} onClick = {clickHandler}>Yes</span>&nbsp;
              <span style={userStyle}>({answer.helpfulness})</span>&nbsp;
              <span style={userStyle}>|</span>&nbsp;
              <span style={underlineStyle} title="Report" id={answer.id} onClick = {!answer.reported ? reportHandler : null}>{!answer.reported ? 'Report' : 'Reported'}</span>
            </li>
          }) : "No answers to question"}
          </ul>
          </div>
      }) : "No questions match criteria" }
    </div>
  )
}

export default List;




//   return (
//     <div>
//       {list ? list.map((question) => {
//         return <div key = {`${question.question_id}`}>
//             <br></br>
//           <span style={{'fontSize': '20px'}}><b>Q: {question.question_body}</b></span>
//           {question.answers ? Object.keys(question.answers).map(id => {
//             return <div style={{'paddingBottom': '5px', 'fontSize': '18px'}} key = {id}><b>A: </b>{question.answers[id].body}
//                 <br></br>
//               <span style={intitialStyle}>by {question.answers[id].answerer_name}, {convertDate(question.answers[id].date)}</span>&nbsp;
//               <span style={userStyle}>Helpful?</span>&nbsp;
//               <span style={userStyle}>|</span>&nbsp;
//               <span style={underlineStyle} title="Yes" id={id} onClick = {clickHandler}>Yes</span>&nbsp;
//               <span style={userStyle}>({question.answers[id].helpfulness})</span>&nbsp;
//               <span style={userStyle}>|</span>&nbsp;
//               <span style={underlineStyle} title="Report" id={id} onClick = {clickHandler}>Report</span>
//             </div>
//           }) : "No answers to question"}
//           </div>
//       }) : "No questions match criteria" }
//     </div>
//   )
// }