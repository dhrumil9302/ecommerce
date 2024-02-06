import React, {useState} from 'react'
import Navbar  from '../Component/Navbar';
import Footer from './Footer';
import { useParams } from "react-router-dom";


const Productdtails = () => {
  const [cart, setCart] = useState([]);
  const Productdtails = ({ data, handleClick }) => {
    console.log(data);
    const { productId } = useParams();
    console.log(productId);
    const product = data.find((item) => item.id === parseInt(productId));
    if (!product) {
      return <div>Product not found</div>;
    }
  return (
    <>
      <Navbar size={cart.length}/>
    <div className="grid grid-cols-2 my-[100px]">
      <div className="mx-[40px]">
        <img src={product?.img} alt="" className="w-[300px] h-[400px]" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          {product?.title} ,{product?.description}
        </h1>
        <p className="text-xl font-semibold my-4"> ₹{product?.price}</p>
        <div className="flex my-5">
          <div className="flex">
            <div className="font-semibold">Specifications:</div>
            <div className="mx-4 w-52">
              <ul>
                <li>Camera: {product.specifications.camera}</li>
                <li>RAM: {product.specifications.ram}</li>
                <li>Display: {product.specifications.display}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <p>Highlights:</p>
          <div className="mx-12 w-70">
            <p>RAM: {product.Highlights.RM}</p>
            <p>Display: {product.Highlights.dis}</p>
            <p>Battery: {product.Highlights.battery}</p>
          </div>
        </div>
        <div className="flex my-4">
          <p>Features:</p>
          <p className="mx-[60px] w-100">{product.features}</p>
        </div>
        <div className="flex gap-8">
          <button
            onClick={() => handleClick(product)}
            className="bg-black text-white w-[200px] h-[40px] my-6 font-semibold hover:text-black hover:bg-white hover:border border-black"
          >
            Add to Cart
          </button>
          <button className="bg-black text-white w-[200px] h-[40px] my-6 font-semibold hover:text-black hover:bg-white hover:border border-black">
            Buy Now
          </button>
        </div>
      </div>
    </div>
 

      <Footer/> 
    </>
  )
}

export default ProductDetails