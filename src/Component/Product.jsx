import React,  { useState} from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import {ProductData1} from "./data";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

const Product = ({ handleClick }) => {

  const [id,Title,img,Price] = ProductData1

  const [detail,setDetail] = useState([]);
  const [close, setClose] = useState(false)
  const detailPage = (Product) =>
  {
    setDetail([{...Product}])
    setClose(true)
  }

  return (
    <>
    
    {close ?
    <div >
      {
        detail.map((x) =>
        {
          return(
            <div className="bg-gray-100 w-[860px] h-[480px] xl:w-[1400px] xl:h-[540px] mx-20 xl:mx-10  rounded-lg absolute z-1  ">
             <button onClick={() => setClose(false)} className=" text-2xl m-3 cursor-pointer outline-none right-0 absolute"> <IoIosCloseCircle  /></button>
            <div className="lg:w-[55%] lg:h-[40%] xl:w-[30%]   lg:p-20 xl:p-5 xl:ml-28 xl:mt-10 ">
              <img src={x.img}></img>
            </div>
            </div>
          )
        })
      }
    </div>
   :null } 
      

    <div className="m-12"> 
      <div className="  my-4 grid grid-cols-1 sm:grid-cols-3 ">
        {ProductData1.map((item, index) => (
          <div key={index} className="px-2 mx-auto font-serif ">
            <div className=" ">
              <div  >
              
                <img onClick={() => detailPage(item)}
                  src={item.img}
                  alt=""
                  className="h-[15rem]  w-[15rem] xl:w-[20rem]  xl:h-[20rem] 2xl:w-[22rem] rounded-lg shadow-xl"></img>
                        
                <div className="mb-3 2xl:mt-4">
                  <FaRegHeart className="m-1 xl:mt-3 " />
                  <h3>{item.Title}</h3>
                  <p className="flex">
                    <FaIndianRupeeSign className="mt-1" />
                    {item.Price}
                  </p>
                 
                  <button
                    onClick={() => handleClick(item)}
                    className="bg-amber-600 w-32  border-black px-2  py-[1.px] rounded-full mt-1 flex " >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default Product;
