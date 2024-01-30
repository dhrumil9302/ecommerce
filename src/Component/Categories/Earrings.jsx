import React from 'react';
import Footer from '../Footer';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Er1 from "../../assets/Earrings/Er1.jpg";
import Er2 from "../../assets/Earrings/Er2.jpg";
import Er3 from "../../assets/Earrings/Er3.jpg";
import Er4 from "../../assets/Earrings/Er9.jpg";
import Er5 from "../../assets/Earrings/Er4.jpg";
import Er6 from "../../assets/Earrings/Er6.jpg";
import Er7 from "../../assets/Earrings/Er7.jpg";
import Er8 from "../../assets/Earrings/Er8.jpg";
import Er9 from "../../assets/Earrings/Er9.jpg";


const ProductData1 = [
    {
      id: 14,
      Title: "Gold Earrings",
      img: Er1,
      Price: 24000,
      amount: 1,
    },
    {
      id: 15,
      Title: "Diamond Stud Earrings",
      img: Er2,
      Price: 37480,
      amount: 1,
    },
    {
      id: 16,
      Title: "Peacock Gold Earrings",
      img: Er3,
      Price: 42300,
      amount: 1,
    },
    {
      id: 17,
      Title: "Sleek Geometry Drop Earrings",
      img: Er4,
      Price: 18000,
      amount: 1,
    },
    {
      id: 18,
      Title: "Flower Power Drop Earrings",
      img: Er5,
      Price: 38000,
      amount: 1,
    },
    {
      id: 19,
      Title: "Opulent Ruby Jhumkas",
      Price: 93000,
      img: Er6,
      amount: 1,
    },
    {
      id: 20,
      Title: "Diamond stud Earrings ",
      img: Er7,
      Price: 14000,
      amount: 1,
    },
    {
      id: 21,
      Title: "Jhumks",
      img: Er8,
      Price: 17000,
      amount: 1,
    },
    {
      id: 22,
      Title: "Gold Bangles",
      img: Er9,
      Price: 40000,
      amount: 1,
    },
 
  ];

const Earrings = ({ handleClick }) => {

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

export default Earrings