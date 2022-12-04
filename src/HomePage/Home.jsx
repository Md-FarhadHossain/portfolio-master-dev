import React from 'react'
import AboutMe from './AboutMe'
import Main from './Main/Main'
import Projects from './Projects'

const Home = () => {
  return (
    <section className='container mx-auto px-4 lg:px-36 py-16 '>
        <AboutMe />
        <Main />
        <Projects />
    </section>
  )
}

export default Home