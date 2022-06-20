import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarComponent>
 <span>NavBar</span>
 <Link to="/"   > Home</Link>
 <Link to="/post-article"   > Add Article</Link>
 <Link to="/articles"  > View blog</Link>
 <Link to="/"   > About</Link>

    </NavbarComponent>
  )
}

export default Navbar;
const NavbarComponent = styled.div `
background:black;
height:50px;
margin-bottom: 5px;

a {
    color: white;
    float:right; 
    margin-left: 20px; 
    text-decoration: none;
    padding:10px;
    
}
span{
    color: white;
    font-size:20px;
    position: relative;
    top:10px;
    margin-left: 20px;
}
`;