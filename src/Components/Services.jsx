import React from 'react'
import ServiceHerosection from './ServiceHerosection'
import ServiceIntro from '../Components/ServiceIntro'
import ServiceTextBox from './ServiceTextBox'
import ServicePanel from './ServicePanel'
import CFOService from './CFOService'
import ERPService from './ERPService'
import TreasuryService from './TreasuryService'
import TaxationService from './TaxationService'
function Services() {
  return (
    <>
      <div>
        <ServiceHerosection/>
        <ServiceIntro/>
        <ServiceTextBox/>
        <ServicePanel/>
      </div>
    </>
  )
}

export default Services