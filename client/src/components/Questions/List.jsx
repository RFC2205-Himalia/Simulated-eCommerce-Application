import React from "react";
import { useSelector} from 'react-redux';

function List() {
  const list = useSelector(state => state.questions.questions.results);
  return (
    <div>
      {list ? list.map((question) => {
        return <div key = {`${question.question_id}`}>
          <br></br>
          <span><b>Q:</b>{question.question_body}</span>
          <br></br>
          {question.answers ? Object.keys(question.answers).map(id => {
            return <div key = {id}><b>A:</b>{question.answers[id].body}</div>
          }) : "No answers to question"}
          </div>
      }) : "No questions match criteria" }
    </div>
  )
}

export default List;

