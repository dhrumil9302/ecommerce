import React, { useState, useEffect } from "react";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import p1 from "../assets/cards.png";
import { FaBagShopping } from "react-icons/fa6";
import swal from "sweetalert2";
import Navbar from "../Component/Navbar";
import Swal from "sweetalert2";

const Form = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    contact: "",
    email: "",
    address: "",
    cardnumber:"",
    expmonth:"",
    expyear: "",
    cvv: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOrderClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: "Thank you!",
        text: "Your order has been placed",
        icon: "success",
        confirmButtonText: `<a href="/">Done</a>`,
      });
    } else {
      swal.fire({
        title: "Oops...",
        text: "Please fill out all required fields correctly.",
        icon: "error",
      });
    }
  };
  const validateForm = () => {
    const { fName, lName, contact, email, address,cardnumber,expmonth,expyear,cvv } = formData;
    return (
      fName.trim() !== "" &&
      lName.trim() !== "" &&
      contact.trim().length === 10 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      address.trim() !== "" &&
      cardnumber.trim() !== "" &&
      expmonth.trim() !== "" && 
      expyear.trim() !== "" && 
      cvv.trim() !== ""   
    );
  };
 
  const [price, setPrice] = useState(0);
  // const [cart, setCart] = useState([]);
  const handlePrice = () => {
    let ans = 0;
    if (cart && Array.isArray(cart) && cart.length > 0) {
      ans = cart.reduce((total, item) => total + item.amount * item.Price, 0);
    }

    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });



  return (
    <>
      <Navbar size={cart.length} />

      <div className=" mx-10 my-14 font-serif px-4 rounded-lg grid grid-cols-1 sm:grid-cols-2">
        <div className="my-10  lg:ml-20 md:mx-30 xl:mx-56  flex-col lg:flex-row md:flex-row w-[50%]  ">
         <div className="lg:ml-5 md:ml-5  w-56">
          <div className="flex gap-2 ">
            <span className="text-3xl">
              <MdCall />
            </span>
            <h4 className="text-2xl  md:text-xl xl:text-xl">Contat Details</h4>
          </div>
          <form className="w-full max-w-sm my-4">
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="fName"
                type="text"
                placeholder="First Name *"
                required
                value={formData.fName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="lName"
                type="text"
                placeholder="Last Name *"
                required
                value={formData.lName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="email"
                type="text"
                placeholder="Email ID *"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="contact"
                type="text"
                placeholder="Contact Nummber *"
                required
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="address"
                type="text"
                placeholder="Address*"
                required
                value={formData.address}
                onChange={handleInputChange}/>
            </div>
          </form>
          <div className="my-10  ">
            <div className="flex gap-2">
              <span className="text-3xl">
                <FaBagShopping />
              </span>
              <h4 className="text-2xl xl:text-2xl md:text-xl">Orders</h4>
            </div>
            <div className="my-10 ">
              {cart?.map((item, index) => (
                <div key={index} className="flex justify-between gap-20">
                  <div>
                    <p className="my-2 ">{item.Title}</p>
                  </div>
                  <h1 className="my-2">{item.Price}</h1>
                </div>
              ))}
            </div>
            </div>
            <div className="bg-gray-500 h-px w-60 my-5 hidden sm:block"></div>
            <div className=" font-serif px-10 lg:px-0 md:px-0 flex flex-col md:flex-row lg:flex-row my-5 gap-28">
              <span className=" hidden sm:block">Total</span>
              <span className="">Rs-{price}</span>
            </div>
          </div>
        </div>

        
        <div className="  lg:mx-30 md:mx-20   flex-col lg:flex-row md:flex-row">
          <div className="bg-gray-400 h-auto w-px my-10 mr-10 ml-10 xl:ml-60  hidden sm:block"></div>
          <div className="my-6">
            <div className=" gap-2 my-5   ">
              <span className="text-2xl">Payment</span>
              <h4 className="text-2xl xl:text-2xl md:text-xl my-4">
                Accepted Card
              </h4>
            </div>
            <form className="w-full max-w-sm my-4">
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="cardnumber"
                type="text"
                placeholder="Creadit Card Number*"
                required
                value={formData.cardnumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="exp.month"
                type="text"
                placeholder="Exp.Month*"
                required
                value={formData.expmonth}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="exp.year"
                type="text"
                placeholder="Exp.Year*"
                required
                value={formData.expyear}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                className="bg-slate-100 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                name="cvv"
                type="text"
                placeholder="CVV*"
                required
                value={formData.cvv}
                onChange={handleInputChange}
              />
            </div>
            
            </form>
          </div>
          <button
            onClick={handleOrderClick}
            className="bg-blue-400 rounded-lg p-1 my-6 mx-20 md:mx-7 lg:mx-[30%] xl:mx-[25%] xl:my-10 xl:text-xl font-serif"
          >
            Make Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
