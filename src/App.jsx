import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Giftcard from "./routes/Giftcard";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giftcard" element={<Giftcard />} />
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
