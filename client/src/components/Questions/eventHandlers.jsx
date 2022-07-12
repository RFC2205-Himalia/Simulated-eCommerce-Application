// import { addRender } from "../../Features/questions.js";
// import { useDispatch, useSelector } from "react-redux";

// Generic Click Handler
  const clickHandler = (e) => {
    console.log(`Clicked ${e.target.title ? e.target.title : ''} ${e.target.id ? `with id ${e.target.id}` : ''}`)
  }

  // Used to convert date from string to month, dd yyyy format
  const convertDate = (date) => {
    let convertedDate = (new Date(date)).toLocaleDateString(undefined, {year:"numeric", month:"long", day:"numeric"})
    return convertedDate;
  }

  // Generic change handler
  const changeHandler = (e) => {
    console.log(e.target.value);
  }

  // Render initial list of 4,
  const addAnswersHandler = () => {
    console.log('Add An Answer Clicked');

  }

  const reportHandler = () => {
    console.log('Reported Clicked');
  }

export {clickHandler, convertDate, changeHandler, addAnswersHandler, reportHandler};