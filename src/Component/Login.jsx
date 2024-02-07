import React from "react";
import Footer from "./Footer";


const Login = () => {
  return (
    <div className="bg-clip text-transparent bg-gradient-to-r absolute from-violet-300 to-purple-700 w-full h-screen px-5 lg:py-5 py-24 xl:py-0">
      <div className="text-black  bg-slate-500 backdrop-blur-xl bg-white/30 ... xl:mx-96 md:mx-56 md:my-5   lg:mx-80 lg:my-32  text-center rounded-xl ">
        <h1 className="font-serif font-semiboldd text-2xl pt-10 xl:text-4xl ">Login</h1>

        <form className="mx-10" action="/Home">
          <div className="flex items-center border-b border-black py-2 text-black my-5">
            <input
              className="appearance-none bg-transparent border-none w-full placeholder:text-blue-950 xl:text-2xl mr-3 py-1 px-2 leading-tight focus:outline-none"
              name="email"
              type="email"
              placeholder="Email*"
              required
              // value={formData.Email}
              // onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center border-b border-black py-2 text-black">
            <input
              className=" appearance-none bg-transparent border-none w-full placeholder:text-blue-950 xl:text-2xl mr-3 py-1 px-2 leading-tight focus:outline-none"
              name="password"
              type="password"
              placeholder="Password*"
              required
              // value={formData.password}
              // onChange={handleInputChange}
            />
          </div>
        

          <div className="flex justify-between  lg:gap-4 md:gap-20 mt-5 items-center">
        <div className="flex text-sm xl:text-lg ">
          <input type="checkbox" />
          <p > Remember Me ? </p>
        </div>
        
        </div>
        <button type="submit" className="bg-black text-white mt-10 py-2 w-full px-10 rounded-xl xl:text-2xl ">
          Login
        </button>
        <p className="text-end py-4 text-xs xl:text-xl">Forgot Password?</p>
        </form>
        <p className="xl:text-xl text-xs py-4">Do not have a  an account ? <a href="/SignUp" className="xl:text-xl  group hover:text-gray-200"> Sign Up</a></p>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Login;
