import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
function Header() {
  return (
    <div className="header section__padding" id='#home'>
      <div className="header-content">
        <h1 className="gradient__text">Let's Build Something amazing with Chat GPT OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="header-content__input">
          <input type="email" placeholder='Your input' />
          <button type='button'>Get Started</button>
        </div>

        <div className="header-content__people">
          <img src={people} alt="people image" />
          <p>5 Million people have requested access</p>
        </div>
        
      </div>
      <div className="header-image">
          <img src={ai} alt="ai image" />
        </div>
    </div>
  )
}
export default Header