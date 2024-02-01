import React from 'react';
import Footer from '../Footer';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Ch1 from "../../assets/Chain/Ch4.jpg";
import Ch2 from "../../assets/Chain/Ch5.jpg";
import Ch3 from "../../assets/Chain/Ch6.jpg";
import Ch4 from "../../assets/Chain/Ch1.jpg";
import Ch5 from "../../assets/Chain/Ch2.jpg";
import Ch6 from "../../assets/Chain/Ch3.jpg";
import Ch7 from "../../assets/Chain/Ch7.jpg";
import Ch8 from "../../assets/Chain/c1.jpg";
import Ch9 from "../../assets/Chain/c2.jpg";
import Ch10 from "../../assets/Chain/c3.jpg";



const ProductData1 = [
    {
      id: 41,
      Title: "Gold Ring",
      img: Ch1,
      Price: 94000,
      amount: 1,
    },
    {
      id: 42,
      Title: "Stellular Luminance Solitaire Ring",
      img: Ch2,
      Price: 27000,
      amount: 1,
    },
    {
      id: 43,
      Title: "Little Flower Diamond Ring",
      img: Ch3,
      Price: 17000,
      amount: 1,
    },
    {
      id: 44,
      Title: "Flower Gold Ring",
      img: Ch4,
      Price: 18000,
      amount: 1,
    },
    {
      id: 45,
      Title: "Couple Ring",
      img: Ch5,
      Price: 38000,
      amount: 1,
    },
    {
      id: 46,
      Title: "Chain-Pandent",
      Price: 35000,
      img: Ch6,
      amount: 1,
    },
    {
      id: 47,
      Title: "Soft Flower Diamond Ring",
      img: Ch7,
      Price: 14000,
      amount: 1,
    },
    {
      id: 48,
      Title: "Simple Chain with Earrings",
      img: Ch8,
      Price: 17000,
      amount: 1,
    },
    {
      id: 49,
      Title: "Gold Bangles",
      img: Ch9,
      Price: 40000,
      amount: 1,
    },
    {
      id: 50,
      Title: "Falling For You Couple Rings",
      img: Ch10,
      Price: 17000,
      amount: 1,
    },

  
   
  ];
  
const Chain = ({ handleClick }) => {

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

export default Chain