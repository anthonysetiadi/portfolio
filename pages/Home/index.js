import React from 'react'

import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import About from '../../components/About/About'
import Technology from '../../components/Technology/Technology'
import Promotion from '../../components/Promotion/Promotion'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Technology />
      <Promotion />
    </>
  )
}
export default Home
