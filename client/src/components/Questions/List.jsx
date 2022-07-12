import React from "react";
import { useSelector} from 'react-redux';
import { clickHandler, convertDate } from './eventHandlers.jsx';

function List() {
  const list = useSelector(state => state.questions.questions.results);

  const userStyle = {
    'fontSize': '12px',
    'color': '#5c5c5c',
  };

  return (
    <div>
      {list ? list.map((question) => {
        return <div key = {`${question.question_id}`}>
            <br></br>
          <span style={{'paddingBottom': '5px'}}><b>Q: </b>{question.question_body}</span>
          {question.answers ? Object.keys(question.answers).map(id => {
            return <div style={{'paddingBottom': '5px'}} key = {id}><b>A: </b>{question.answers[id].body}
                <br></br>
              <span>by {question.answers[id].answerer_name}, {convertDate(question.answers[id].date)}</span>
                <br></br>
              <span style={userStyle}>Helpful?</span><span style={userStyle} title="Yes" id={id} onClick = {(event) => clickHandler(event.target)}>  |  Yes {question.answers[id].helpfulness}</span><span style={userStyle} title="Report" id={id} onClick = {(event) => clickHandler(event.target)}>  |  Report</span>
            </div>
          }) : "No answers to question"}
          </div>
      }) : "No questions match criteria" }
    </div>
  )
}

export default List;

