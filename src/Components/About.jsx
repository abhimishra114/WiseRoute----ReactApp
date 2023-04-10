import React from 'react'
import AboutHero from './AboutHero'
import AboutText from './AboutText'
import AboutTeam from './AboutTeam'
import AboutTimline from './AboutTimline'
import AboutMap from './AboutMap'
import Footer from './Footer'
function About() {
  return (
    <>
    <div className='pt-28 overflow-hidden'>
      <AboutHero/>
      <AboutText/>
      <AboutTeam/>
      <AboutTimline/>
      <AboutMap/>
      <Footer page1link="/" page1="Home" page2link="/service" page2="Services" page3link="/contact" page3="Contact"/>
    </div>
    </>
  )
}

export default About