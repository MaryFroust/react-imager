import React from 'react'

function Display({src}) {
  return (
    <div style={{ justifyContent: 'center',  paddingLeft: '225px' }}>
    <img style={{width: '400px', height: '25%', border: '10px solid rgb(242, 7, 117)'}}src={src} alt="" />
    </div>
  )
}

export default Display

// width:'80%', height: '30%', border: '3px solid black',marginTop: '5%'

// padding: '10px' ,