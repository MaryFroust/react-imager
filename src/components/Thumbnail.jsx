import React from 'react'

function Thumbnail({src, index, currentImage, displayHandler}) {
  return (
    <div className='thumbnail'>
        <img src={src} alt="" onClick={()=> displayHandler(index)} style= {{border: index === currentImage ? 'white 2px solid': ""}} />
    </div>
  )
}



export default Thumbnail