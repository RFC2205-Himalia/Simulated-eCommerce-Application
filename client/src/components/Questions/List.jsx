import React from "react";
import { useSelector} from 'react-redux';
import { clickHandler, convertDate } from './eventHandlers.jsx';

function List() {
  const list = useSelector(state => state.questions.questions.results);


  return (
    <div>
      {list ? list.map((question) => {
        return <div key = {`${question.question_id}`}>
            <br></br>
          <span><b>Q: </b>{question.question_body}</span>
            <br></br>
          {question.answers ? Object.keys(question.answers).map(id => {
            return <div key = {id}><b>A: </b>{question.answers[id].body}
                <br></br>
              <span>by {question.answers[id].answerer_name}, {convertDate(question.answers[id].date)}</span>
                <br></br>
              <span>Helpful?</span><span title="Yes" id={id} onClick = {(event) => clickHandler(event.target)}>  |  Yes {question.answers[id].helpfulness}</span><span title="Report" id={id} onClick = {(event) => clickHandler(event.target)}>  |  Report</span>
            </div>
          }) : "No answers to question"}
          </div>
      }) : "No questions match criteria" }
    </div>
  )
}

export default List;

