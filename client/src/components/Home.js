import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Articles from "../components/Articles";



const Home = () => {
  return (
    <div>

      <Header />
      <Navbar />
      <Articles />
      <Footer />
      
    </div>
  )
}

export default Home;