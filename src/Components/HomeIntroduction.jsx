import React from 'react'
import img from '../Assets/intro-img.svg'
// import {Link} from 'react-router-dom'
function HomeIntroduction() {
  return (
    <>
    <section id='introduction'>
        <div  className="flex flex-col-reverse mt-5 md:flex-row items-center justify-between px-10 container mb-8">
            <div className="flex-1 p-3 items-start flex flex-col gap-4">
                <h1 className="font-bold text-3xl text-red-500 relative text-design">Introduction</h1>
                <h1 className="text-lg">Wise-Route is a blend of multi-disciplined professionals, focused on providing finance and accounting outsourcing services. As a high-quality bookkeeping and accounting outsourcing company, Wise-Route supports its customers in enhancing efficiency and reducing costs.</h1>
                <button className='px-2 py-1 text-lg bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><a href='#whatwedo'>why us</a></button>
            </div>
            {/* <!-- Image --> */}
            <div className="flex-1 p-3">
                <img src={img} className="w-11/12" alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeIntroduction