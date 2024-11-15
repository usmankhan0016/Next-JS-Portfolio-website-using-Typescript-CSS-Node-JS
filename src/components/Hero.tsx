/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Navbar from './Navbar'
import "@/app/styles/hero.css"
function Hero() {
  return (
    <div id='hero' className='hero-container'>
    <Navbar/>
    <div className='hero-content'>
        <div className='hidden lg:block'></div>
        <div className='hero-text'>
            <div className='hero-main'>
                <p data-aos="zoom-in-up">I&apos;m</p>
                <p data-aos="zoom-in-up">Usman</p>
                <p data-aos="zoom-in-up">Khan</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero

