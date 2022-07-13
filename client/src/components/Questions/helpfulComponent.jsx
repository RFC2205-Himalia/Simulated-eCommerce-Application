import React from "react";
import {reportHandler, helpfulHandler} from './eventHandlers.jsx';



function Helpful ({data}) {

  const underlineStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
    'textDecoration': 'underline'
  };
  const userStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
  };

  let id = data.id || data.question_id;
  let helpfulness = data.helpfulness || data.question_helpfulness;

  return (
    <div>
      <span style={userStyle}>Helpful?</span>&nbsp;
      <span style={userStyle}>|</span>&nbsp;
      <span style={underlineStyle} title="Yes" id={id} onClick = {helpfulHandler}>Yes</span>&nbsp;
      <span style={userStyle}>({helpfulness})</span>&nbsp;
      <span style={userStyle}>|</span>&nbsp;
      <span style={underlineStyle} title="Report" id={id} onClick = {(e) => !data.reported ? reportHandler(e) : null}>{!data.reported ? 'Report' : 'Reported'}</span>
    </div>

  )
}

export default Helpful;