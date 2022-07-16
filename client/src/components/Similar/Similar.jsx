import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
// import { test } from "../../Features/test.js"


// remove from final product

function Similar () {

  // return (
  //   <div>
  //     <p>Similar Products</p>
  //   </div>
  // )
  const dispatch = useDispatch();
  // const requests = () => {
  //   axios.get("http://localhost:3000/products")
  //   .then((success) => {
  //     console.log("success", success)
  //     dispatch(addProduct(success.data))
  //   })
  //   .catch((error) => {
  //     console.log("error", error)
  //   })
  // }
  //   return(
  //   <div>
  //     <p>Similar Products</p>
  //     <button onClick = {() => {
  //       requests();
  //     }}>Test Click</button>
  //   </div>
  //   )

  return (
    <div>
      {/* <p>Similar Products</p>
      <button onClick = {() => {
        dispatch(test(4))
      }}>Test Click</button> */}
    </div>
  )

}








export default Similar