import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
// import Giftcard from "./routes/Giftcard";
import Gift from "./routes/Gift";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/giftcard" element={<Giftcard />} /> */}
        <Route path="/gift" element={<Gift />} />
        
      </Routes>
    
    </div>
    // <>
    // <Navbar/>
    // <Hero/>
    // <Footer/>
    // </>
  );
}

export default App;
