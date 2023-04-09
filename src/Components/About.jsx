import React from 'react'
import AboutHero from './AboutHero'
import AboutText from './AboutText'
import AboutTeam from './AboutTeam'
import AboutTimline from './AboutTimline'
import AboutMap from './AboutMap'
function About() {
  return (
    <>
    <div className='pt-28'>
      <AboutHero/>
      <AboutText/>
      <AboutTeam/>
      <AboutTimline/>
      <AboutMap/>
    </div>
    </>
  )
}

export default About