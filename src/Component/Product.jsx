import React from "react";
import J1 from "../assets/g15.jpg";
import J2 from "../assets/g14.jpg";
import J3 from "../assets/j19.jpg";
import J4 from "../assets/slide4.jpg";
import J5 from "../assets/j16.jpg";
import J6 from "../assets/slide5.jpg";
import J7 from "../assets/Er5.jpg";
import J8 from "../assets/ch6.jpg";
import J9 from "../assets/j14.jpg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

const Product = ({ handleClick }) => {
  const ProductData1 = [
    {
      id: 1,
      Title: "Nacklace",
      img: J1,
      Price: 94000,
      amount: 1,
    },
    {
      id: 2,
      Title: "Braclate",
      img: J2,
      Price: 27000,
      amount: 1,
    },
    {
      id: 3,
      Title: "Gold Ring",
      img: J3,
      Price: 17000,
      amount: 1,
    },
    {
      id: 4,
      Title: "Earring",
      img: J4,
      Price: 18000,
      amount: 1,
    },
    {
      id: 5,
      Title: "Couple Ring",
      img: J5,
      Price: 38000,
      amount: 1,
    },
    {
      id: 6,
      Title: "Chain-Pandent",
      img: J6,
      Price: 35000,
      amount: 1,
    },
    {
      id: 7,
      Title: "Earrings",
      img: J7,
      Price: 14000,
      amount: 1,
    },
    {
      id: 8,
      Title: "Simple Chain with Earrings",
      img: J8,
      Price: 17000,
      amount: 1,
    },
    {
      id: 9,
      Title: "Gold Bangles",
      img: J9,
      Price: 40000,
      amount: 1,
    },
  ];
  const [id,Title,img,Price] = ProductData1

  return (
    <div className="m-12">
      <div className="  my-4 grid grid-cols-1 sm:grid-cols-3">
        {ProductData1.map((item) => (
          <div key={item.id} className="px-2 mx-auto font-serif ">
            <div className=" ">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="h-[15rem]  w-[15rem]  xl:h-[20rem] 2xl:w-[22rem] rounded-lg  hover:scale-105 duration-500 "
                ></img>
                <div className="mb-3">
                  <FaRegHeart className="m-1 " />
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
