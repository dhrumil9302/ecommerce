import React,  { useState} from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import {ProductData1} from "./data";
import { Link } from "react-router-dom";
// import { IoIosCloseCircle } from "react-icons/io";

const Product = ({ item, handleClick }) => {

  const [id,Title,Description,img,Price] = ProductData1

  const [detail,setDetail] = useState([]);
  const [close, setClose] = useState(false)
  const detailPage = (Product) =>
  {
    setDetail([{...Product}])
    setClose(true)
  }
  const filterResult = (catItem) => {
    const result = Data.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
 
  return (
    <>
{/*     
    {close ?
    <div >
      {
        detail.map((x) =>
        {
          return(
             <div  className=" bg-gray-100 w-[90%] mx-5 md:mx-10 xl:mx-20 px-5  pb-10 rounded-lg absolute z-10 ">
             <button onClick={() => setClose(false)} className=" text-2xl m-3 cursor-pointer outline-none right-0 absolute"> <IoIosCloseCircle  /></button>
           
            <div className=" mt-10 lg:flex md:flex xl:flex font-serif">
             
              <img src={x.img} className="w-50 md:w-72 lg:w-96 xl:w-[30%] xl:mx-20"/>
              <div className="my-5 lg:m-10 ">
              <h4 className="text-xl font-bold">{x.Title}</h4>
              <hr/>
              <p className="text-sm my-2">{x.Description}</p>
              <p className="flex">
              <FaRegHeart className="m-1 xl:mt-3 " />
                    <FaIndianRupeeSign className="mt-1" />
                    {x.Price}
              </p>
              <div className="my-4 sm:flex  ">
                        <button className="border border-black rounded-lg w-6 mx-1 ">+</button>
                        <button className="border border-black rounded-lg w-6 mx-1 "></button>
                        <button className="border border-black rounded-lg w-6 mx-1">-</button>
                      </div>
                      <h4>Gold Purity: 22 Karat</h4>
                      <p className='text-sm '>Not sure what to buy? Check out our <button className='text-orange-400 underline'>Buying Guides</button></p>  
                <div className="lg:flex xl:flex gap-2">     
              <button
                    onClick={() => handleClick(item)}
                    className="bg-amber-600 w-32  border-black px-2  py-[1.px] rounded-full mt-1 flex " >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleClick(item)}
                    className="bg-amber-600 w-32  border-black px-2  py-[1.px] rounded-full mt-1 flex " >
                  Buy Now
                  </button>
                  </div>
              </div>
            </div>
            </div>
          )
        })
      }
    </div>
   :null }  */}
      

    <div className="m-12 relative"> 
      <div className="  my-4 grid grid-cols-1 sm:grid-cols-3 ">
        {ProductData1.map((item) => (
          <div key={item.id} className="px-2 mx-auto font-serif ">
             <Link
              key={item.id}
              to={`/product-details/${item.id}`}
              className=" xl:w-[300px] lg:w-[230px] md:w-[190px] xs:w-[193px] xxs:w-[183px] shadow-xl "
            >
            
              <div  >
             
                <img 
                  src={item.img}
                  alt=""
                  className="h-[15rem]  w-[15rem] xl:w-[20rem]  xl:h-[20rem] 2xl:w-[22rem] rounded-lg shadow-xl"></img>
                   
                <div className="mb-3 2xl:mt-4">
                  <FaRegHeart className="m-1 xl:mt-3 " />
                  <h3>{item.Title}</h3>
                  <p className="hidden">{item.Description}</p>
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
              </Link>
            </div>
          
        ))}
      </div>

    </div>
    </>
  );
};

export default Product;
