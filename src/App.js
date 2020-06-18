import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import lightClouds from '../../assets/light_clouds.jpg'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <img src={lightClouds} alt='light clouds' className='light-clouds'/>
      <Footer />
    </div>
  )
}

export default App