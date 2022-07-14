
import Header from './Header';
import data from './data.json'
import Products from './Products';
import Cart from './Cart';
import { useState } from 'react';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cctv from './Cctv';
import Inverters from './Inverters'
import Batteries from './Batteries';
import SecondBlock from './SecondBlock';

import LastRow from './LastRow';
import Nav from './Nav';




function App() {
  
  const products = data.products
  //const [products, setProduct] = useState(data.products)
  const  [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])

  function removeFromCart(product){
    const cartItemss = cartItems.slice()
    setCartItems(
      cartItems.filter((x) => x._id !== product._id)
    )
    //setCartItems(cartItemss.filter((x) => x._id !== product._id))
    localStorage.setItem("cartItems", JSON.stringify(cartItemss.filter((x) => x._id !== product._id)))
  }
 
  const addToCart = (product) => {
    
      const cartItemss = cartItems.slice()
      // console.log(cartItems)
     
    let alreadyInCart = false;
    cartItemss.forEach((item) =>{
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItemss.push({...product, count: 1})
    }
    setCartItems(cartItemss)
    localStorage.setItem("cartItems", JSON.stringify(cartItemss))
  }
  const createOrder = (order) => {
    alert("Need to save for " + order.name)


    window.location.href = "/";
  }
  
  
  

  return (
    <Router>
    <div className="App" > 
    {/* <Nav/> */}
      <header>
        <Nav/>
        <Switch> 
        {/* <Filter filterProducts={filterProducts} sortProducts={sortProducts} size={size} sort={sort} count={products.length}/> */}
        <Route exact path="/"> 
          <Header products={products} addToCart={addToCart}/>
          <SecondBlock products={products} addToCart={addToCart}/>
        
        <Products products={products} addToCart={addToCart}/>
       
        <LastRow products={products}/>
        
        <Footer/>
        </Route> 

        <Route path='/cart'>
          <Cart createOrder={createOrder} removeFromCart={removeFromCart} cartItems={cartItems}/>    
        </Route>

        <Route path='/cctv'>
          <Cctv products={products}/>    
        </Route>
        
        <Route path='/inverters'>
          <Inverters products={products}/>
        </Route>

        <Route path='/batteries'>
          <Batteries products={products}/>
        </Route>
        
        
        </Switch> 
        
      </header> 
      
      
    </div>
    </Router>
  );
}

export default App;
