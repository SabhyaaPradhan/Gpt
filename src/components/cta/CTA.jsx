import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possibilities</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type="button"><a href='https://auth0.openai.com/u/signup/identifier?state=hKFo2SBPbTVGLTlqeUp2WkdlQm10aUxITTFHNTlTUzhpaEZfOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFBmYVk0OFh3Vjktc0dRZXZnX1AtWXlPY25vQTBzRG54o2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q'>Get Started</a></button>
      </div>
    </div>
  )
}

export default CTA
