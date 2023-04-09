import React from 'react'
import servicebanner from '../Assets/servicebanner.png'
import {Link} from 'react-router-dom'
function ServiceHerosection() {
  return (
    <>
    <div className='container px-5 mx-auto'>
        <div style={{ backgroundImage:`url(${servicebanner})` }} className='mt-20 relative bg-cover w-full h-64 md:h-96 lg:h-100 rounded-md shadow-main'>
            <div className="flex-col flex p-5 lg:pr-52 gap-2 md:gap-5 absolute z-30 top-7 md:top-1/3 drop-shadow-2xl">
                        <h1 className='text-white font-bold text-6xl md:text-8xl'>Services</h1>
                          {/* <!-- animated text desc --> */}
                        <h1 className="text-xs lg:text-2xl md:font-bold text-white">Upgrade Your Finance & Accounting Systems With WiseRoute Financial Advisory Pvt Ltd.</h1>
                        {/* <!-- button --> */}
                        <button className="px-4 font-bold py-2 text-lg text-black w-fit bg-white rounded-md cursor-pointer"><Link to='/'>Explore</Link></button>
                    </div>
            </div>

        </div>
    </>
  )
}

export default ServiceHerosection