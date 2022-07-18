import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SizeSelector from './SizeSelector.jsx';
import { setCurrentSkus } from '../../../Features/Styles.js';
import _, { each } from 'underscore';


function AddCart () {
  const dispatch = useDispatch();
  const styleList = useSelector((state) => state.stylesList.styles.results)
  // console.log('Style\'s List', styleList)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  // console.log('Current Style', currentStyle)
  const currentSkus = useSelector((state) => state.stylesList.currentSkus)
  const [size, setSize] = useState({size: undefined, quantity: undefined});
  const [availableSizes, setAvailableSizes] = useState([])

  console.log('test for Sizes', size)
  console.log('test for Available Sizes', availableSizes)

  useEffect(() => {
    if (styleList) {
      var skus = styleList[currentStyle].skus
      dispatch(setCurrentSkus(skus))
    }
  }, [styleList]);

  // useEffect(() => {
  //   setAvailableSizes([])
  //   _.each(currentSkus, function(value, key, list){
  //     setAvailableSizes((availableSizes) => [...availableSizes, value.size]);
  //   })
  //   console.log("USE EFFECT TEST", currentSkus)
  // }, [currentSkus])





  return (
    <div>
      <span>
        <SizeSelector sizeState={{size: [size, setSize]}} availableSizesState={{availableSizes: [availableSizes, setAvailableSizes]}}/>
      </span>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>

  )
}

export default AddCart