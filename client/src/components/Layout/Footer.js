import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
        <span>
            &copy;{ new Date().getFullYear()} All Right resurved 
        </span>
    </FooterContainer>
  )
}

export default Footer;
const FooterContainer = styled.footer`
background: gray;
height: 50px;
left: 0;
bottom: 0;
width: 100%;

span{
    color:white;
    position: relative;
    left:20px;
    top:10px;
    
}

`;