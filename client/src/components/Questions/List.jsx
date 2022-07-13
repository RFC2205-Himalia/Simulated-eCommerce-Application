import React from "react";
import Helpful from './helpfulComponent.jsx';
import Answers from './renderAnswers.jsx';
import { useSelector} from 'react-redux';

function List(props) {
  const list = useSelector(state => state.questions.renderList);
  const answersSorted = useSelector(state => state.questions.sortedAnswers);



  const scrollable =
  {
    'overflow': 'scroll',
    'maxHeight': '500px',
  };

  return (
    <div style={scrollable}>
      {answersSorted ? list.map((question) => {
        return <div key = {`${question.question_id}`}>
            <br></br>
          <span style={{'fontSize': '20px'}}><b>Q: {question.question_body}</b></span>
          <Helpful title={question.question_id} helpfulHandler={props.helpfulHandler} reportHandler={props.reportHandler} data={question}/>
          <Answers answersSorted={answersSorted} question={question} helpfulHandler={props.helpfulHandler} reportHandler={props.reportHandler} answerHandler={props.answerHandler} answerCollapseHandler={props.answerCollapseHandler}/>
          </div>
      }) : null }
    </div>
  )
}

export default List;