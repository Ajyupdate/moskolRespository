import React, { useState } from 'react'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import Cart from './Cart'
import formatCurrency from './util'


function Products({products, addToCart}) {
  // var firstThreeProduct = products.slice(0,3).map((product) => {
  //   return product 
  // })
  var lastThreeProduct = products.slice(2,5).map((product) => {
    return product 
  })

  const [product, setProduct] = useState(null)
  const [cartModal, setCartModal] = useState(null)
  
  const openModal = (product) =>{
    setProduct(product)
  }  
  const closeModal = () =>{
    setProduct( null);
  }  
  const closeOrder = () =>{
    setCartModal( null);
  }  
  
  const createOrder = (product) =>{
    //(product.title + " has been added to your cart" )
    setCartModal(product)
  }
  
  return (
    <div className="product">
      

      <ul className='second-section'>
        {lastThreeProduct.map((product) => (
          <li key={product._id}>
            <div className={product.title+'product'}>
              <img src={product.image}  alt="product"/>
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button className='second-section-button' onClick={() => openModal(product)}>
                  See Product
                </button>
              </div>
            </div>

          </li>
        ))}
      </ul>


      {/* <ul className='before-footer'>
        {lastThreeProduct.map((product) => (
          <li key={product._id}>
            <div className={product.title+'card'}>
              <img src={product.image}  alt="product"/>
              <div className={product.title+'title'}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button className='' onClick={() => openModal(product)}>
                  See Product
                </button>
              </div>
            </div>

          </li>
        ))}
      </ul> */}

      {product && (
        <Modal  isOpen={true} onRequestClose={closeModal}>
            <Zoom >
                <button className='close-modal' onClick={closeModal}>
                    X
                </button>
                <div className='product-details'>
                    <img src={product.image} alt={product.title}></img>
                    <div >
                        <p>
                            <strong>{product.title}</strong>
                        </p>
                        <p>{product.description}</p>
                        <p>
                            Available Sizes: {" "}
                            {product.availableSizes.map((x) =>(
                                <span >
                                    {" "}
                                    <button className='button'>{x}</button>
                                </span>
                            ))}
                        </p>
                        <div className='product-price'>
                            <div>{formatCurrency(product.price)}</div>
                            <button className='button primary'
                                onClick={() => {
                                  console.log(product)
                                    addToCart(product);
                                    createOrder(product)
                                    closeModal();
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </Modal>
    )}
    
    {cartModal && (
      <Modal  isOpen={true} onRequestClose={closeOrder}>
      <Zoom >
          <button className='close-modal' onClick={closeOrder}>
              X
          </button>
          <h2>Your order has been added to your cart check it out here</h2>
          {/* <Cart/>  */}
         
      </Zoom>
      </Modal>

    )}
      


    </div>  
  )
}

export default Products