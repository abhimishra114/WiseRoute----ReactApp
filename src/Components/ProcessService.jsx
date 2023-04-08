import React,  {useEffect} from 'react'
import { Link } from 'react-router-dom'
import process from '../Assets/Picture9.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
function ProcessService(props) {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
    
  return (
    <>
        <section id='ERF' className='container mx-auto px-10 border-2 border-black rounded-3xl'>
        <div data-aos="fade-up" className='my-24 flex items-center justify-between'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-xl lg:text-5xl'>Taxation & Compliances</h1>
            <div className='cursor-pointer'>{props.logo}</div>
        </div>
        <div   className="flex flex-col mt-5 md:flex-row items-center justify-between px-0 lg:px-5 md:px-10 container gap-10 mb-8">
            {/* <!-- Image --> */}
            <div data-aos="fade-right" className="flex-1 p-3">
                <img src={process} className="" alt=""/>
            </div>
            <div data-aos="fade-left" className="flex-1 p-3 items-start flex flex-col gap-4">
                <ul className='text-[15px] px-0'>
                    <li className='list-disc'>“Right sourcing for your firm”.</li>
                    <li className='list-disc'>We provide cost driven and client focused services.</li>
                    <li className='list-disc'>Handle R2R processes [Record-to-Report].</li>
                    <li className='list-disc'>Accounts Payable Management.</li>
                    <li className='list-disc'>Accounts Receivable Management.</li>
                    <li className='list-disc'>Bookkeeping Services.</li>
                    <li className='list-disc'>Management Reporting.</li>
                    <li className='list-disc'>We suggest process improvements for better control and recording.</li>
                </ul>
                <button className='px-2 py-1 text-lg bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Interested ?</Link></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProcessService