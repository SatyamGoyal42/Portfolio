import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Buttonn from '../../components/button/Buttonn'

const Home = () => {
  return (
    <div className='home'>
      <div className='hnavbar'>
      <div className='text'>Satyam Goyal</div>
      <Navbar/>
      </div>
      <div className='main'>
        <div className='image'></div>
        <div className='fields'>
          <h1>Hello I'm</h1>
          <h2>Satyam Goyal</h2>
          <h3>Programmer, developer</h3>
          <div className='buttongrp'>
          <Buttonn text = 'Download CV'/>
          <Buttonn text = 'Contact Info'/>

          </div>
          <div className='socials'>
            <div className='ld'></div>
            <div className='gh'></div>
          </div>
        </div>

      </div>

      

    </div>
  )
}

export default Home
