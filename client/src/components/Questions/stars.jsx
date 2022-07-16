import React from "react";
// import { RiStarSFill } from "react-icons/ri";
// import { RiStarSLine } from "react-icons/ri";
// import { RiStarHalfFill } from "react-icons/ri";

import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

function stars() {

  const totalStars = 5;
  const active = 1.6; //REPLACE WITH VARIABLE FOR RATING NUMBER

  const style = {
    display: "inline-flex",
    position: "relative",
    textAlign: "left"
  }

  return (
    // Use linear-Gradient to fill the empty stars?

    <div style={style}>
      {[...new Array(totalStars)].map((arr, index) => {
        const activeStar = active;
        // const emptyStar = activeStar === -1 || activeStar < index + 1;
        return (
          <div key={index} position="absolute">
            <div>
              <div>
                {index + 1 <= Math.floor(activeStar) || index + .8 < activeStar  ? <IoMdStar /> : null}
              </div>
            </div>
            <div>
              <div>
                {index >= Math.ceil(activeStar) ? <IoMdStarOutline /> : null}
              </div>
            </div>
            <div>
              <div >{index + 0.2 < activeStar &&  index + 0.8 > activeStar? <IoMdStarHalf /> : null}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default stars;




        // return (
        //   <div key={index} position="absolute">
        //     <div>
        //       <div>
        //         {index + 1 <= Math.floor(activeStar) ? <RiStarSFill /> : null}
        //       </div>
        //     </div>
        //     <div>
        //       <div >{index >= activeStar ? <RiStarSLine /> : null}</div>
        //     </div>
        //     <div>
        //       {index + 0.1 <= activeStar && index + 0.3 >= activeStar ?
        //         <div style={{ width: `${35}%`, overflow: "hidden", position: "relative" }}>
        //           <RiStarSFill />
        //         </div> : null}
        //     </div>
        //     <div>
        //       {index + 0.4 <= activeStar && index + 0.6 >= activeStar ?
        //         <div style={{ width: `${50}%`, overflow: "hidden", position: "relative" }}>
        //           <RiStarSFill />
        //         </div> : null}
        //     </div>
        //     <div>
        //       {index + 0.7 <= activeStar && index + 1 > activeStar ?
        //         <div style={{ width: `${70}%`, overflow: "hidden", position: "relative" }}>
        //           <RiStarSFill />
        //         </div> : null}
        //     </div>
        //   </div>
        // )