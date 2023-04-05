import React from 'react'
import oraclebusiness from '../Assets/oracle-e-business-suite-logo.png' 
import oraclenetwork from '../Assets/oracle-netsuite-logo.png' 
import sap from '../Assets/sap.png' 
import dynamic from '../Assets/dynamics-365-business-central-logo.png' 
import tally from '../Assets/tally-on-cloud.jpg' 
import zoho from '../Assets/zoho-logo.png' 
import sensys from '../Assets/sensys1.jpg.gif' 
import compu from '../Assets/compu-office-logo.png' 
import tim from '../Assets/tim-hortons.jpg' 
import service from '../Assets/service-berry.jpg' 
import ekam from '../Assets/ekam.png' 
import credberg from '../Assets/credberg.jpg' 
import ea from '../Assets/ea.jpg' 
import geocon from '../Assets/geocon.jpg' 
import hb from '../Assets/hb.png' 
import folk from '../Assets/folk-serv.png' 
import greener from '../Assets/greener-pestures.png' 
function Homecomp() {
  return (
    <>
         {/* <!-- Softwares and Clients --> */} 
        <section className="px-10 mt-10 container">
            {/* <!-- Softwares --> */}
            <div className="my-8 md:my-16 text-xl text-lines">Softwares</div>
            <div className="grid grid-cols-2 md:grid-cols-4 w-1/2 mx-auto gap-10 md:gap-x-20 items-center">
                <img src={oraclebusiness} className="transition-all duration-500 company" alt=""/>
                <img src={oraclenetwork} className="transition-all duration-500 company" alt=""/>
                <img src={sap} className="transition-all duration-500 company" alt=""/>
                <img src={dynamic} className="transition-all duration-500 company" alt=""/>
                <img src={tally} className="transition-all duration-500 company" alt=""/>
                <img src={zoho} className="transition-all duration-500 company" alt=""/>
                <img src={sensys} className="transition-all duration-500 company" alt=""/>
                <img src={compu} className="transition-all duration-500 company" alt=""/>
            </div>
            {/* <!-- clients --> */}
            <div className="my-8 md:my-16 text-xl text-lines">Clients</div>
            <div className="grid grid-cols-3 w-64 md:w-1/2 mx-auto gap-8 md:gap-x-20 items-center">
                <img src={tim} className="transition-all duration-500 company" alt=""/>
                <img src={service} className="transition-all duration-500 company" alt=""/>
                <img src={ekam} className="transition-all duration-500 company" alt=""/>
                <img src={credberg} className="transition-all duration-500 company" alt=""/>
                <img src={ea} className="transition-all duration-500 company" alt=""/>
                <img src={geocon} className="transition-all duration-500 company" alt=""/>
                <img src={hb} className="transition-all duration-500 company" alt=""/>
                <img src={folk} className="transition-all duration-500 company" alt=""/>
                <img src={greener} className="transition-all duration-500 company" alt=""/>
            </div>
        </section>
    </>
  )
}

export default Homecomp