import React from 'react'
import './home.css'
import photoo from '../../images/photo.jpg';

function Home() {
  return (
    <div>


      <div className='container'>
      <p className='home_p1'>Hello, I'm</p>
      <p className='home_p2'><span className='home_p2_span'>P</span>andit<span className='home_p2_span1'>U</span>tkarsh</p>
      <p className='home_p3'>A Creative Web Developer <span className='home_p3_span'>From India</span></p>
      <p className='home_p4'>I'm very Passionate and Dedicated Towards My Work</p>
      <p className='home_p5'></p>
      </div>
      <img className='photo' src={photoo} alt="" />

    </div>
  )
}

export default Home
