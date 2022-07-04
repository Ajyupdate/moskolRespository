import React, { useState } from 'react'
import { Fade } from 'react-reveal'
//import { useHistory } from 'react-router-dom'
import formatCurrency from './util'


function Cart({cartItems, createOrder, removeFromCart}) {

    const [showCheckout, setShowCheckOut] = useState(false)
    const [name, setName] = useState("")
    
    const email = ""
    const address = ""

    //const history = useHistory()
    const handleInput = (e) =>{
        setName(e.target.value)
    }

    const createOrderr = (e) =>{
        console.log(e.target.value)
        const order =  {
            name: name,
            email: email,
            address: address,
            cartItems: cartItems
        }
        createOrder(order)
    }
    return (
      <div className='cart'>
        {cartItems.length === 0 ? (
            <div className='cart cart-header'>Cart is empty</div>
        ) : (
            <div className='cart cart-header'>
                You have {cartItems.length} in the cart {" "}
            </div>
        )
        }

          <div>
            <div>
                <ul className='cart-items'>
                    {cartItems.map((item) =>(
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt={item.title}></img>
                            </div>
                            <div>
                                
                                <div className='right'>
                                {formatCurrency(item.price)} x {item.count} {" "}
                                    <button className='button' onClick={() =>removeFromCart(item)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>  

            {cartItems.length !== 0 && (
                <div>
                    <div>
                        <div className='cart'>
                            <div className='total'>
                                <div>
                                    Total: {}
                                    {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                                </div>
                                <button
                                onClick={() => {
                                    setShowCheckOut(true)
                                }} className="button primary">
                                    Proceed
                                </button>
                            </div>
                        </div>

                        {showCheckout && (
                            <Fade right cascade>
                                <div className='cart'>
                                    <form onSubmit={createOrderr}>
                                        <ul className='form-container'>
                                            <li>
                                                <label>Email</label>
                                                <input name='email' type='email' required onChange={handleInput}></input>
                                            </li>

                                            <li>
                                                <label>Name</label>
                                                <input name='name' type='text' required onChange={handleInput}></input>
                                            </li>

                                            <li>
                                                <label>Address</label>
                                                <input name='address' type='text' required onChange={handleInput}></input>
                                            </li>

                                            <button className='button primary' type='submit'>Checkout</button>
                                        </ul>
                                    </form>
                                </div>
                            </Fade>
                        )}
                    </div>
                </div>
            )}          
          </div> 
      </div>
    )
}

export default Cart
