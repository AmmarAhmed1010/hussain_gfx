import React from 'react'
import Hero from './components/Hero'
import Faq from './components/Faq'
import DualSlider from './components/InfiniteSlider'

const page = () => {
  return (
    <div>
      <Hero/>

      <DualSlider/>
      <Faq/>
    </div>
  )
}

export default page
