import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

function stars() {

  const totalStars = 5;
  const active = 3.7; //REPLACE WITH VARIABLE FOR RATING NUMBER




  return (
    // Use linear-Gradient to fill the empty stars?

    <div style={emptyStars}>
      {[...new Array(totalStars)].map((arr, index) => {
        const activeStar = active;
        return (
          <div key={index+'outer'}>
            <div ><RiStarSLine /></div>
          <div key={index} style={filledStars}>
            <div>
              <div>
                {index + 1 <= Math.floor(activeStar) ? <RiStarSFill /> : null}
              </div>
            </div>
            <div>
              {index + 0.1 <= activeStar && index + 0.3 >= activeStar ?
                <div style={{ width: `${45}%`, overflow: "hidden", position: "relative" }}>
                  <RiStarSFill />
                </div> : null}
            </div>
            <div>
              {index + 0.4 <= activeStar && index + 0.6 >= activeStar ?
                <div style={{ width: `${50}%`, overflow: "hidden", position: "relative" }}>
                  <RiStarSFill />
                </div> : null}
            </div>
            <div>
              {index + 0.7 <= activeStar && index + 1 > activeStar ?
                <div style={{ width: `${55}%`, overflow: "hidden", position: "relative" }}>
                  <RiStarSFill />
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
  display: "inline-flex"
}

const filledStars = {
  position: "absolute",
  top: "0.1vh"
}


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






        // return (
        //   <div key={index} position="absolute">
        //     <div>
        //       <div>
        //         {index + 1 <= Math.floor(activeStar) || index + .8 < activeStar  ? <IoMdStar /> : null}
        //       </div>
        //     </div>
        //     <div>
        //       <div>
        //         {index >= Math.ceil(activeStar) ? <IoMdStarOutline /> : null}
        //       </div>
        //     </div>
        //     <div>
        //       <div >{index + 0.2 < activeStar &&  index + 0.8 > activeStar? <IoMdStarHalf /> : null}</div>
        //     </div>
        //   </div>
        // )