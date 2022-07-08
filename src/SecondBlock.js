import React from 'react'

function SecondBlock({addToCart, products}) {
    var firstThreeProduct = products.slice(0,3).map((product) => {
        return product 
      })
  return (
    <div className='secondBlock'>
        <div className='secondBlockList'>
          {firstThreeProduct.map((product) =>(
            <li key={product._id}>
              <div className='indivialSecondBlock'>
                <a href={product.title}>
                  <img src={product.image} alt="product list"/>
                  <div className="title-and-shop">
                    <h3>{product.title}</h3>
                    <h3 onClick={() => addToCart(product)}>shop <span className='shop'><b>&gt;</b></span></h3>
                  </div>
                  
                </a>
                
              </div>
            </li>
              
          ))}  

      </div>

    </div>
  )
}

export default SecondBlock