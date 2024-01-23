import React from 'react'
import {Footer, Blog, Features, Header, Possibility, Whatgpt3} from './container'
import {Navbar, Brand, Cta} from './components'
import './App.css'
const App = () => {
  return (
    
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App