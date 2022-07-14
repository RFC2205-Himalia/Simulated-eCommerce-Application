import React from "react";
import Helpful from './helpfulComponent.jsx';
import Answers from './renderAnswers.jsx';
import { useSelector} from 'react-redux';

function List() {
  const list = useSelector(state => state.questions.renderList);
  const answersSorted = useSelector(state => state.questions.sortedAnswers);
  const renderAnswers = useSelector(state => state.questions.renderAnswers);

  return (
    <div style={scrollable}>
      {answersSorted ? list.map((question) => {
        return <div key = {`${question.question_id}`}>
            <br></br>
          <span style={{'fontSize': '20px'}}><b>Q: {question.question_body}</b></span>
          <Helpful title={question.question_id} data={question}/>
          {Object.keys(renderAnswers).length > 0 ? <Answers question={question}/> : null}
          </div>
      }) : null }
    </div>
  )
}

export default List;

// CSS styling
const scrollable =
{
  'overflow': 'scroll',
  'maxHeight': '500px',
};