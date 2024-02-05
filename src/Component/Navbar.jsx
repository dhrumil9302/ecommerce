import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { GiFleurDeLys } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { FaCaretDown, FaSnapchat } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
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
    name: "Gallary",
    link: "/Product",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/Contact",
  },
];
const DropdownLink = [
  {
    id: 1,
    name: "Rings",
    link: "/Categories/Rings",
  },
  {
    id: 2,
    name: "Earrings",
    link: "/Categories/Earrings",
  },
  {
    id: 3,
    name: "Nacklace",
    link: "/Categories/Nacklace",
  },
  {
    id: 4,
    name: "Bangles & Bracelets",
    link: "/Categories/Bangles",
  },
  {
    id: 5,
    name: "Chian & pendants",
    link: "/Categories/Chian",
  },
  {
    id: 6,
    name: "Others Jewellery",
    link: "/#",
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
          <div className="  dark:bg-gray-900  dark:text-white ">
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
                <input
                  type="text"
                  placeholder="search"
                  className="hidden sm:block w-[5000px] h-6 mt-3 mr-1  text-black  sm:w-[100px] hover:w-[200px] transition-all duration-300 rounded-full border border-grey-300 px-2  focus:outline-none focus:border-1"
                />

                <div className="group relative cursor-pointer font-serif  ">
                  <a>
                    <span className=" bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full hidden sm:block">
                      <IoPerson className="transition-all duration-200 group-hover:rotate-0 size-3 mt-1" />
                    </span>
                  </a>
                  <div className=" absolute z-[9999] hidden group-hover:block w-[280px] rounded-md bg-white p-2 text-black shadow-md right-0 ">
                    <h1 className="text-xl font-bold">Your Account</h1>
                    <p className="text-sm">
                      Track Your Orders, Manage Payment, Edit Profile And Much
                      More..
                    </p>
                    <div className="grid gap-2 mt-3">
                      <a
                        href="Login"
                        className="bg-blue-400 rounded-md text-center"
                      >
                        LOGIN
                      </a>
                      <a
                        href="Signup"
                        className="bg-blue-200 hover:bg-blue-400 rounded-md text-center"
                      >
                        SIGN UP
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="/"
                  className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full hidden sm:block"
                >
                  <span className="transition-all duration-200">
                    <FaRegHeart className="size-3 mt-1" />
                    {/* <span className="bg-red-600 text-white w-4 h-5  rounded-full absolute top-1  right-10 text-center leading-5">
                      {size}
                    </span> */}
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
            <div className=" mx-4 flex justify-end">
              <input
                type="text"
                placeholder="search"
                className="w-[500px] h-6 mt-3 mr-2 text-black  sm:w-[100px] hover:w-[200px] transition-all duration-300 rounded-full border border-grey-300 px-2  focus:outline-none focus:border-1"
              />

              <div className="group relative cursor-pointer font-serif  bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full  ">
                <a>
                  <span >
                    <IoPerson className="transition-all duration-200 group-hover:rotate-0 size-3 mt-1" />
                  </span>
                </a>
                <div className=" absolute z-[9999] hidden group-hover:block w-[230px] rounded-md bg-white p-2 text-black shadow-md right-0 mt-3 ">
                  <h1 className="text-xl font-bold">Your Account</h1>
                  <p className="text-sm">
                    Track Your Orders, Manage Payment, Edit Profile And Much
                    More..
                  </p>
                  <div className="grid gap-2 mt-3">
                    <a
                      href="Login"
                      className="bg-blue-400 rounded-md text-center"
                    >
                      LOGIN
                    </a>
                    <a
                      href="Signup"
                      className="bg-blue-200 hover:bg-blue-400 rounded-md text-center"
                    >
                      SIGN UP
                    </a>
                  </div>
                </div>
              </div>
             
              <a
                href="/"
                className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full "
              >
                <span className="">
                  <FaRegHeart className="size-3 mt-1" />
                </span>
              </a>
              <Link
                to="/gift"
                className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full  "
              >
                <span className="transition-all duration-200">
                  <IoMdCart className="size-3 mt-1" />
                  <span className="bg-red-600 text-white w-4 h-5  rounded-full absolute top-11  right-3 text-center leading-5">
                    {size}
                  </span>
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

                <div className=" absolute z-[9999] hidden group-hover:block w-[280px] rounded-md bg-white p-2 text-black shadow-md ">
                  <ul>
                    {DropdownLink.map((data) => (
                      <li key={data.id}>
                        <ul className="group/{jewellery}   w-full rounded-md p-2 flex hover:bg-primary/20">
                          <Link
                            to={data.link}
                            className=" w-full rounded-md p-2 flex "
                          >
                            {data.name}
                          </Link>
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
              <li className="group relative cursor-pointer ml-2 ">
                <a
                  href="#"
                  className="flex items-center gap-[2px] py-2  hover:text-orange-500 "
                >
                  Gold Rate
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className=" absolute z-[9999] hidden group-hover:block w-[280px] rounded-md bg-white p-2 text-black shadow-md ">
                  <h3>TODAY's Gold Rate</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>24 KT (1000)</td>
                        <td>- ₹ 6370/g</td>
                      </tr>
                      <tr>
                        <td>22 KT (916)</td>
                        <td>- ₹ 5815/g</td>
                      </tr>
                      <tr>
                        <td>18 KT (750)</td>
                        <td>- ₹ 5815/g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
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
                        <ul className="group/{jewellery}   w-full rounded-md p-2 flex ">
                          {data.name}
                          <span>
                            <FaCaretRight className="transition-all duration-200 mt-1  " />
                          </span>
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
