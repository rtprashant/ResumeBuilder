import React from 'react'
import Hero from './Hero'
import About from './About'
import ResumeExamples from './ResumeExamples'

function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <About/>
      <ResumeExamples/>
    </div>
  )
}

export default Home
