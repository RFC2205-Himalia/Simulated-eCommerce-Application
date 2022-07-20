import React from "react";



function PhotoModal({ closeModal, photoURL }) {

  return (
    <div className="photoBackground" style={modalBackground}>
      <div className="photoContainer" style={modalContainer}>
        <button style={button} element='Close Button Photo Modal' widget='Questions And Answers' onClick={() => closeModal(photoURL)}>X</button>
        <img style={photo} src={photoURL} />
      </div>
    </div>
  )
}

export default PhotoModal;






const modalBackground = {
  width: "100vw",
  position: "fixed",
  height: "100vh",
  left: "0",
  top: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(159,159,159,0.5)",
  overflow: "hidden",
}

const modalContainer = {
  border: "2px solid black",
  height: "75vh",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "5px 5px 10px gray",
  background: "white"
}

const photo = {
  maxWidth: "75vw",
  maxHeight: "75vh",
  top: "0",
}

const button = {
  position: "absolute",
  top: "0vh",
  right: "0vw",
  maxWidth: "100px",
  height: "25px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#fffefee1",
  border: "rgba(159,159,159,0.2)",
  boxShadow: "1px 1px 3px black"
}
