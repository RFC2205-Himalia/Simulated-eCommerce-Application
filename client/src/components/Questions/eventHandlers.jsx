// import { addRender } from "../../Features/questions.js";
// import { useDispatch, useSelector } from "react-redux";

// // Generic Click Handler
//   const clickHandler = (e) => {
//     console.log(`Clicked ${e.target.title ? e.target.title : ''} ${e.target.id ? `with id ${e.target.id}` : ''}`)
//   }

  // Used to convert date from string to month, dd yyyy format
  const convertDate = (date) => {
    let convertedDate = (new Date(date)).toLocaleDateString(undefined, {year:"numeric", month:"long", day:"numeric"})
    return convertedDate;
  }

  let textInput = '';

  // Generic change handler
  const changeHandler = (e) => {
    textInput = e.target.value;
  }
  // Search answers based on value, do not send if not over 3 chars
  const queryHandler = () => {
    console.log(`Query with value "${textInput}"`);
  }
  // pop out form to fill out to add question
  const addQuestionHandler = () => {
    console.log(`Add An Answer Clicked`);
  }

  // Render 2 new answers
  const moreHandler = () => {
    console.log('More Answers Clicked');
  }

  const helpfulHandler = (e) => {
    console.log(`YES Clicked at ID ${e.target.id}`)
  }

  // Have it change the report value from false to true in the question state. Do not just toggle since it can only be reported once. Then add question/asnwer to array of reported questions/answers to be looked over later.
  const reportHandler = (e) => {
    console.log(`Reported Clicked with ID ${e.target.id}`);
  }

export {convertDate, changeHandler, addQuestionHandler, reportHandler, moreHandler, queryHandler, helpfulHandler};