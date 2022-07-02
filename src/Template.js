
import { Link } from "react-router-dom";

function Template({products, title}) {

    const filteredProduct = products.filter((product) => product.title === title)
    
    
    
  return (
    <div>
         <p><Link to="/">Go back</Link></p> 
         <p>New Product</p>
            
            {filteredProduct.map((cctvProduct) =>(
                <div key={cctvProduct._id}>
                    <div><img src={cctvProduct.image}  alt='products'/> </div>
                    <div>
                        <p>New Product</p>
                        <h2>{cctvProduct.title}</h2>
                        <p>{cctvProduct.description}</p>
                        <button>1</button> <button>Add To Cart</button>
                    </div>
                
                </div>
                
            ))}
          
    </div>
  )
  
}

export default Template