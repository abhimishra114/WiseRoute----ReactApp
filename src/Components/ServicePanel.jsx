import React, {useEffect} from 'react'
import triangle from '../Assets/Picture2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
function ServicePanel() {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
  return (
    <>
        <section id='introduction' className='container mx-auto px-5 md:px-10'>
        <div className='my-24'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-5xl'>Services that we Offer</h1>
        </div>
        <div  className="flex flex-col-reverse mt-5 md:flex-row items-center justify-between px-10 container mb-8">
            <div className="flex-1 p-3 items-start flex flex-col gap-4">
                <div className='grid grid-cols-2 gap-5'>
                    <button className='bg-white box transition duration-500 px-4 py-2 rounded-md text-sm lg:text-2xl font-bold hover:hover-box'><a href="#CFO">CFO Service</a></button>
                    <button className='bg-white box transition duration-500 px-4 py-2 rounded-md text-sm lg:text-2xl font-bold hover:hover-box '><a href="#ERF">ERF Functional Consultancy</a></button>
                    <button className='bg-white box transition-transform duration-500 px-4 py-2 rounded-md text-sm lg:text-2xl font-bold hover:hover-box'><a href="#treasury">Treasury Management</a></button>
                    <button className='bg-white box transition duration-500 px-4 py-2 rounded-md text-sm lg:text-2xl font-bold hover:hover-box'><a href="#tax">Taxation & Compliances</a></button>
                    <button className='bg-white box transition duration-500 px-4 py-2 rounded-md text-sm lg:text-2xl font-bold hover:hover-box'><a href="#payroll">Payroll Management</a></button>
                    <button className='bg-white box transition duration-500 px-4 py-2 rounded-md text-sm lg:text-2xl font-bold hover:hover-box'><a href="#out">Process Outsourching</a></button>
                </div>
            </div>
            {/* <!-- Image --> */}
            <div className="flex-1 p-3">
                <img src={triangle} className="w-11/12 mx-auto" alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default ServicePanel