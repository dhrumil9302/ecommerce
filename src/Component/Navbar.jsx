import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { GiFleurDeLys } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { FaCaretDown, FaSnapchat } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import J1 from "../assets/j1.jpg";
import Hero from "./Hero";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
// import  DropdownLinks from "react-dropdown";

const Menu1 = [
  // {
  //   id: 1,
  //   name: "Others",
  //   link: "/others",
  // },
  {
    id: 2,
    name: "Gift Card",
    link: "/product",
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
    id: 6,
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
    id: 3,
    name: "Navratna",
    link: "/#",
  },
  {
    id: 4,
    name: "Couple Brands",
    link: "/#",
  },
  {
    id: 5,
    name: "Eternity",
    link: "/#",
  },
  {
    id: 6,
    name: "Solitaire",
    link: "/#",
  },
];
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
    id: 3,
    name: "Jhumkha",
    link: "/#",
  },
  {
    id: 4,
    name: "Hoops",
    link: "/#",
  },
  {
    id: 5,
    name: "Solitraine",
    link: "/#",
  },
];
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
    id: 3,
    name: "Choker",
    link: "/#",
  },
  {
    id: 4,
    name: "Delicate",
    link: "/#",
  },
  {
    id: 5,
    name: "Lariat",
    link: "/#",
  },
  {
    id: 6,
    name: "Pandant Nacklace",
    link: "/#",
  },
];
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
    id: 3,
    name: "Broad Bangles",
    link: "/#",
  },
  {
    id: 4,
    name: "Entrnity Bangles",
    link: "/#",
  },
  {
    id: 5,
    name: "Chain Bracelets",
    link: "/#",
  },
  {
    id: 6,
    name: "Flexi Bracelets",
    link: "/#",
  },
  {
    id: 7,
    name: "Oval Bracelets",
    link: "/#",
  },
  {
    id: 8,
    name: "Tennis Bracelets",
    link: "/#",
  },
];
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
    id: 3,
    name: "Casual Pendents",
    link: "/#",
  },
  {
    id: 4,
    name: "Simple Chain",
    link: "/#",
  },
];
const Subtitle = [
  {
    id: Subtitle1,
  },
];

const Navbar = ({ size }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <div className="shadow-md w-full  ">
          <div className=" bg-white dark:bg-gray-900  dark:text-white ">
            <div className="flex justify-between">
              <div className="text-4xl sm:text-5xl mx-2  flex  ">
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
              <div className="flex mr-2 ">
                <a
                  href="/gift"
                  className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full hidden sm:block "
                >
                  <span className="transition-all duration-200">
                    <IoMdSearch className="size-3 mt-1" />
                  </span>
                </a>
                <a
                  href="/gift"
                  className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full hidden sm:block "
                >
                  <span className="transition-all duration-200">
                    <IoPerson className="size-3 mt-1" />
                  </span>
                </a>
                <a
                  href="/gift"
                  className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full hidden sm:block "
                >
                  <span className="transition-all duration-200">
                    <FaRegHeart className="size-3 mt-1" />
                  </span>
                </a>
                <Link
                  to="/gift"
                  className="bg-white border border-slate-500 transition-all duration-200 text-black h-6 mt-3 m-0.5 px-1 md:px-2  rounded-full hidden sm:block"
                >
                  <div className="transition-all duration-200 relative">
                    <IoMdCart className="size-3 mt-1" />

                    <span className="bg-red-600 text-white w-4 h-5  rounded-full absolute -top-3  left-2 text-center leading-5">
                      {size}
                    </span>
                  </div>
                </Link>
              </div>
              <div className="sm:hidden m-2 ">
                <button onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <FaTimes className="w-5 h-5 text-white" />
                  ) : (
                    <FaBars className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="block sm:hidden mb-2  ">
                <div className=" mx-4 flex ">
                  <a
                    href="/Gift"
                    className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full "
                  >
                    <span className="transition-all duration-200">
                      <IoMdSearch className="size-3 mt-1 " />
                    </span>
                  </a>
                  <a
                    href="/Gift"
                    className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full  "
                  >
                    <span className="transition-all duration-200">
                      <IoPerson className="size-3 mt-1" />
                    </span>
                  </a>
                  <a
                    href="/"
                    className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full "
                  >
                    <span className="transition-all duration-200">
                      <FaRegHeart className="size-3 mt-1" />
                    </span>
                  </a>
                  <Link
                    to="/gift"
                    className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full  "
                  >
                    <span className="transition-all duration-200">
                      <IoMdCart className="size-3 mt-1" />
                      
                    </span>
                    
                  </Link>
                </div>
              </div>

          <div className="flex justify-center font-serif shadow-xl">
            <ul className="sm:flex items-center gap-4 hidden">
              <li className=" hover:text-orange-500 ">
                <Link to="/">Home</Link>
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
                        <ul
                          className="group/{jewellery}   w-full rounded-md p-2 flex "
                        >
                          {data.name}
                          <span>
                            <FaCaretRight className="transition-all duration-200 mt-1 " />
                          </span>

                          <ul className="  z-[9999] w-full rounded-md p-2 hidden group-hover/{jewellery}:block hover:bg-primary/20">
                            {Subtitle1.map((data) => (
                              <li key={data.id}>
                                <Link
                                  to={data.link}
                                  className=" w-full rounded-md p-2 flex hover:bg-primary/20"
                                >
                                  {data.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {Menu1.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 hover:text-orange-500 duration-200"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul
              className={`bg-white text-black px-4 py-2 lg:hidden font-serif ${
                isMenuOpen ? "" : "hidden"
              }`}
            >
             

              <div className="bg-black h-[0.01rem] m-2 "></div>
              <li className="group relative cursor-pointer ml-4">
                <Link
                  to="#"
                  className="flex items-center gap-[2px]   hover:text-orange-500 "
                >
                  Jewellery
                  <span>
                    <FaCaretRight className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </Link>

                <div className="  z-[9999] hidden group-hover:block w-[280px] rounded-md bg-white p-2 text-black ">
                  <ul>
                    {DropdownLink.map((data) => (
                      <li key={data.id}>
                        <ul
                          
                          className="group/{jewellery}   w-full rounded-md p-2 flex "
                        >
                          {data.name}
                          <span>
                            <FaCaretRight className="transition-all duration-200 mt-1  " />
                          </span>

                          <ul className="  z-[9999] w-full rounded-md p-2 hidden group-hover/{jewellery}:block hover:bg-primary/20">
                            {Subtitle1.map((data) => (
                              <li key={data.id}>
                                <Link
                                  to={data.link}
                                  className=" w-full rounded-md p-2 flex hover:bg-primary/20"
                                >
                                  {data.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {Menu1.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 hover:text-orange-500 duration-200"
                  >
                    {data.name}
                  </Link>
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
