import React, { useState, useEffect } from "react";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import p1   from "../assets/cards.png";
import { FaBagShopping } from "react-icons/fa6";
import swal from 'sweetalert2'

const Form = ({ cart, setCart, handleSubmit }) => {
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

  const handleClick = () => {
   
    swal.fire({
      title: 'Your Payment was Successfull',
      text: 'Thank you for your payment be in contact with more details shortly',
      icon: 'succes',
      confirmButtonText: 'Done'
    })
   
  }
  return (
    <>
    <div className='bg-slate-100 m-10 font-serif '>
      <div className='flex justify-between lg:mx-48 md:mx-40   flex-col lg:flex-row md:flex-row'>   
        <div className='my-10 xl:my-20 px-4'>
        <div className='flex gap-2'>
          <span className='text-3xl'><MdCall/></span>
          <h4 className='text-2xl xl:text-4xl md:text-xl'>Contat Details</h4>
        </div>
        <form className="w-full max-w-sm my-4"  >
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  placeholder="Name" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  placeholder="Email Id" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"  placeholder="Contact Number" />
          </div>
        </form>
      </div>
      <div className='bg-gray-400 h-auto w-px my-10   ml-10 xl:ml-px  hidden sm:block'></div>
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
      <button  className='bg-blue-400 rounded-lg p-1 my-6 mx-20 md:mx-72 lg:mx-[43%] xl:mx-[42%] xl:my-10 xl:text-xl font-serif'>Save & Continue </button>
    </div>

    <div className='bg-slate-100 m-10 font-serif px-4 '>
      <div className='flex justify-between lg:mx-48 md:mx-40   flex-col lg:flex-row md:flex-row'>   
        <div className='my-10 xl:my-20 '>
        <div className='flex gap-2'>
          <span className='text-3xl'><FaBagShopping /></span>
          <h4 className='text-2xl xl:text-4xl md:text-xl'>Orders</h4>
        </div>
        <div className="my-10 ">
          {cart?.map((item, index) =>(          
          <div key={index} className="flex justify-between gap-20">
             <div >
                  <p className="my-2 ">{item.Title}</p>
                </div>
            <h1 className="my-2">{item.Price}</h1>
          </div>
          ))}
         </div>
         <div className='bg-gray-500 h-px w-60 my-5 hidden sm:block'></div>
          <div className=" font-serif px-10 lg:px-0 md:px-0 flex flex-col md:flex-row lg:flex-row my-5 gap-28">
            <span className=" hidden sm:block">Total</span>
            <span className="">Rs-{price}</span>
          </div>

         
      </div>
      <div className='bg-gray-400 h-auto w-px my-10 mr-10 ml-10 xl:ml-60  hidden sm:block'></div>
      <div className='my-6' >
        <div className=' gap-2 my-5  '>
          <span className='text-2xl'>Payment</span>
          <h4 className='text-2xl xl:text-2xl md:text-xl my-4'>Accepted Card</h4>
         <div><img src={p1} className='w-42 lg:w-72 xl:w-96'/></div>
     
        </div>
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
      <button onClick={handleClick} className='bg-blue-400 rounded-lg p-1 my-6 mx-20 md:mx-72 lg:mx-[43%] xl:mx-[42%] xl:my-10 xl:text-xl font-serif'>Make Payment</button>
    </div>




    
    </>
  )
}

export default Form