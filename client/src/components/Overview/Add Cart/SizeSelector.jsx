import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QuantitySelector from './QuantitySelector.jsx';
import _, { each } from 'underscore';

function SizeSelector (props) {
  //setting the passed down useState props
  const { size: [size, setSize] } = {
    size: useState({size: undefined, quantity: undefined}), ...(props.sizeState || {})
  };
  const { availableSizes: [availableSizes, setAvailableSizes]} = {
    availableSizes: useState([]), ...(props.availableSizesState || [])
  };

  const [showText, setShowText] = useState(true);
  const [state, setState] = useState(0);
  const currentSkus = useSelector ((state) => state.stylesList.currentSkus);
  var ready = false;
  // console.log(currentSkus);

  const sizeListener = (event) => {
    var updatedSize = event.target.value
    _.each(currentSkus, function(value, key, list){
      if (value.size === updatedSize) {
        setSize({...size, size: updatedSize, quantity: currentSkus[key].quantity})
        setShowText(false);
      }
    })
  }

  const onClickRequest = (event) => {
    // console.log(availableSizes)
    if (availableSizes.length > 0) {
      ready = true
    }
    setState(1)
    // console.log(ready)
  }

  const checker = (event) => {
    console.log(size);
    console.log(availableSizes);
  }

  useEffect(() => {
    setAvailableSizes([])
    _.each(currentSkus, function(value, key, list){
      setAvailableSizes((availableSizes) => [...availableSizes, value.size]);
    })
  }, [currentSkus]);

  return (
    <div>
      <select name={currentSkus} value={size.size} onChange={sizeListener}>
        <option value='Select Size'>Select Size</option>
        {availableSizes.map((size, index) => {
          return <option key={"key" + index} value={size}>{size}</option>
        })}
      </select>
    <QuantitySelector sizeState={{size: [size, setSize]}}/>
    <button onClick={checker}>test Click</button>
    </div>
  )

}

export default SizeSelector;