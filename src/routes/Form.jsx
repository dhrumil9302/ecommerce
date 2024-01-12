import React from 'react';
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Form = () => {

  
  return (
    <>
    <div className='flex font-serif'>
    <div className='  ml-96 ' >
      <div className='my-10 '>
        <div className='flex gap-2'>
          <span className='text-3xl'><MdCall/></span>
          <h4 className='text-2xl'>Contat Details</h4>
        </div>
        <form class="w-full max-w-sm my-4">
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Name" />
          </div>
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Contact Number" />
          </div>
        </form>
      </div>
      <div >
        <div className='flex gap-2'>
          <span className='text-3xl'><FaLocationDot /></span>
          <h4 className='text-2xl'>Address</h4>
        </div>
        <form class="w-full max-w-sm my-4">
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="House no./Building Name" />
          </div>
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Road Name/ Area/ Colony" />
          </div>
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Pincode" />
          </div>
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="City" />
          </div>
        </form>
        <button className='bg-blue-400 rounded-lg p-1 my-6 mx-20'>Save Address And Continue</button>
      </div>
    </div>
    <div className='bg-gray-500 h-auto w-px my-10 ml-10'></div>
    <div className='ml-10 my-10'>
      <div>
        <h1 className=' text-2xl '>Payment</h1>
        <div className='my-5'><h2>Accepted Card</h2></div>
      </div>
      <form class="w-full max-w-sm my-4">
      
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Creadit Card Number" />
          </div>
          
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Exp. Month" />
          </div>
          <div class="flex items-center border-b border-gray-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Exp. Year" />
          </div>
        
        </form>
    </div>
    </div>
    </>
  )
}

export default Form