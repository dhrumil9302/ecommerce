import React, {useState} from 'react';
import Navbar from '../Component/Navbar';
import Product from '../Component/Product';
import Footer from '../Component/Footer';

const product = ({set, handleClick}) => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar  size={cart.length} />
      <Product handleClick={handleClick}/>
      <Footer />
    </div>
  )
}

export default product