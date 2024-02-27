import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>GPT-3 OpenAI By Sabhyaa Pradhan</h1>
        <p>"Let's Build Something with GPT-3 OpenAI" provides hands-on guidance for creating diverse applications using AI. With practical examples and step-by-step tutorials, it inspires both developers and enthusiasts, unlocking the potential of GPT-3 in areas like chatbots and content generation.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address' />
          <button type='button'><a href='https://auth0.openai.com/u/signup/identifier?state=hKFo2SBPbTVGLTlqeUp2WkdlQm10aUxITTFHNTlTUzhpaEZfOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFBmYVk0OFh3Vjktc0dRZXZnX1AtWXlPY25vQTBzRG54o2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q'>Get Started</a></button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
    </div>
  )
}

export default Header
