import React from 'react'
import Template from "./Template";

function Batteries({products}) {
    
  return (
    <div className='cctv'>
    
        <Template products={products} title="Battery"/>
    </div>
  )
}

export default Batteries