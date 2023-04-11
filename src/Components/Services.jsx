import React from 'react'
import Servicehero from './Servicehero'
import Serviceproject from './Serviceproject'
import ServiceStory from './ServiceStory'
import ServiceBlog from './ServiceBlog'
import ServicePanel from './ServicePanel'
import ServiceTestimonials from './ServiceTestimonials'
import ServiceAccordian from './ServiceAccordian'
import ServiceValue from './ServiceValue'
import Footer from './Footer'
function Services() {
  return (
    <>
      <div className='pt-20'>
        <Servicehero/>
        <Serviceproject/>
        <ServiceStory/>
        <ServiceBlog/>
        <ServicePanel/>
        <ServiceTestimonials/>
        <ServiceAccordian/>
        <ServiceValue/>
        <Footer page1link="/" page1="Home" page2link="/about" page2="About us" page3link="/contact" page3="Contact"/>
      </div>
    </>
  )
}

export default Services