import React,  { useState, useEffect } from 'react'

const Wish = ({ cart, setCart }) => {
    const [cart, setCart] = useState([]);
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.Price));
        setPrice(ans);
      };
    
  return (
    <div>
        <Navbar  size={cart.length} />
        <div className="text-center">
            <h2 className=" py-8 text-3xl font-serif">Wishlist</h2>
            {cart?.map((item) => (
                <div key={item.id} >
                    <div className="grid grid-cols-1 sm:grid-cols-5 mx-28 lg:mx-10 md:mx-8 items-center text-black font-serif ">
                        <div>
                            <img
                            src={item.img}
                            alt={item.id}
                            className="h-20 w-20 my-2 rounded-full border border-black"/>
                        </div>

                        <div >
                            <p className="my-2 ">{item.Title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  
    
  )
}

export default Wish