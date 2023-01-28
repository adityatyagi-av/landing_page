import React from 'react';
import { Footer,Blog,Possibility,Features,What,Header} from './containers';
import {CTA,Brand,Navbar} from './components'
import './App.css'
const App = () => {
  return (
    <>
    <div className="app">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <What/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>

    </>
  )
}

export default App