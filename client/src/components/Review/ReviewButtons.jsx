import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { useEffect, useState } from "react";



function ReviewButtons () {


    let moreHandler = () => {
        console.log("More Reviews Please!")
    }

    let showHideModal = () => {
        console.log("show me the modal!")
    }

    return (
        <div>
            <button
                title="More"
                onClick={moreHandler}
                type='button'
                style={indvButton}
                element="More Reviews Button"
                widget='Reviews'
            >
                MORE
            </button>
            <button
                title="Add"
                onClick={showHideModal}
                type='button'
                style={indvButton}
                element="Add Review Button"
                widget='Reviews'
            >
                ADD A Review +
            </button>
        </div>
    )
}

const buttons = {
    display: "flex",
    textAlign: "left",
    left: "18.5vw",
    width: "60vw",
    height: "75px",
    flexDirection: "row",
    marginLeft: "19vw",
    marginTop: "10px",
    marginBottom: "40px"
  }
  
  const indvButton = {
    fontWeight: "bold",
    maxWidth: "250px",
    margin: "10px",
    maxHeight: "75px",
    backgroundColor: "white",
    //border: "1px solid black",
    padding: "10px",
    boxShadow: "1px 1px 5px gray"
  }
  
export default ReviewButtons;