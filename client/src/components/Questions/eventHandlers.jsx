import React from "react";
import { useSelector} from 'react-redux';



const clickHandler = (e) => {
  console.log(`Clicked ${e.title} ${e.id ? `with id ${e.id}` : ''}`)
}

const convertDate = (date) => {
  let test = (new Date(date)).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"})
  return test;
}






export {clickHandler, convertDate};