import React from "react";
import { GiFleurDeLys } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <>
   
        <div className="bg-black h-[0.01rem] mt-10"></div>
      <div className="footer">
            <div className="top flex justify-between mt-4">
            <div className="text-4xl sm:text-5xl mx-2  flex">
                <div className=" items-center ">
                    <GiFleurDeLys />
                </div>
                <div>
                    <div className="text-base  font-serif  mt-0 sm:mt-2">
                        <span className="text-4xl  ">KD</span>
                        <i className="text-xs md:text-base">jewellers</i>
                    </div>
                </div>
            </div>
           
           
           
            <button className="flex justify-between mt-3"
                onClick={() => alert("search not available yet")}>
             
                <FaSquarePhone className="mt-1" /> 1800-4257331 
             
          </button>
          <button className="mt-1"
                onClick={() => alert("search not available yet")}>
              <span>info@KDjewellers.net</span>
          </button>

        <div className="mt-4 mr-10 ">
            <button className=""
                onClick={() => alert("search not available yet")}>
                <IoLogoInstagram size={20} />
            </button>
            <button className
                onClick={() => alert("search not available yet")}>
                <CiTwitter size={20} />
            </button>
            <button className
                onClick={() => alert("search not available yet")}>
                <FaWhatsapp size={20}  />
            </button>
           
        </div>
     </div>


            <div className="flex felx-col text-base p-5 mx-4 font-serif justify-between">
                <div className=" flex flex-col">
                    <a href="/About.jsx">ABOUT US</a>
                    <a href="/">CONTACT US</a>
                    <a href="/">STORE LOCATOR</a>
                    <a href="/">THE KD PROMISE</a>
                    <a href="/">BY INFORMED</a>
                    <a href="/">FAQ</a>
                    <a href="/">GOLD RATE TODAY</a>
                    
                </div>
                <div className=" flex flex-col  ">
                    <a href="/">CAREERS</a>
                    <a href="/">EASY INSTALLEMENT PLAN</a>
                    <a href="/">PARTNERING WITH TRUST</a>
                    <a href="/">BLOG</a>
                    <a href="/">WHY BUT FROM US</a>
                    <a href="/">PRIVACY POLICY</a>
                    <a href="/">TERMS AND CONDITIONS</a>
                </div>

                <div className="mx-24">
                    <div>FEEDBACK</div>
                    <div className='mt-5 flex flex-col '>
                        <a>
                    <input type="text" placeholder='Name'name='' className=' border-black'> 
                    </input>
                    </a>
                    <div class="flex-grow h-px bg-gray-400"></div>
                    <a>
                    <input type="text" placeholder='Mobile No.'name='' className=' border-black'> 
                    </input>
                    </a>
                    <div class="flex-grow h-px bg-gray-400"></div>
                    <a>
                    <input type="text" placeholder='Email  address'name='Email' className=' border-black'> 
                    </input>
                    </a>
                    <div class="flex-grow h-px bg-gray-400"></div>
                    
                    <button  onClick={() => alert("Cart not available yet")}
                            className="bg-amber-600 border-black px-6 py-[1.9px] rounded-sm mt-5">Submit
                        </button>
                
            </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;