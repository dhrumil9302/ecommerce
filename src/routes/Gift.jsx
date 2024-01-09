import React from "react";
import { GiFleurDeLys } from "react-icons/gi";
import  logo  from "../assets/safe.png";

import { GiAnticlockwiseRotation } from "react-icons/gi";


const Gift = () => {
  return (
    <>
    <div div className="">
      <div className="shadow-md w-full   ">
        <div className=" bg-white dark:bg-gray-900 dark:text-white flex justify-between ">
          <div className="flex justify-between">
            <div className="text-4xl sm:text-5xl mx-2  flex my-4 ">
              <div className=" items-center  ">
                <GiFleurDeLys />
              </div>

              <div className="text-base  font-serif  mt-0 sm:mt-2">
                <span className="text-4xl  ">KD</span>
                <i className="text-xs md:text-base">jewellers</i>
              </div>
            </div>
          </div>
          <div>
            <img src={logo} className="w-16 my-2 mx-2"/>
          </div>
        </div>
      </div> 

      <div className="flex my-20 ml-7" >
        <div className="bg-gray-200 h-96 w-2/3   ">
          <div className="flex justify-between">
            <h2 className="ml-2 px-1 pt-4 font-serif">Shoppig Cart</h2>
            <h2 className="mr-2 py-4 pt-4 text-sm">4  Items</h2>
          </div>
          <div className=" flex px-2 justify-between bg-blue-400 text-white" >
              <h4>image</h4>
              <h4>Name</h4>
              <h4>Price</h4>
              <h4>Delete</h4>
          </div>
          <div className="bg-black h-px my-3"></div>
        </div>
        <div className="bg-gray-200 h-96 w-52 ml-5 ">
        <div>
          <h2 className="font-serif ml-2 px-1 pt-4">Order Summary</h2>
        </div>
        <div className=" my-3 flex px-2 justify-between bg-blue-400 text-white" >
              <h4>4 Items</h4>
             <h4>600.00</h4>
          </div>

          <div className="px-2">
            <h2 className="text-sx">Shipping</h2>
            <input type="text" placeholder="standard Deilivery"/>
              <h2 className="text-sx">Promo code</h2>
              <input type="text" placeholder="Enter your code"/>
              <button className="bg-black text-white text-sm m-2 w-20 rounded-lg" >Apply</button>
          </div>
          <div className="bg-black h-px my-3"></div>
          <div className="flex justify-between">
            <h2>Total</h2>
            <h2>600.00</h2>
          </div>
          <div>
            <button className="bg-blue-400 rounded-md w-full px-5 my-8">Check Out</button>
          </div>
      </div>
      </div>
    </div>
   

    </>
  );
};

export default Gift
