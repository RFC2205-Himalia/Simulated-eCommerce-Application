import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

function stars() {

  const totalStars = 5;
  const active = 3.8; //REPLACE WITH VARIABLE FOR RATING NUMBER

  return (
    // Use linear-Gradient to fill the empty stars?

    <div style={emptyStars}>
      {[...new Array(totalStars)].map((arr, index) => {
        const activeStar = active;
        return (
          <div key={index+'outer'}>
            <div ><IoMdStarOutline size={35}/></div>
          <div key={index} style={filledStars}>
            <div>
              <div>
                {index + 1 <= Math.floor(activeStar) ? <IoMdStar size={35}/> : null}
              </div>
            </div>
            <div>
              {index + 0.1 <= activeStar && index + 0.3 >= activeStar ?
                <div style={{ width: `${42}%`, overflow: "hidden", position: "relative" }}>
                  <IoMdStar size={35}/>
                </div> : null}
            </div>
            <div>
              {index + 0.4 <= activeStar && index + 0.6 >= activeStar ?
                <div style={{ width: `${50}%`, overflow: "hidden", position: "relative" }}>
                  <IoMdStar size={35}/>
                </div> : null}
            </div>
            <div>
              {index + 0.7 <= activeStar && index + 1 > activeStar ?
                <div style={{ width: `${55}%`, overflow: "hidden", position: "relative" }}>
                  <IoMdStar size={35}/>
                </div> : null}
            </div>
          </div>
        </div>
        )
      })}
    </div>

  )
}

export default stars;

const emptyStars = {
  position: "fixed",
  display: "inline-flex",
}

const filledStars = {
  position: "absolute",
  top: "0.1vh",
}