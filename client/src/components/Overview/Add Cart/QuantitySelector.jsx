import React from 'react';

function QuantitySelector (props) {
  console.log('quantity', props.quantity)

  return (props.quantity ? <select>
    <option>
      {props.quantity}
    </option>
    </select>
   : <select>
   </select>)
}

// {styleList.map((style, index) => {
//   return <StyleThumbnail key={'StyleThumbnail-' + index} style={style} styleNumber={index}/>
// })}


export default QuantitySelector;