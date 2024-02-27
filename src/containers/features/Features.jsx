import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Contextual Understanding',
    text: ' ChatGPT excels in understanding the context of conversations, enabling it to provide relevant and coherent responses. It leverages its vast knowledge base to grasp nuances, anticipate user intent, and maintain meaningful dialogue flow.'
  },
  {
    title: 'Natural Language Generation',
    text: 'With sophisticated natural language generation capabilities, ChatGPT produces responses that mimic human-like language. It crafts coherent sentences, adapts to various conversational styles, and generates text that is grammatically correct and contextually appropriate.'
  },
  {
    title: 'Dynamic Adaptability',
    text: "ChatGPT dynamically adapts to the conversation's evolving context and user preferences. It learns from ongoing interactions, adjusts its responses based on feedback, and continuously improves its performance to deliver more personalized and engaging conversations."
  },
  {
    title: 'Ethical and Safe Interaction',
    text: 'Prioritizing user safety and ethical considerations, ChatGPT is designed to promote responsible interaction. It adheres to strict guidelines to prevent harmful content generation, respects user privacy, and fosters positive and inclusive conversations while mitigating potential biases.'
  }
]

const Features = ({title, text}) => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
