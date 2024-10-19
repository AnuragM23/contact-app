import React from 'react'
import loading from "../../assets/loading.gif"

function Spinner() {
  return (
    <div>
        <img src={loading} alt="" className='d-block m-auto' style={{width: '200px'}} />
    </div>
  )
}

export default Spinner