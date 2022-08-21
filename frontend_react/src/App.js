import React from 'react'

import './App.scss'

//containers
import { About,Footer,Header,Skills,Testimonial,Work } from './container'

//components
import { Navbar } from './components'


const App = () => {
  return (
    <div className='app'>
      { <Navbar/> }
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App