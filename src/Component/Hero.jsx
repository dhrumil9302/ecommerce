import React from "react";
import J1 from "../assets/j1.jpg";
import J2 from "../assets/C4.jpg";
import J3 from "../assets/slide4.jpg";
import J4 from "../assets/card2.jpg";
import P2 from "../assets/p2.png";
import s1 from "../assets/slide8.jpg";
import s2 from "../assets/slide6.jpg";
import s3 from "../assets/slide3.jpg";
import s4 from "../assets/slide4.jpg";
import s5 from "../assets/slide5.jpg";
import Brand from "../assets/Brand1.png";
import Brand1 from "../assets/Brand2.png";
import Brand2 from "../assets/Brand3.png";
import Brand3 from "../assets/Brand4.png";
import Brand5 from "../assets/Brand6.png";
import Brand6 from "../assets/Brand7.png";
import Brand7 from "../assets/Brand8.png";
import Brand8 from "../assets/Brand9.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiEarrings } from "react-icons/gi";
import { GiNecklaceDisplay } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";

const data = [
  {
    id: 1,
    name: "Couple Ring",
    img: s1,
    review: "By KD/ 5November,2023",
  },
  {
    id: 2,
    name: "Braclete",
    img: s2,
    review: "By KD/ 2December,2023",
  },
  {
    id: 3,
    name: "Pendant For Engagemenet",
    img: s3,
    review: "By KD/ 17December,2023",
  },
  {
    id: 4,
    name: "Earring",
    img: s4,
    review: "By KD/ 29Novermber,2023",
  },
  {
    id: 5,
    name: "Simple Gold chian with Pandent",
    img: s5,
    review: "By KD/ 1January,2024",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplayspeed: 5000,
    autoplay: true,
    slidesTOShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="px-2">
      <div className="flex justify-between md:mt-10 lg:mt-10 mb-3 w-full  flex-col md:flex-row">
        <div className="w-1/1.5 mt-5 ">
          <img
            src={J1}
            alt="image"
            className=" w-11/12 h-62 md:w-[40rem] md:h-64  lg:w-[1150px]  lg:h-[360px] xl:w-[1600px] xl:h-[400px] mx-auto my-4 rounded-lg"
          />
        </div>
        <div className="mx-10 lg:ml-14 md:mt-11 lg:mt-20 md:w-1/2 lg:w-1/2  xl:mt-[130px]">
          <h6 className="text-base lg:text-xl">--- New Collection ---</h6>
          <h2 className="text-3xl lg:text-3xl mt-2">JEWELLERY</h2>
          <p className="text-[14px] md:text-[13px] lg:text-[14px] mt-2 mr-2 my-4">
            your love for diamonds meets our promise to make them yours. Take
            home the the promise of a brighter tommorow. <br /> Paired to
            perfection .
          </p>
          <Link
            to="/Product"
            className="bg-amber-600 border-black px-6 py-[1.9px] rounded-full mt-5  ">
            Shop Now
          </Link>
        </div>
      </div>

      <marquee className=" bg-gray-900 w-full h-36 rounded-lg mt-10">
        <div className="flex gap-6 my-3">
          <img src={Brand} alt="img" className="w-36 " />
          <img src={Brand1} alt="img" className="w-36" />
          <img src={Brand2} alt="img" className="w-36" />
          <img src={Brand3} alt="img" className="w-36" />

          <img src={Brand5} alt="img" className="w-36" />
          <img src={Brand6} alt="img" className="w-36" />
          <img src={Brand7} alt="img" className="w-36" />
          <img src={Brand8} alt="img" className="w-36" />
        </div>
      </marquee>
{/* 

      <div className="px-14">
        <div>
          <h1>FEATURE</h1>
          <p>Customized Jewelry</p>
          <div className="flex justify-between">
            <div>
            <GiEarrings />
            <h1>Tear-drop Earrings</h1>
            </div>
            <div>
            <GiBigDiamondRing />
            <h1>Customized Rings</h1>
            </div>
            <div>
            <GiNecklaceDisplay />
            <h1>Chain Necklaces</h1>
            </div>
          </div>
        </div>
      </div> */}

<div className="m-16 ">
  <h1 className="font-serif text-center text-4xl ">Popular Collection</h1>
</div>
      <div className="px-2 font-serif ">
        <div className="lg:max-w-[1240px] xl:max-w-[1350px]  sm:mx-10 lg:mx-10 md:grid grid-cols-3 gap-3 m-4 md:my-20 lg:my-20 xl:mt-[40px] xl:mx-36 ">
          <div>
            <img
              src={J2}
              alt="img"
              className="h-[15rem]  w-full xl:h-[20rem] rounded-lg  hover:scale-105 duration-500 "
            />
            <div className="m-3">
              <FaRegHeart className="m-1 " />
              <div className="px-2 font-serif">
                <h3 className="flex ">
                  <FaIndianRupeeSign className="mt-1" />
                  20,000
                </h3>{" "}
              </div>
              <p className="text-base">New Design</p>
              <h1 className="text-xl  text-yellow-700 ">Small Design Rings</h1>
              <span>Sale 20% </span>
              <div className="flex gap-1">
                <a
                  herf="/Gift"
                  className="bg-amber-600 w-32  border-black px-4 py-[1.px] rounded-full mt-1 flex "
                >
                  Add to Cart
                </a>
                <a
                  herf="/Gift"
                  className="bg-amber-600 w-14  border-black px-4 py-[1.px] rounded-full mt-1 flex "
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src={J3}
              alt="img"
              className="h-[15rem] w-full  xl:h-[20rem] rounded-lg  hover:scale-105 duration-500"
            />
            <div className="m-3">
              <FaRegHeart className="m-1" />
              <div className="flex flex-row ">
                <h3 className="flex ">
                  <FaIndianRupeeSign className="mt-1" />
                  12,000
                </h3>{" "}
              </div>
              <p className="text-base">Featured Product</p>
              <h2 className="text-xl  text-yellow-700">Gold Earrings</h2>
              <span>Sale 10% </span>
              <div className="flex gap-1">
                <a
                  herf="/Gift"
                  className="bg-amber-600 w-32  border-black px-4 py-[1.px] rounded-full mt-1 flex "
                >
                  Add to Cart
                </a>
                <a
                  herf="/Gift"
                  className="bg-amber-600 w-14  border-black px-4 py-[1.px] rounded-full mt-1 flex "
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src={J4}
              alt="img"
              className="h-[15rem] w-full  xl:h-[20rem] rounded-lg  hover:scale-105 duration-500"
            />
            <div className="m-3">
              <FaRegHeart className="m-1  " />

              <div className="flex flex-row ">
                <h3 className="flex ">
                  <FaIndianRupeeSign className="mt-1" />
                  27,000
                </h3>{" "}
              </div>
              <p className="text-base">Bestselling </p>

              <h2 className="text-xl text-yellow-700 ">Gold Chain</h2>
              <span>Sale 30% </span>
              <div className="flex gap-1">
                <a
                  herf="/Gift"
                  className="bg-amber-600 w-32  border-black px-4 py-[1.px] rounded-full mt-1 flex "
                >
                  Add to Cart
                </a>
                <a
                  herf="/Gift"
                  className="bg-amber-600 w-14  border-black px-4 py-[1.px] rounded-full mt-1 flex "
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-slate-300 h-[17rem] w-full   lg:h-[20%] lg:w-full rounded-lg">
        <div className="flex">
          <img src={P2} alt="" className="w-64 h-64" />
          <h1 className="font-serif text-4xl md:text-4xl md:right-24  text-gray-500 text-center relative right-44 lg:right-1 top-5 md:p-20">
            WE MAKE YOU <br />
            FEEL SPECIAL{" "}
          </h1>
          {/* <img src={P1} alt="" className="w-[17rem] h-[14rem]"/> */}
        </div>
      </div>

      <div className="flex items-center py-4 mt-10">
        <span className="flex-shrink text-2xl text-gray-500  font-serif lg:mx-16 mx-10 md:text-3xl lg:text-4xl">
          ABOUT US
        </span>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className=" text-sm lg:text-base lg:mx-16 mx-10">
        <p>
          We are one of the oldest business families in India with a family
          legacy of 112 years in business. Started for the noble cause of
          nation-building and self-sustenance in a pre-independent India, the
          forefathers believed ethical, honest and transparent business
          practices should form the foundation of the group.
        </p>
        <p className="mt-8">
          Having ventured into jewellery retailing in 1993 in Thrissur, Kerala,
          India, where we are headquartered, and as on June 30, 2020, we have
          137 showrooms spread across India and GCC
        </p>
      </div>
      <Link to="/AboutUs">
      <button
       
        className="bg-gray-400  border-black px-2 py-[2px] lg:px-6 lg:py-[10px] rounded-full text-sxs lg:text-sm lg:mt-8 mt-4 ml-10 lg:ml-16"
      >
        Read More..
      </button>
      </Link>

      <div className="flex items-center py-4 mt-10">
        <div className="flex-grow h-px bg-gray-400"></div>
        <span className="flex-shrink text-2xl text-gray-500  font-serif lg:mx-16 mx-10  md:text-3xl lg:text-4xl">
          KD UPDATES
        </span>
      </div>


      
      <div className="w-3/4 m-auto mb-20">
        <div className="mt-6 lg:mt-10  ">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.id} className="h-[400px] sm:h-[450px] text-black rounded-lg  bg-gray-200  ">
                <div className=" h-60 lg:h-80 md:h-80 bg-gray-200  rounded-xl flex justify-center items-center ">
                  <img
                    src={d.img}
                    className="h-44 w-44  md:h-64 md:w-64 lg:w-72 lg:h-72 rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center items-center  gap-4 p-4 md:p-1 gap-2 ">
                  <h4 className="text-xl font-serif">{d.name}</h4>
                  <p className="">{d.review}</p>
                  <button className="bg-slate-700 w-20 rounded-full text-white ">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
