import React from 'react';
import Footer from '../Component/Footer';

const Contact = () => {
  return (
    <div>
         <div  className='px-4 p-16 xl:p-20 '>
        <div className="bg-gray-200 rounded-xl  lg:mx-48 md:mx-36 xl:mx-48 ">
            <h1 className='font-serif text-center p-4 md:text-xl xl:text-3xl xl:p-8'> Send a message to us!</h1>
            {/* <form className='text-center '>
                <input className="my-2 rounded-md"  placeholder="Name"/>
                <input className="my-2 rounded-md"  placeholder="Email"/>
                <input className="my-2 rounded-md"  placeholder="Subject"/>
                <textarea className="my-2 rounded-md " placeholder="Message" rows="4"></textarea>
            </form> */}
                    <form className="w-full max-w-sm my-4 px-2 lg:mx-28 md:mx-8 xl:mx-72">
      
      <div className="flex items-center border-b border-gray-500 py-2">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Name" />
      </div>
      
      <div className="flex items-center border-b border-gray-500 py-2">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Email" />
      </div>
      <div className="flex items-center border-b border-gray-500 py-2">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Subject" />
      </div>
      <div className="flex items-center border-b border-gray-500 py-2">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Message" rows="4" />
      </div>
    
    </form>
            <div className='text-center '>  <button className='bg-black text-white p-1 rounded-lg m-4'>Send Message</button></div>
           
        </div>
       
       </div>
       <Footer/>
    </div>
  )
}

export default Contact;