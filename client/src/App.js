import React from "react";
import {  Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Articles from "./components/Articles";
import Home from "./components/Home";
import Addarticle from "./components/Addarticle";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";



function App() {

 
 

  return (
    <div className="App">
      <Routes> 
      <Route path="/"  element={ <Home />}/>
      <Route path="/articles" element= {<Articles />}/>
      <Route path="/post-article" element= {<Addarticle />}/>
      <Route path="/article/:id" element= { <Article />}/>
      <Route path="/update/:id" element= { <EditArticle />}/>

      </Routes>
    </div>
  );
}

export default App;
