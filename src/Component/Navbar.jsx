import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { GiFleurDeLys } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import J1 from "../assets/j1.jpg";
import Hero from "./Hero";
// import  DropdownLinks from "react-dropdown";

const Menu1 = [
  {
    id: 2,
    name: "Gift Card",
    link: "/giftcard",
  },
  {
    id: 3,
    name: "Our Brands",
    link: "/#",
  },
  {
    id: 4,
    name: "Offers",
    link: "/",
  },

];

const DropdownLink = [
  {
    id: 1,
    name: "Rings",
    link: "/#",
  },
  {
    id: 2,
    name: "Earrings",
    link: "/#",
  },
  {
    id: 3,
    name: "Nacklace",
    link: "/#",
  },
  {
    id: 4,
    name: "Bangles & Bracelets",
    link: "/#",
  },
  {
    id: 5,
    name: "Chian & pendants",
    link: "/#",
  },
  {
    id: 5,
    name: "Others Jewellery",
    link: "/#",
  },
];
const Subtitle1 = [
  {
    id: 1,
    name: "Engagement",
    link: "/#",
  },
  {
    id: 2,
    name: "Classic",
    link: "/#",
  },
  {
    id: 1,
    name: "Navratna",
    link: "/#",
  },
  {
    id: 2,
    name: "Couple Brands",
    link: "/#",
  },
  {
    id: 1,
    name: "Eternity",
    link: "/#",
  },
  {
    id: 2,
    name: "Solitaire",
    link: "/#",
  },
]
const Subtitle2 = [
  {
    id: 1,
    name: "Studs",
    link: "/#",
  },
  {
    id: 2,
    name: "Navratna",
    link: "/#",
  },
  {
    id: 1,
    name: "Jhumkha",
    link: "/#",
  },
  {
    id: 2,
    name: "Hoops",
    link: "/#",
  },
  {
    id: 1,
    name: "Solitraine",
    link: "/#",
  },
]
const Subtitle3 = [
  {
    id: 1,
    name: "Collar",
    link: "/#",
  },
  {
    id: 2,
    name: "Layered",
    link: "/#",
  },
  {
    id: 1,
    name: "Choker",
    link: "/#",
  },
  {
    id: 2,
    name: "Delicate",
    link: "/#",
  },
  {
    id: 1,
    name: "Lariat",
    link: "/#",
  },
  {
    id: 2,
    name: "Pandant Nacklace",
    link: "/#",
  },
]
const Subtitle4 = [
  {
    id: 1,
    name: "Kada Bangles",
    link: "/#",
  },
  {
    id: 2,
    name: "Delicate Bangles",
    link: "/#",
  },
  {
    id: 1,
    name: "Broad Bangles",
    link: "/#",
  },
  {
    id: 2,
    name: "Entrnity Bangles",
    link: "/#",
  },
  {
    id: 1,
    name: "Chain Bracelets",
    link: "/#",
  },
  {
    id: 2,
    name: "Flexi Bracelets",
    link: "/#",
  },
  {
    id: 1,
    name: "Oval Bracelets",
    link: "/#",
  },
  {
    id: 2,
    name: "Tennis Bracelets",
    link: "/#",
  },
]
const Subtitle5 = [
  {
    id: 1,
    name: "Intial Pendents",
    link: "/#",
  },
  {
    id: 2,
    name: "Solitaire Pendents ",
    link: "/#",
  },
  {
    id: 1,
    name: "Casual Pendents",
    link: "/#",
  },
  {
    id: 2,
    name: "Simple Chain",
    link: "/#",
  },
]
const Subtitle = [
  {
    id: Subtitle1
  }
]


const Navbar = () => {
  return (
    <>
      <div>
        <div className="shadow-md w-full">
          <div className=" bg-white dark:bg-gray-900 dark:text-white ">
            <div className="text-4xl sm:text-5xl mx-2  flex  ">
              <div className=" items-center ">
                <GiFleurDeLys />
              </div>
              <div>
                <div className="text-base  font-serif  mt-0 sm:mt-2">
                  <span className="text-4xl  ">KD</span>
                  <i className="text-xs md:text-base">jewellers</i>
                  {/* <p className="text-xs md:text-base ">
              <span>Our Jewellery ... Your Style ...</span>
              </p> */}
                </div>
              </div>
              <div className="ml-[22%] mr-[3%] sm:ml-[53%] mr-[5%]  md:ml-[55%] mr-[5%] lg:ml-[65%] mr-[5%] flex">
               
                <button
                  onClick={() => alert(" not available yet")}
                  className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full hidden sm:block ">
                  <span className="transition-all duration-200">
                    <IoMdSearch className="size-3 " />
                  </span>
                </button>
                <button
                  onClick={() => alert(" not available yet")}
                  className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full "
                >
                  <span className="transition-all duration-200">
                    <IoPerson className="size-3" />
                  </span>
                </button>
                <button
                  onClick={() => alert(" not available yet")}
                  className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full ">
                  <span className="transition-all duration-200">
                  <FaRegHeart className="size-3" />
                  </span>
                </button>
                <button
                  onClick={() => alert("Cart not available yet")}
                  className="bg-white border border-slate-500 transition-all duration-200 text-black h-6 mt-3 m-0.5 px-1 md:px-2  rounded-full"
                >
                  <span className="transition-all duration-200">
                    <IoMdCart className="size-3" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center font-serif shadow-xl">
            <ul className="sm:flex hidden items-center gap-4">
              {/* {
              Menu.map((data) =>(
                <li key={data.id} >
                  <a href={data.link} className="inline-block px-4 hover:text-orange-500 duration-200">
                    {data.name}
                 </a>
                </li>
              ))
            } */}
              <li className="group relative cursor-pointer">
                <a
                  href="/"
                  className="inline-block px-4 hover:text-orange-500 duration-200"
                >
                  Home
                </a>
              </li>
              <li className="group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] py-2  hover:text-orange-500 ">
                  Today's Rate
                  {/* <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span> */}
                </a>
               
                <div className=" absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    <a>Today's Gold Rate</a>
                    </ul>
                    </div>
              </li>

              <li className="group relative cursor-pointer ml-2">
                <a
                  href="#"
                  className="flex items-center gap-[2px] py-2  hover:text-orange-500 "
                >
                  Jewellery
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
               
                <div className=" absolute z-[9999] hidden group-hover:block w-[280px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLink.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="group/{jewellery}   w-full rounded-md p-2 flex "
                        >
                          {data.name}
                          <span>
                            <FaCaretRight className="transition-all duration-200 mt-1 " />
                          </span>

                          <ul className="  z-[9999] w-full rounded-md p-2 hidden group-hover/{jewellery}:block hover:bg-primary/20">
                            {Subtitle1.map((data) => (
                              <li key={data.id}>
                                <a
                                  href={data.link}
                                  className=" inline-block w-full rounded-md p-2 flex hover:bg-primary/20">
                                  {data.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>                
              </li>

              {Menu1.map((data) =>(
                <li key={data.id} >
                  <a href={data.link} className="inline-block px-4 hover:text-orange-500 duration-200">
                    {data.name}
                 </a>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
