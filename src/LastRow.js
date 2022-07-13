import React from 'react'

function LastRow({products}) {
    var productNine = products.slice(8,9).map((product) => {
        return product
    })
  return (
    <div>
        
        {productNine.map((product) => (
            <div className='lastProduct' key={product._id}>
                
                <div>
                    <h2>THE CHEAPEST AND SAFEST WAY TO ELECTRICITY</h2>
                    <p>{product.description}</p>
                </div>
                <img src={product.image} alt="product"/>
            </div>
        ))}
      
    </div>
  )
}

export default LastRow