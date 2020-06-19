import React from 'react'
import {BreakpointProvider} from 'react-socks'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import './App.scss'

const App = () => {
  return (
    <BreakpointProvider>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </BreakpointProvider>
  )
}

export default App