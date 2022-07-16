import React from 'react'
import { useSelector } from 'react-redux';
import SizeSelector from './SizeSelector.jsx';


function AddCart () {
  const styleList = useSelector((state) => state.stylesList.styles.results)
  console.log('Style\'s List', styleList)
  const currentStyle = useSelector((state) => state.stylesList.currentStyle)
  console.log('Current Style', currentStyle)

  if (styleList) {
    var skus = styleList[currentStyle].skus
    console.log('SKUs', skus);
  }

  // const onClick = (event) => {
  //   console.log(event.target)
  // }


  return (
    <div>
      <span>
        <SizeSelector skus={skus}/>
      </span>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>

  )
}

export default AddCart