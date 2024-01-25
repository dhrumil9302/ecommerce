import React from 'react';
import J2 from "../assets/j19.jpg";
import Footer from './Footer';
import { FaRegHeart } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Productdtails = () => {
  return (
    <>
      <div className='bg-gray-800 flex m-10 px-20 p-10 font-serif text-white rounded-xl'>
        <img src={J2}  className='w-[40%] lg:w-[40%] lg:h-[20%] lg:mt-6'/>
        <div className='mx-20 '>
          <div>
         
          <div>
            <h1 className='text-3xl my-4' >Flower Gold Simple Ring</h1>
            <div className='h-px bg-white'></div>
            <h4  className='text-base my-2'>Be a sight to behold when you adorn the dainty radiance of this ring crafted in 22 karat gold, studded with diamonds. </h4>
           
                  <div className="my-4 flex ">
                     <FaRegHeart className="m-1  size-6" />
                  <p className="flex text-2xl mx-6">
                    <FaIndianRupeeSign className="mt-1" />17000
                  </p>
                  
                  <button
                   
                    className="border border-white rounded-lg w-6 mx-1 "
                  >
                    +
                  </button>
                  <button className="border border-white rounded-lg w-6 mx-1 ">
                  
                  </button>
                  <button
                    
                    className="border border-white rounded-lg w-6 mx-1"
                  >
                    -
                  </button>
                </div>
                <div >
              <button className='bg-white text-black px-4 text-lg rounded-md '>Add to Cart</button>
              <button className='bg-white text-black px-4 text-lg rounded-md m-3'>Buy Now</button>
            </div>
                  {/* <div className='h-px bg-white my-8'></div> */}
                  <div>
                  <h1 className='text-3xl mt-20 ' >
                    Product Details
                  </h1>
                  <hr/>
                  <p className='my-2 text-md'>Inspired by a dainty flower, this ring radiates timeless beauty like no other. The union of blushing rose gold and sparkling diamonds makes this piece a sight to behold.</p>
                  </div>
                  <h2 className='font-bold mt-4'>Specificstion</h2>
                  <h3>Brand:MD</h3>
                  <h3>Colection: Bestsellers</h3>
                  <h3>Gender:Women</h3>
                  <h3>Karatage:22</h3>
           
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Productdtails