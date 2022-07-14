import React from "react";
import { RiStarSFill } from "react-icons/ri"
import { RiStarSLine } from "react-icons/ri"

function stars() {

  const totalStars = 5;
  const active = 1; //REPLACE WITH VARIABLE FOR RATING NUMBER

  const style = {
    display: "inline-flex",
    position: "relative",
    textAlign: "left"
  }

  return (
    <div style={style}>
      {[...new Array(totalStars)].map((arr, index) => {
        const activeStar = active;
        const emptyStar = activeStar === -1 || activeStar < index + 1;
        //const highestIndex = Math.floor(activeStar) === index + 1;
        // const showRating = highestIndex;

        return (
          <div key={index} position="realtive">
            <div style={{ width: `${0}%`, overflow: "hidden", position: "absolute" }}>
              <RiStarSFill />
            </div>
            <div>
              <div>{emptyStar ? <RiStarSLine /> : <RiStarSFill />}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default stars;