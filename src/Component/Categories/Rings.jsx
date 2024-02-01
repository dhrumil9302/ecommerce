import React from 'react';
import Footer from '../Footer';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import R1 from "../../assets/Rings/Ring1.jpg";
import R2 from "../../assets/Rings/Ring2.jpg";
import R3 from "../../assets/j19.jpg";
import R4 from "../../assets/Rings/Ring3.jpg";
import R5 from "../../assets/j16.jpg";
import R6 from "../../assets/Rings/Ring4.jpg";
import R7 from "../../assets/Rings/Ring5.jpg";
import R8 from "../../assets/Rings/Ring6.jpg";
import R9 from "../../assets/Rings/Ring7.jpg";
import R10 from "../../assets/Rings/Ring8.jpg";
import R11 from "../../assets/Rings/Ring9.jpg";
import R12 from "../../assets/Rings/Ring10.jpg";
import R13 from "../../assets/Rings/Ring11.jpg";
import R14 from "../../assets/Rings/Ring12.jpg";

const ProductData1 = [
    {
      id: 1,
      Title: "Simple Gold Ring",
      img: R12,
      Price: 33000,
      amount: 1,
    },
    {
      id: 2,
      Title: "Stellular Luminance Solitaire Ring",
      img: R13,
      Price: 27000,
      amount: 1,
    },
    {
      id: 3,
      Title: "Little Flower Diamond Ring",
      img: R14,
      Price: 17000,
      amount: 1,
    },
    {
      id: 4,
      Title: "Flower Gold Ring",
      img: R3,
      Price: 18000,
      amount: 1,
    },
    {
      id: 5,
      Title: "Couple Ring",
      img: R5,
      Price: 38060,
      amount: 1,
    },
    {
      id: 6,
      Title: "Rose Gold Ring",
      Price: 21000,
      img: R6,
      amount: 1,
    },
    {
      id: 7,
      Title: "Soft Flower Diamond Ring",
      img: R7,
      Price: 20467,
      amount: 1,
    },
    {
      id: 8,
      Title: "Rose Gold Women Ring",
      img: R8,
      Price: 17040,
      amount: 1,
    },
    {
      id: 9,
      Title: "Gold Ring",
      img: R9,
      Price: 15170,
      amount: 1,
    },
    {
      id: 10,
      Title: "Falling For You Couple Rings",
      img: R10,
      Price: 47200,
      amount: 1,
    },
    {
      id: 11,
      Title: "Elegant Classy Diamond Rings",
      img: R11,
      Price: 27425,
      amount: 1,
    },
    {
      id: 12,
      Title: "Gold Ring",
      img: R4,
      Price: 17630,
      amount: 1,
    },
    {
      id: 13,
      Title: "Gold Ring",
      img: R2,
      Price: 17000,
      amount: 1,
    },
    {
      id: 14,
      Title: "Gold Ring",
      img: R1,
      Price: 14000,
      amount: 1,
    },
  ];

const Rings = ({ handleClick }) => {

    const [id,Title,img,Price] = ProductData1

  return (
    <>
    <div className="m-12">
     
     <div className="  my-4 grid grid-cols-1 sm:grid-cols-3 ">
       {ProductData1.map((item, index) => (
         <div key={index} className="px-2 mx-auto font-serif ">
           <div className=" ">
             <div>
             <Link to="">
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
    <Footer/></>
  )
}

export default Rings