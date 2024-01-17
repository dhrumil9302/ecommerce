import React, { useState, useEffect } from "react";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import p1   from "../assets/cards.png";
import { FaBagShopping } from "react-icons/fa6";

const Form = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    if (cart && Array.isArray(cart) && cart.length > 0) {
      ans = cart.reduce((total, item) => total + item.amount * item.Price, 0);
    }
    setPrice(ans);
  };
  
  useEffect(() => {
    handlePrice();
  });

  return (
    <>
    <div className='bg-slate-200 m-10 font-serif '>
      <div className='flex justify-between lg:mx-48 md:mx-40   flex-col lg:flex-row md:flex-row'>   
        <div className='my-10 xl:my-20 '>
        <div className='flex gap-2'>
          <span className='text-3xl'><MdCall/></span>
          <h4 className='text-2xl xl:text-4xl md:text-xl'>Contat Details</h4>
        </div>
        <form className="w-full max-w-sm my-4">
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Name" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Email Id" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Contact Number" />
          </div>
        </form>
      </div>
      <div className='bg-gray-400 h-auto w-px my-10 mr-10 ml-10 xl:ml-20  hidden sm:block'></div>
      <div className='my-6' >
        <div className='flex gap-2 my-5  '>
          <span className='text-3xl'><FaLocationDot /></span>
          <h4 className='text-2xl xl:text-4xl md:text-xl'>Address</h4>
        </div>
        <form className="w-full max-w-sm my-4">
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="House no./Building Name" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Road Name/ Area/ Colony" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Pincode" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="City" />
          </div>
        </form>
        </div>
        
      </div>
      <button className='bg-blue-400 rounded-lg p-1 my-6 mx-20 md:mx-72 lg:mx-[43%] xl:mx-[42%] xl:my-10 xl:text-xl font-serif'>Save & Continue </button>
    </div>

    <div className='bg-slate-200 m-10'>
    <div className=' font-serif flex flex-col px-6 lg:flex-row md:flex-row '>
    <div className='  lg:ml-48 md:ml-20 xl:ml-96' >

        <div className='my-10 xl:my-20 '>
        <div >
          <span className='text-3xl md:text-xl flex gap-2'><FaBagShopping /> <h4 className='text-2xl xl:text-4xl md:text-xl'>Orders</h4>
         </span>
         <div className="my-10">
          {cart?.map((item, index) =>(          
          <div key={index} className="flex justify-between">
             <div >
                  <p className="my-2 ">{item.Title}</p>
                </div>
            <h1 className="my-2">{item.Price}</h1>
          </div>
))}


         </div>
      
         <div className='bg-gray-500 h-px w-60 my-5 hidden sm:block'></div>
         
          <div className=" font-serif px-10 lg:px-0 md:px-0 flex flex-col md:flex-row lg:flex-row my-5">
            <span className="">Total</span>
            <span className="md:mx-[30%] lg:mx-[34%] xl:mx-[40%] ">Rs-{price}</span>
          </div>
          
        </div>
      
      </div>
    
    </div>
    <div className='bg-gray-500 h-auto w-px my-10 ml-10 xl:ml-20 hidden sm:block'></div>
    <div className='lg:ml-10 md:ml-10 my-10 '>
      <div className='xl:my-12'>
        <h1 className=' text-2xl xl:text-4xl md:text-xl'>Payment</h1>
        <div className='my-5 xl:text-2xl xl:my-8'><h2>Accepted Card</h2></div>
      </div>
      <div><img src={p1} className='w-42 lg:w-72 xl:w-96'/></div>
      <form className="w-full max-w-sm my-4">
      
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Creadit Card Number" />
          </div>
          
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Exp. Month" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Exp. Year" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="CVV" />
          </div>
        
        </form>
    </div>
    </div>
   
    <div className='block sm:hidden mx-6 '> <input type="checkbox"/>
  <label >Shipping address sama as  billing</label></div>
    <button className='bg-blue-400 rounded-lg p-1 my-6 mx-20 md:mx-72 lg:mx-[40%] xl:mx-[42%] xl:my-10 xl:text-xl font-serif'>Make Paymet</button>
    </div>
    
    </>
  )
}

export default Form