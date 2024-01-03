import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { GiFleurDeLys } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import J1 from "../assets/j1.jpg";
// import  DropdownLinks from "react-dropdown";



const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  

];
const Menu1 = [
  {
    id: 2,
    name: "About Us",
    link: "/#",
  },
  {
    id: 3,
    name: "Gift Card",
    link: "/#",
  },
  {
    id: 3,
    name: "Our Brands",
    link: "/#",
  },
]


const DropdownLink = [
  {
    id: 1,
    name: "Earrings",
    link: "/#",
  },
  {
    id: 2,
    name: "Bracletes",
    link: "/#",
  },
  {
    id: 3,
    name: "Bangles",
    link: "/#",
  },
  {
    id: 4,
    name: "Chains",
    link: "/#",
  },
  {
    id: 5,
    name: "Nacklaces",
    link: "/#",
  },
  {
    id: 5,
    name: "Ring",
    link: "/#",
  },


];


const Navbar = () => {
  return (
<div>
  <div className="shadow-md w-full">
    <div className=" bg-white dark:bg-gray-900 dark:text-white ">
      <div className="text-4xl sm:text-5xl mx-2  flex  ">
        <div className=" items-center ">
          <GiFleurDeLys />
        </div>
        <div>
          <div className="text-base  font-serif  mt-0 sm:mt-2">
            <span className="text-4xl  ">KD</span><i className="text-xs md:text-base">jewellers</i>
              {/* <p className="text-xs md:text-base ">
              <span>Our Jewellery ... Your Style ...</span>
              </p> */}
          </div>
        </div>
        <div className="ml-[32%] mr-[3%] sm:ml-[53%] mr-[5%]  md:ml-[55%] mr-[5%] lg:ml-[65%] mr-[5%] flex">
          <button className
                onClick={() => alert("search not available yet")}
                classname="bg-white border border-slate-500 transition-all duration-200 text-black   h-6 mt-3 m-0.5 px-1 md:px-2  rounded-full">
              <span className="transition-all duration-200">
                {/* <IoMdSearch className="size-3" /> */}
              </span>
          </button>
          <button
                onClick={() => alert(" not available yet")}
                className="bg-white border border-slate-500 transition-all duration-200 text-black  h-6 mt-3 m-0.5 px-1 md:px-2 rounded-full ">
              <span className="transition-all duration-200">
               < IoPerson className="size-3" />
              </span>
          </button>
          <button
                onClick={() => alert("Cart not available yet")}
                className="bg-white border border-slate-500 transition-all duration-200 text-black h-6 mt-3 m-0.5 px-1 md:px-2  rounded-full">
              <span className="transition-all duration-200">
                <IoMdCart className="size-3" />
              </span>
          </button>
        </div>
      </div>
    </div>
        
        <div className="flex justify-center font-serif">
          <ul className="sm:flex hidden items-center gap-4">
            {
              Menu.map((data) =>(
                <li key={data.id} >
                  <a href={data.link} className="inline-block px-4 hover:text-orange-500 duration-200">
                    {data.name}
                 </a>
                </li>
              ))
            }

              <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Jewellery
                <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-black p-2 text-white shadow-md">
                <ul>
                  {DropdownLink.map((data) => (
                    <li key={data.id}>
                      <a 
                      href={data.link}    className=" inline-block w-full rounded-md p-2 hover:bg-primary/20">
                        {data.name}
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



      {/* <div className="flex justify-between md:mt-10 lg:mt-10 mb-3 w-full  flex-col sm:flex-row md:flex-row lg:flex-row">
        <div className="w-1/1.5 h-96 mt-5 ">
          <img src={J1} alt="image" className=" w-[18rem] h-62 md:w-[40rem] md:h-64  lg:w-[1150px]  lg:h-[360px] ml-4 min-[425px]:w-[24.50rem] min-[375px]:w-[21.50rem] rounded-lg"/>
        </div>
      <div className="ml-14 lg:ml-14 md:mt-11 lg:mt-20 md:w-1/2 lg:w-1/2  min-[425px]:mt-[-80px] min-[375px]:mt-[-130px] mt-[-180px]">
    <h6 className="text-base lg:text-xl">--- New Collection ---</h6>
    <h2 className="text-3xl lg:text-3xl mt-2">JEWELLERY</h2>
    <p className="text-[14px] md:text-[13px] lg:text-[14px] mt-2">your love for diamonds meets our  promise to make them yours. Take home the the promise of a brighter tommorow. <br/> Paired to perfection .</p>
    <button  onClick={() => alert("Cart not available yet")}
      className="bg-sky-400 border-black px-6 py-[10px] rounded-full text-sm mt-2 lg:mt-3">Shop Now..
    </button>
  </div>
</div>  */}




</div>
  );
};

export default Navbar;
