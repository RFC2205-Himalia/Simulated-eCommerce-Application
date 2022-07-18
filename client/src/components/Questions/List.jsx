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
            <div
              style={{ 'fontSize': '18px', maxWidth: "270px"}}>
              <b>Q: {question.question_body}</b>
            </div>
            <div style={questionHelp}>
            <Helpful
              className = "listHelpful"
              title={question.question_id}
              data={question}
            />
            </div>
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
  marginTop: "10px",
  position: "relative",
  overflow: 'scroll',
  maxHeight: '50vh',
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignSelf: "center",
  alignItems: "left",
  textAlign: "left",
  left: "0.5vw"
};

const questionsStyle = {
  display: 'flex',
  flexDirection: "column",
  alignItems: 'left',
  width: '60vw',
  alignSelf: "center",
  textAlign: "left"
};

const questionHelp = {
  textAlign: "right",
  width: "60vw",
  marginBottom: "10px"
}