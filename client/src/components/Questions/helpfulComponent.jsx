import React from "react";

function Helpful (props) {

  const underlineStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
    'textDecoration': 'underline'
  };
  const userStyle = {
    'fontSize': '14px',
    'color': '#5c5c5c',
  };

  let id = props.data.id || props.data.question_id;
  let helpfulness = props.data.helpfulness || props.data.question_helpfulness;

  return (
    <div>
      <span style={userStyle}>Helpful?</span>&nbsp;
      <span style={userStyle}>|</span>&nbsp;
      <span style={underlineStyle} title="Yes" id={id} onClick = {(e) => props.helpfulHandler(e)}>Yes</span>&nbsp;
      <span style={userStyle}>({helpfulness})</span>&nbsp;
      <span style={userStyle}>|</span>&nbsp;
      <span style={underlineStyle} id={id} onClick = {(e) => !props.data.reported ? props.reportHandler('question', e) : null}>{!props.data.reported ? 'Report' : 'Reported'}</span>
    </div>

  )
}

export default Helpful;