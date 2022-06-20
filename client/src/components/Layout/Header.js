import React from 'react';
import styled from "styled-components";


const Header = () => {
  return (
    <MainContainer>
<h1> Hello from the   <br/> MERN stack blog</h1>

    
    </MainContainer>
  )
}

export default Header;
const MainContainer = styled.header`
background: blue;
height:300px;
text-align:center;
padding:10px;

h1{
  position:relative;
  top:25%;
  color: white;
}

`;