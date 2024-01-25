import React from "react";
import { GiFleurDeLys } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-red-500 h-[3px]  "></div>
      <div className="m-4 text-center ">
        <h1 className="text-2xl font">Subscribe for KD jewellrs</h1>
        <p>
          Get E-mail of all the updates about our lastest and special offers
        </p>
        <div className="mt-5 ">
          <input
            type="text"
            placeholder="Email adddress..."
            name="Email"
            className="border border-black"></input>
          <button
            onClick={() => alert("Cart not available yet")}
            className="bg-amber-600 border-black px-6 py-[1.9px] rounded-sm "
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="bg-black h-[0.01rem] mt-10 "></div>
      <div >
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row  text-base md:text-sm p-5 mx-4 font-serif justify-between">
          <div className=" flex flex-col">
            <a href="/AboutUs" className="my-3">
              ABOUT US
            </a>
            <a>
              <div className="flex-grow h-px mt-[-14px] w-10 bg-gray-400"></div>
            </a>
            <a href="/">About Our Company</a>
            <a href="/">Privacy Policy</a>
            <a href="/">FAQ</a>
            <a href="/">Offerce T&Cs</a>
            <a href="/">Customer Reviews</a>
            <div>
              <button
                onClick={() => alert("search not available yet")}
              >
                <IoLogoInstagram size={20} />
              </button>
              <button
                
                onClick={() => alert("search not available yet")}
              >
                <CiTwitter size={20} />
              </button>
              <button
                
                onClick={() => alert("search not available yet")}
              >
                <FaWhatsapp size={20} />
              </button>
            </div>
          </div>
          <div className=" flex flex-col  ">
            <a href="/" className="my-3">
              WHY KD?
            </a>
            <a>
              <div className="flex-grow h-px mt-[-14px] w-10 bg-gray-400"></div>
            </a>
            <a href="/">15-Day Returns</a>
            <a href="/">Cancle & Refund</a>
            <a href="/">Lifetime Exchnage</a>
            <a href="/">Certified Jewellery</a>
            <a href="/">Candere Wallet</a>
            <a href="/">Jewellery Insurence</a>
            <a href="/">Liquiloans</a>
          </div>

          <div className=" flex flex-col">
            <a href="/" className="my-3">
              CONTACT US
            </a>
            <a>
              <div className="flex-grow h-px mt-[-14px] w-10 bg-gray-400"></div>
            </a>
            <a href="/">India +91 22 61066262</a>
            <a href="/">(9am-9pm, 7 days a week)</a>
            <a href="/">Support@kd.com</a>
            <a href="/">KD store Locatore</a>
            <a href="/">FAQ</a>
            <a href="/">GOLD RATE TODAY</a>
          </div>

          <div className="">
            <div className="my-3">FEEDBACK</div>
            <a>
              <div className="flex-grow h-px mt-[-14px] w-10 bg-gray-400"></div>
            </a>
            <div className="mt-5 flex flex-col ">
              <a>
                <input
                  type="text"
                  placeholder="Name"
                  name=""
                  className=" border-black"
                ></input>
              </a>
              <div className="flex-grow h-px bg-gray-400"></div>
              <a>
                <input
                  type="text"
                  placeholder="Mobile No."
                  name=""
                  className=" border-black"
                ></input>
              </a>
              <div className="flex-grow h-px bg-gray-400"></div>
              <a>
                <input
                  type="text"
                  placeholder="Email  address"
                  name="Email"
                  className=" border-black"
                ></input>
              </a>
              <div className="flex-grow h-px bg-gray-400"></div>

              <button
                onClick={() => alert("Cart not available yet")}
                className="bg-amber-600 border-black px-6 py-[1.9px] rounded-sm mt-5"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
