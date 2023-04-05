import React from 'react'
import ServiceHerosection from './ServiceHerosection'
import ServiceIntro from '../Components/ServiceIntro'
import ServiceTextBox from './ServiceTextBox'
function Services() {
  return (
    <>
      <div>
        <ServiceHerosection/>
        <ServiceIntro/>
        <ServiceTextBox/>
      </div>
    </>
  )
}

export default Services