import React from 'react';
import Footer from '../Footer';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import N1 from "../../assets/Nacklace/Nc3.jpg";
import N2 from "../../assets/Nacklace/Nc10.jpg";
import N3 from "../../assets/Nacklace/Nc4.jpg";
import N4 from "../../assets/Nacklace/N1.jpg";
import N5 from "../../assets/Nacklace/Nc1.jpg";
import N6 from "../../assets/Nacklace/Nc2.jpg";
import N7 from "../../assets/Nacklace/Nc6.jpg";
import N8 from "../../assets/Nacklace/Nc7.jpg";
import N9 from "../../assets/Nacklace/Nc8.jpg";
import N10 from "../../assets/Nacklace/Nc9.jpg";
import N11 from "../../assets/Nacklace/Nc5.jpg";

const ProductData1 = [
    {
      id: 23,
      Title: "Gold Ring",
      img: N1,
      Price: 94000,
      amount: 1,
    },
    {
      id: 24,
      Title: "Stellular Luminance Solitaire Ring",
      img: N2,
      Price: 27000,
      amount: 1,
    },
    {
      id: 25,
      Title: "Little Flower Diamond Ring",
      img: N3,
      Price: 17000,
      amount: 1,
    },
    {
      id: 26,
      Title: "Flower Gold Ring",
      img: N4,
      Price: 18000,
      amount: 1,
    },
    {
      id: 27,
      Title: "Couple Ring",
      img: N5,
      Price: 38000,
      amount: 1,
    },
    {
      id: 28,
      Title: "Chain-Pandent",
      Price: 35000,
      img: N6,
      amount: 1,
    },
    {
      id: 29,
      Title: "Soft Flower Diamond Ring",
      img: N7,
      Price: 14000,
      amount: 1,
    },
    {
      id: 30,
      Title: "Simple Chain with Earrings",
      img: N8,
      Price: 17000,
      amount: 1,
    },
    {
      id: 31,
      Title: "Gold Bangles",
      img: N9,
      Price: 40000,
      amount: 1,
    },
    {
      id: 32,
      Title: "Falling For You Couple Rings",
      img: N10,
      Price: 17000,
      amount: 1,
    },
    {
        id: 33,
        Title: "Falling For You Couple Rings",
        img: N11,
        Price: 17000,
        amount: 1,
      },
  

    
  ];

const Nacklace = ({ handleClick }) => {

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

export default Nacklace