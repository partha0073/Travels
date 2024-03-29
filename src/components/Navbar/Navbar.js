import React, { useState } from "react";
import './navbar.css'
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  //Code to toggle/show navBar
  const[active,setActive]=useState('navBar');
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }
  // code to remove navbar
  const removeNav = ()=>{
    setActive('navBar')
  }

  // code to add nav background when scroll
  const[transparent,setTransparent]=useState('header');
  const addBg= ()=>{
    if(window.scrollY >=10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')

    }
  }
window.addEventListener('scroll',addBg)

  return (
    <section className="navBarSection">
      <div className={transparent}>
        {/* logo */}
        <div className="logoDiv">
          <a href="/" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" /> SR Travels
            </h1>
          </a>
        </div>

        {/*navbar*/}

        <div className={active}>
          <ul className="navLists flex">
           
            <li className="navItem">
            <a href="/" className="navLink">Home</a>
            </li>
            
            <li className="navItem">
            <a href="/" className="navLink">Products</a>
            </li>

            <li className="navItem">
            <a href="/" className="navLink">Resources</a>
            </li>

            <li className="navItem">
            <a href="/" className="navLink">Contacts</a>
            </li>

            <li className="navItem">
            <a href="/" className="navLink">Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="/">Login</a>
              </button>

              <button className="btn">
                <a href="/">Sign Up</a>
              </button>
            </div>

          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
            </div>
        </div>

        <div onClick={showNav} className="toggleNavbar"><TbGridDots className="icon"/></div>
      </div>
    </section>
  );
}

export default Navbar;
