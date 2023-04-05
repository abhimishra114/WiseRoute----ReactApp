import React from 'react'
import box1 from '../Assets/id-card.svg'
import box2 from '../Assets/hanshake.svg'
import box3 from '../Assets/target.svg'
import {Link} from 'react-router-dom'
function HomeBlock() {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-8 mb-8 container mx-auto">
            {/* <!-- first-block --> */}
            <div className="box flex flex-col items-center text-center rounded-lg gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                <img src={box1} className="w-1/3" alt=""/>
                <h1 className="text-3xl sm:text-2xl font-bold">Who we are</h1>
                <h1 className="text-lg text-center">We are a team of experienced professionals offering financial advisory services for 20+ years.</h1>
                <h1 className="text-blue-600"><Link to="/about">Learn More <span>&rarr;</span></Link></h1>
            </div>
            {/* <!-- Second-block --> */}
            <div className="box flex flex-col items-center text-center rounded-lg gap-5 md:gap-3 p-8 transition duration-500 hover-box">
                <img src={box2} className="w-1/3" alt=""/>
                <h1 className="text-3xl md:text-2xl font-bold">Core Values</h1>
                <h1 className="text-lg text-center">Accountability Integrity Innovative Client focused Knowledge Driven Optimally Strategize Create an Impact.</h1>
                <h1 className="text-blue-600"><Link to="/about">Learn More <span>&rarr;</span></Link></h1>
            </div>
            {/* <!-- Third-block --> */}
            <div className="box flex flex-col items-center text-center rounded-lg gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                <img src={box3} className="w-1/3" alt=""/>
                <h1 className="text-3xl md:text-2xl font-bold">Mission</h1>
                <h1 className="text-lg text-center">To be the preferred partner, for right sourcing CFO services and ERP Mapping Consultants.</h1>
                <h1 className="text-blue-600"><Link to="/about">Learn More <span>&rarr;</span></Link></h1>
            </div>
        </div>
    </>
  )
}

export default HomeBlock