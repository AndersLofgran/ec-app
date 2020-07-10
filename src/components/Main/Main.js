import React from 'react'
import Bio from './Bio/Bio'
import cloudBkg from '../../assets/light_clouds.jpg'
import forestBkg from '../../assets/sun_in_forest.jpg'
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
    {/* background images */}
      <img src={cloudBkg} className='bkg-img'/>
      <img src={forestBkg} className='bkg-img' />
      
    {/* main content */}
      <div className='main-content'>
        <p className='intro-quote'>" Art inspires you to do some cool stuff, yeah. "</p>
        <Bio />
      </div>
    </div>
  );
}

export default Main