import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import  "@/app/styles/navbar.css"

function Navbar() {
  const [IsMenuOpen, SetIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    SetIsMenuOpen(!IsMenuOpen)
  }
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className='navbar-brand'> Usman Khan </div>
            <ul className={`navbar-links ${IsMenuOpen? 'open' : ''}`}>
                <li className='navbar-link'><a href="#hero">Home</a></li>
                <li className='navbar-link'><a href="#about">About</a></li>
                <li className='navbar-link'><a href="#projects">Project</a></li>
                <li className='navbar-link'><a href="#skills">Skills</a></li>
                <li className='navbar-link'><a href="#contact">Contact</a></li>
            </ul>
          <div className='navbar-menu-icon' onClick={toggleMenu}>

            {IsMenuOpen? <AiOutlineClose size={30}/>:
           <AiOutlineMenu size={30}/>
            }
          </div>
        </div>

      {IsMenuOpen && (
        <ul className={`narbar-menu ${IsMenuOpen? 'open': ''}`}>
          <li className='navbar-link'>
            <a href="#home" onClick={toggleMenu}>Home</a>
          </li>
          <li className='navbar-link'>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className='navbar-link'>
            <a href="#projects" onClick={toggleMenu}>Project</a>
          </li>
          <li className='navbar-link'>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className='navbar-link'>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
          
        </ul>
      )

      }      

    </div>
  )
}

export default Navbar
