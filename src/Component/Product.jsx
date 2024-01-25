import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import {ProductData1} from "./data";
import { Link } from "react-router-dom";

const Product = ({ handleClick }) => {

  const [id,Title,img,Price] = ProductData1

  return (
    <div className="m-12">
     
      <div className="  my-4 grid grid-cols-1 sm:grid-cols-3 ">
        {ProductData1.map((item, index) => (
          <div key={index} className="px-2 mx-auto font-serif ">
            <div className=" ">
              <div>
              <Link to="/Productdetails">
                <img
                  src={item.img}
                  alt=""
                  className="h-[15rem]  w-[15rem] xl:w-[20rem]  xl:h-[20rem] 2xl:w-[22rem] rounded-lg  hover:scale-105 duration-500 "></img>
                        </Link>
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
  );
};

export default Product;
