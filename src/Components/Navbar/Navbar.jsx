import React, {useState} from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNine } from "react-icons/pi";


const Navbar = () => {
  const [active, setactive]= useState("navBar")
  //fct for toggle navbar
  const showNav = ()=>{
    setactive('navBar activeNavbar')
  }
  //fct for close navbar
  const removeNavbar = ()=>{
    setactive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className="header flex">


        <div className="logoDiv">
          <a href="#" className="logo">
            <h1><MdTravelExplore className='icon' />Hello Oran.</h1>
          </a>
        </div>


        <div className={active}>
          <ul className='navList flex'>
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>


            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>


            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>


            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>


            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>


            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>


            <button className='btn'>
              <a href='#'>BOOK NOW </a>
            </button>
           
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle  className='icon' />
          </div>
         
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNine  className='icon' />
        </div>
       
      </header>
   


    </section>
  )
}


export default Navbar
