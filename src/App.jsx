import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
// import Giftcard from "./routes/Giftcard";
import Gift from "./routes/Gift";
import Shop from "./routes/Shop";
import Navbar from "./Component/Navbar";

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
  };

  return (
    <div className="App">
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/giftcard" element={<Giftcard />} /> */}
        <Route path="/gift" element={<Gift cart={cart} setCart={setCart}/>} />
        <Route path="/product" element={<Shop handleClick={handleClick} />} />
      </Routes>
    </div>
  );
};

export default App;
