import React, { useState, useEffect } from "react";
import { GiFleurDeLys } from "react-icons/gi";

import { GiAnticlockwiseRotation } from "react-icons/gi";
import { Link } from "react-router-dom";

const Gift = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.Price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d; 

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr]);
  };

  return (
    <>
      <div className="flex  ">
        <div className=" w-full md:w-10/12 lg:w-10/12 lg:mx-20 lg:my-10 md:mx-20 md:my-10  ">
          <div className="text-center">
            <h2 className=" py-8 text-3xl font-serif">Shoppig Cart</h2>
          </div>
          <div className="bg-black h-px my-3 block sm:hidden"></div>
          <div className=" bg-blue-400 hidden sm:block ">
            <div className=" grid grid-cols-5  mx-12   md:mx-10 justify-between text-white">
              <h4>image</h4>
              <h4>Name</h4>
              <h4>Quantity</h4>
              <h4>Price</h4>
              <h4>Delete</h4>
            </div>
          </div>

          {cart.map((item) => (
            <div key={item.id} >
              <div className="grid grid-cols-1 sm:grid-cols-5 mx-28 lg:mx-10 md:mx-8 items-center text-black font-serif ">
                <div>
                  <img
                    src={item.img}
                    alt={item.id}
                    className="h-20 w-20 my-2 rounded-full border border-black"/>
                </div>

                <div >
                  <p className="my-2 ">{item.Title}</p>
                </div>
                <div className="my-2 ">
                  <button
                    onClick={() => handleChange(item, +1)}
                    className="border border-black rounded-lg w-6 mx-1 "
                  >
                    +
                  </button>
                  <button className="border border-black rounded-lg w-6 mx-1 ">
                    {item.amount}
                  </button>
                  <button
                    onClick={() => handleChange(item, -1)}
                    className="border border-black rounded-lg w-6 mx-1"
                  >
                    -
                  </button>
                </div>
                <div className="my-2">
                  <span>{item.Price}</span>
                </div>
                
                <div className="my-2">
                  <span
                    onClick={() => handleRemove(item.id)}
                    className="broder border-black  bg-gray-400
                   rounded-xl p-2"
                  >
                    Remove
                  </span>
                </div>
              </div>
              <div className="bg-black h-px my-3"></div>
            </div>
          ))}

          <div className=" font-serif px-10 lg:px-0 md:px-0 flex flex-col md:flex-row lg:flex-row">
            <span className="">Total Price of Your Cart</span>
            <span className="md:mx-[30%] lg:mx-[34%] xl:mx-[40%] ">Rs-{price}</span>
          </div>
          <div>
            <Link to="/Form">
          <button className="font-serif ml-24 my-5  md:ml-60 md:my-10 lg:ml-[50%] lg:my-10 bg-blue-400 p-2 rounded-xl text-white ">
           Check Out </button></Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Gift;
