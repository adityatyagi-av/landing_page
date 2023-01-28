import React from 'react'
import { Feature } from '../../components'
import './what.css'
function whatGPT3() {
  return (
    <div className="what section__margin" id="wgpt3">
      <div className="what-feature">
        <Feature/>
      </div>
      <div className="what-heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="what-container">
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default whatGPT3
