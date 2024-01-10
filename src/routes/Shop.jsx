import React from 'react';
import Navbar from '../Component/Navbar';
import Product from '../Component/Product';
import Footer from '../Component/Footer';

const product = ({set, handleClick}) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Product handleClick={handleClick}/>
      <Footer />
    </div>
  )
}

export default product