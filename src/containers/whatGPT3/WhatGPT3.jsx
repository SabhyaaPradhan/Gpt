import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a cutting-edge AI language model developed by OpenAI, known for its ability to understand and generate human-like text across diverse tasks and contexts." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'> The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Chatbots are AI programs that simulate conversation with users, using natural language processing to understand queries and provide relevant responses."/>
        <Feature title="Knowledgebase" text="A knowledge base is a centralized repository of information used for storing and sharing knowledge, often consisting of articles, FAQs, and resources to provide answers and guidance on various topics." />
        <Feature title="Education" text="Education is the acquisition of knowledge, skills, and values through formal or informal methods, shaping individuals and societies for personal and collective growth."/>
      </div>
    </div>
  )
}

export default WhatGPT3
