import React,  { useState }  from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Footer from "../Component/Footer";


const Home = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar size={cart.length} />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
