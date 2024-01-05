import React from 'react';
import Gift1 from "../assets/Gift_1.jpg";
import J2 from "../assets/g1.jpeg";
import J3 from "../assets/g2.jpeg";
import J4 from "../assets/g3.jpeg";
import { FaRegHeart } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";



const Gift = () => {
  return (
<>
    <div>
      <div>
        <img src={Gift1} />
      </div>
   
      <div className='px-2 font-serif m-8'>
            <div className="lg:w-auto sm:mx-10 lg:mx-10 md:grid grid-cols-4 gap-3 m-10  md:max-lg:mt-[-100px]  ">
                <div className='border border-black-1 hover:scale-105 duration-500 rounded-2xl'>
                <FaRegHeart  className='m-2 '/>
                    <img src={J2} alt="img" className="h-[18rem]  w-[25rem] lg:h-[15rem] rounded-lg  max-[768px]:h-[15rem] "/>
                        <div className=" bg-slate-200 rounded-b-xl">
                            <div className='ml-4'>
                             <p className="text-base">New Design</p>
                             <h3 className='flex '><FaIndianRupeeSign className='mt-1' />20,000</h3>
                                <h1 className="text-base  text-yellow-700  ">Small Design Rings</h1>
                                <button  onClick={() => alert("Cart not available yet")}
                            className="bg-black   text-white mb-4 px-5 py-[5px] rounded-full text-sm mt-2 lg:mt-3">Buy Now
                        </button>
                      </div>
                </div>
            </div>      
                 
                 
        </div>
        </div>
     
    </div>
    </>
  )
}



export default Gift