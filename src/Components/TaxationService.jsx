import React,  {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Tax from '../Assets/Picture7.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
function TaxationService() {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
    
  return (
    <>
        <section id='ERF' className='container mx-auto px-10'>
        <div data-aos="fade-up" className='my-24'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-5xl'>Taxation & Compliances</h1>
        </div>
        <div   className="flex flex-col mt-5 md:flex-row items-center justify-between px-5 md:px-10 container gap-10 mb-8">
            {/* <!-- Image --> */}
            <div data-aos="fade-right" className="flex-1 p-3">
                <img src={Tax} className="" alt=""/>
            </div>
            <div data-aos="fade-left" className="flex-1 p-3 items-start flex flex-col gap-4">
                <ul className='text-[15px] px-0'>
                    <li className='list-disc'>Registrations under various Tax Laws</li>
                    <li className='list-disc'>Assistance in compliance.</li>
                    <li className='list-disc'>Preparation of Tax Returns.</li>
                    <li className='list-disc'>GST consultancy.</li>
                    <li className='list-disc'>TDS filing.</li>
                    <li className='list-disc'>Advising on Tax Planning.</li>
                    <li className='list-disc'>MCA compliances,</li>
                    <li className='list-disc'>Company Incorporation.</li>
                    <li className='list-disc'>Payroll related statutory compliances.</li>
                    <li className='list-disc'>Trademark Registration.</li>
                </ul>
                <button className='px-2 py-1 text-lg bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Interested ?</Link></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default TaxationService