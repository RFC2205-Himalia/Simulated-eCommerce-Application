import React from 'react';
import { useState } from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import _, { each } from 'underscore';

function SizeSelector (props) {
  const [size, setSize] = useState({size: null, quantity: null});
  //console.log(props.skus);

  const sizeListener = (event) => {
    var updatedSize = event.target.value
    _.each(props.skus, function(value, key, list){
      if (value.size === updatedSize) {
        setSize({...size, size: updatedSize, quantity: props.skus[key].quantity})
      }
    })
  }

  const checker = (event) => {
    console.log(size);
  }

  return (
    <div>
      <label>
        <select value={size.size} onChange={sizeListener}>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </label>
      <QuantitySelector quantity={size.quantity}/>
      <button onClick={checker}>test Click</button>
    </div>
  )
}

export default SizeSelector;