import React from "react";
import Helpful from './helpfulComponent.jsx';
import { Answers } from './renderAnswers.jsx';
import { useSelector} from 'react-redux';

function List() {
  const list = useSelector(state => state.questions.questions);
  const answersSorted = useSelector(state => state.questions.sortedAnswers);

  return (
    <div>
      {answersSorted ? list.map((question) => {
        return <div key = {`${question.question_id}`}>
            <br></br>
          <span style={{'fontSize': '20px'}}><b>Q: {question.question_body}</b></span>
          <Helpful data={question}/>
          <Answers answersSorted={answersSorted} question={question}/>
          </div>
      }) : "No questions match criteria" }
    </div>
  )
}

export default List;