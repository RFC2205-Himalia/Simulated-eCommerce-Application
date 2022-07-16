import React, {useState} from "react";
import QuestionsModal from "./QuestionsModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addRender, incrementCount, resetCount } from "../../Features/questions.js";

function Buttons(props) {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.questions.count);
  const questions = useSelector(state => state.questions.questions);
  const rendered = useSelector(state => state.questions.renderList);
  const searching = useSelector(state => state.questions.searching);


  // Render 2 more questions
  const moreHandler = () => {
    async function increment() {
      await dispatch(incrementCount())
    }
    increment().then(dispatch(addRender(questions.slice(0, counter + 2))));
  }
  // Collaspe question list down to default amount
  const collapseHandler = () => {
    dispatch(resetCount());
    dispatch(addRender(questions.slice(0, 4)))
  }
  // Track boolean to show "Question" Modal
  const [questionModal, setQuestionModal] = useState(false);
  const updateQuestionModal = () => {
    setQuestionModal(current => !current)
  }



  return (
    <div>
      {rendered.length > 0 && rendered.length < questions.length && searching === false ?

        <button
          title="More"
          onClick={moreHandler}
          type='button'>
            MORE ANSWERED QUESTIONS
        </button> : null}

      {rendered.length > 4 && rendered.length <= questions.length ?
        <button
          title="More"
          onClick={collapseHandler}
          type='button'>
            COLLAPSE QUESTIONS
        </button> : null}

      <button
        title="Add"
        onClick={updateQuestionModal}
        type='button'>
          ADD A QUESTION +
        </button>

      {questionModal ?
        <QuestionsModal
          productID={props.product}
          closeModal={updateQuestionModal}
        /> : null}

    </div>
  )
}

export default Buttons;


