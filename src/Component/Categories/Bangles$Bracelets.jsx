import React from 'react';
import Footer from '../Footer';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Br1 from "../../assets/Braclete/Br6.jpg";
import Br2 from "../../assets/Braclete/Br2.jpg";
import Br3 from "../../assets/Braclete/Br4.jpg";
import Br4 from "../../assets/Braclete/Br1.jpg";
import Br5 from "../../assets/Braclete/Br5.jpg";
import Br6 from "../../assets/Braclete/Br3.jpg";
import Br7 from "../../assets/Braclete/Br7.jpg";



const ProductData1 = [
    {
      id: 34,
      Title: "Gold Ring",
      img: Br1,
      Price: 94000,
      amount: 1,
    },
    {
      id:35,
      Title: "Stellular Luminance Solitaire Ring",
      img: Br2,
      Price: 27000,
      amount: 1,
    },
    {
      id: 36,
      Title: "Little Flower Diamond Ring",
      img: Br3,
      Price: 17000,
      amount: 1,
    },
    {
      id: 37,
      Title: "Flower Gold Ring",
      img: Br4,
      Price: 18000,
      amount: 1,
    },
    {
      id: 38,
      Title: "Couple Ring",
      img: Br5,
      Price: 38000,
      amount: 1,
    },
    {
      id: 39,
      Title: "Chain-Pandent",
      Price: 35000,
      img: Br6,
      amount: 1,
    },
    {
      id: 40,
      Title: "Soft Flower Diamond Ring",
      img: Br7,
      Price: 14000,
      amount: 1,
    },
    
  ];

const Bangles = ({ handleClick }) => {

    const [id,Title,img,Price] = ProductData1

  return (
    <>
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
    <Footer/></>
  )
}

export default Bangles