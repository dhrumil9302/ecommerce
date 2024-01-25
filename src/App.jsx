import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Gift from "./routes/Gift";
import Shop from "./routes/Shop";
import Navbar from "./Component/Navbar";
import Form  from "./routes/Form";
import Contact from "./routes/Contact";
import Productdtails from "./Component/Productdtails";
import Wish from "./routes/Wish";


const App = () => {
  const [show, setshow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // console.log(item);
      let isPresent = false;
      cart.forEach((product)=>{
        if (item.id === product.id)
        isPresent = true;
      })
      if (isPresent)
      return;
    setCart([...cart, item]);
  };0

  return (
    <div className="App">
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/gift" element={<Gift cart={cart} setCart={setCart}/>} />
        <Route path="/product" element={<Shop handleClick={handleClick} />} />
        <Route path="/form" element={<Form cart={cart} setCart={setCart} handleClick={handleClick}  />}></Route>
        {/* <Route path="/payment" element={<Payment cart={cart} setCart={setCart} handleClick={handleClick} />}></Route> */}
        <Route path="/Productdtails" element={<Productdtails/>} ></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/wish" element={<Wish/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
