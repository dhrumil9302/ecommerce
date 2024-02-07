import React, {useState} from 'react'
import Navbar  from './Navbar';
import Footer from './Footer';
import { useParams } from "react-router-dom";


const ProductDetails = ({ data, handleClick }) => {
  const [cart, setCart] = useState([]);
  
  console.log(data);
  const { productId } = useParams();
  console.log(productId);
  const Product = data.find((item) => item.id === parseInt(productId));
  if (!Product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar size={cart.length}/>
      <div>
        <div>
          <img  src={Product?.img} alt=""/>
        </div>
        
      </div>
 

      <Footer/> 
    </>
  )
}

export default ProductDetails