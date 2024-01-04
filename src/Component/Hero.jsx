import React from 'react';
import J1 from "../assets/j1.jpg";
import J2 from "../assets/C4.jpg";
import J3 from "../assets/card1.jpg";
import J4 from "../assets/card2.jpg";
import P2 from "../assets/p2.png";
import s1 from "../assets/slide8.jpg";
import s2 from "../assets/slide6.jpg";
import s3 from "../assets/slide3.jpg";
import s4 from "../assets/slide4.jpg";
import s5 from "../assets/slide5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";



const data = [ 
    {
        name: "Couple Ring",
        img: s1,
        review: "By KD/ 5 November,2023",
    },
    {
        name: "Braclete",
        img: s2,
        review: "By KD/ 2  December,2023",
    },
    {
        name: "Pendant For Engagemenet",
        img: s3,
        review: "By KD/ 17 December,2023",
    },
    {
        name: "Earring",
        img: s4,
        review: "By KD/ 29Novermber,2023",
    },
    {
        name: "Simple Gold chian with Pandent",
        img: s5,
        review: "By KD/ 1 January,2024",
    },
]
   


const Hero = () => {
    const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        autoplayspeed: 5000,
        autoplay: true,
        slidesTOShow: 5,
        slidesToScroll: 1
    }
  return (
    <div>
        
        <div className="flex justify-between md:mt-10 lg:mt-10 mb-3 w-full  flex-col sm:flex-row md:flex-row lg:flex-row">
            <div className="w-1/1.5 h-96 mt-5 ">
                <img src={J1} alt="image" className=" w-[18rem] h-62 md:w-[40rem] md:h-64  lg:w-[1150px]  lg:h-[360px] ml-4 min-[425px]:w-[24.50rem] min-[375px]:w-[21.50rem] rounded-lg"/>
            </div>
            <div className="ml-14 lg:ml-14 md:mt-11 lg:mt-20 md:w-1/2 lg:w-1/2  min-[425px]:mt-[-80px] min-[375px]:mt-[-130px] mt-[-180px]">
                <h6 className="text-base lg:text-xl">--- New Collection ---</h6>
                    <h2 className="text-3xl lg:text-3xl mt-2">JEWELLERY</h2>
                        <p className="text-[14px] md:text-[13px] lg:text-[14px] mt-2 mr-2">your love for diamonds meets our  promise to make them yours. Take home the the promise of a brighter tommorow. <br/> Paired to perfection .</p>
                        <button  onClick={() => alert("Cart not available yet")}
                            className="bg-amber-600 border-black px-6 py-[1.9px] rounded-full mt-5">Shop Now
                        </button>
            </div>
        </div>
        <div className='px-2 font-serif '>
            <div className="lg:max-w-[1240px]  sm:mx-10 lg:mx-10 md:grid grid-cols-3 gap-3 m-4 md:max-lg:mt-[-100px]  ">
                <div>
                    <img src={J2} alt="img" className="h-[18rem]  w-[25rem] lg:h-[15rem] rounded-lg  max-[768px]:h-[15rem] hover:scale-105 duration-500 "/>
                        <div className="m-3">
                        <div className='flex flex-row '><h3 className='flex '><FaIndianRupeeSign className='mt-1' />20,000</h3> <FaRegHeart  className='m-1 ml-44'/></div>
                            <p className="text-base">New Design</p>
                                <h1 className="text-xl  text-yellow-700 ">Small Design Rings</h1>
                                <span>Sale 20% </span>
                                <button  onClick={() => alert("Cart not available yet")}
                            className="bg-amber-600 border-black px-4 py-[1.px] rounded-full mt-1 flex ">Buy
                        </button>
                </div>
                
            </div>
            <div>
                <img src={J3} alt="img" className="h-[15rem] w-[25rem] rounded-lg"/>
                    <div class="m-3">
                    <div className='flex flex-row '><h3 className='flex '><FaIndianRupeeSign className='mt-1' />12,000</h3> <FaRegHeart  className='m-1 ml-44'/></div>
                        <p className="text-base">Featured Product</p>
                        <h2  className="text-xl  text-yellow-700">Gold Earrings</h2>
                        <span>Sale 10% </span>
                        <button  onClick={() => alert("Cart not available yet")}
                            className="bg-amber-600 border-black px-4 py-[1.px] rounded-full mt-1 flex ">Buy
                        </button>
                    </div>
            </div>
            <div>
                <img src={J4} alt="img" className="h-[15rem] w-[25rem] rounded-lg"/>
                <div class="m-3">
                <div className='flex flex-row '><h3 className='flex '><FaIndianRupeeSign className='mt-1' />27,000</h3> <FaRegHeart  className='m-1 ml-44 '/></div>
                                    <p className="text-base">Bestselling  </p>
                                    <h2  className="text-xl text-yellow-700 ">Gold Chain</h2>
                                    <span>Sale 30% </span>
                                    <button  onClick={() => alert("Cart not available yet")}
                            className="bg-amber-600 border-black px-4 py-[1.px] rounded-full mt-1 flex ">Buy
                        </button>
                                </div>
            </div>
        </div>
        </div>

     
        <div className=" bg-slate-300 h-[18rem] w-[90.5%] ml-12 rounded-lg">
            <div className='flex'>
                <img src={P2} alt="" className="w-64 h-64"/>
                    <h1 className="font-serif text-5xl md:text-4xl text-gray-500 text-center  p-24 md:p-20">WE MAKE YOU <br/>FEEL SPECIAL </h1>
                        {/* <img src={P1} alt="" className="w-[17rem] h-[14rem]"/> */}
            </div> 
        </div>

  
        <div class="flex items-center py-4 mt-10">
            <span class="flex-shrink text-4xl text-gray-500  font-serif mx-16 md:text-3xl">ABOUT US</span>
            <div class="flex-grow h-px bg-gray-400"></div>
        </div>
        <div  className="text-base mx-16">
            <p >We are one of the oldest business families in India with a family legacy of 112 years in business. Started for the noble cause of nation-building and self-sustenance in a pre-independent India, the forefathers believed ethical, honest and transparent business practices should form the foundation of the group.</p>
            <p className='mt-8'>Having ventured into jewellery retailing in 1993 in Thrissur, Kerala, India, where we are headquartered, and as on June 30, 2020, we have 137 showrooms spread across India and GCC</p>
        </div>
        <button  onClick={() => alert("Cart not available yet")}
                            className="bg-gray-400  border-black px-6 py-[10px] rounded-full text-sm mt-8 ml-16">Read More..
        </button>

            

        <div class="flex items-center py-4 mt-10">
        <div class="flex-grow h-px bg-gray-400"></div>
            <span class="flex-shrink text-4xl text-gray-500  font-serif mx-16 md:text-3xl">KD UPDATES</span>
        </div>
        <div className="w-3/4 m-auto">
            <div className="mt-10  ">
                <Slider {...settings}>
                {data.map((d) =>(
                    <div className="h-[450px] text-black rounded-lg  bg-gray-200 mb-5 ">
                        <div className=' h-80 bg-gray-200  rounded-xl flex justify-center items-center '>
                            <img src={d.img} className='h-72 w-72 rounded-xl'/>
                            
                        </div >
                        <div className='flex flex-col justify-center items-center  gap-4 p-4 md:p-1 gap-2 '>
                            <h4 className="text-xl font-serif">{d.name}</h4>
                            <p className=''>{d.review}</p>
                            <button className='bg-slate-700 w-20 rounded-full text-white '>Buy Now</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>

        </div>

       

        
        








    </div>
  )
}

export default Hero;