import React from "react";
import Helpful from './helpfulComponent.jsx';
import Answers from './renderAnswers.jsx';
import { useSelector } from 'react-redux';

function List() {
  const list = useSelector(state => state.questions.renderList);
  const answersSorted = useSelector(state => state.questions.sortedAnswers);
  const renderAnswers = useSelector(state => state.questions.renderAnswers);

  return (
    <div style={scrollable}>
      {answersSorted ? list.map((question) => {
        return (
          <div  style={questionsStyle} key={`${question.question_id}`}>
            <br></br>
            <span
              style={{ 'fontSize': '20px'}}>
              <b>Q: {question.question_body}</b>
            </span>
            <Helpful
              title={question.question_id}
              data={question}
            />
            {Object.keys(renderAnswers).length > 0 ? <Answers question={question} /> : null}
          </div>
        )
      }) : null}
    </div>
  )
}

export default List;

// CSS styling
const scrollable =
{
  "marginTop": "10px",
  "position": "absolute",
  'overflow': 'scroll',
  'maxHeight': '50vh',
  "display": "flex",
  "flexDirection": "column",
  "width": "95%",
  "alignSelf": "center",
  "alignItems": "left",
  "textAlign": "left"
};

const questionsStyle = {
  'position': 'relative',
  'display': 'flex',
  "flexDirection": "column",
  'alignItems': 'left',
  'width': '60vw',
  "alignSelf": "center",
  "textAlign": "left"
};