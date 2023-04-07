import React, {useEffect} from 'react'
import treasury from '../Assets/Picture5.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
function TreasuryService() {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
  return (
    <>
        <section id='treasury' className='container mx-auto px-10'>
        <div className='my-24'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-5xl'>Treasury Management</h1>
        </div>
        <div  className="flex flex-col-reverse mt-5 md:flex-row items-center justify-between px-5 md:px-10 container mb-8">
            <div className="flex-1 p-3 items-start flex flex-col gap-4">
                <ul className='text-[15px] px-0'>
                    <li className='list-disc'>Forecasting of Cash requirements.</li>
                    <li className='list-disc'>Estimation of Working Capital requirements and planning the level of investment in Current Assets.</li>
                    <li className='list-disc'>Establishment of banking relationship.</li>
                    <li className='list-disc'>Arrangement of funds for Working Capital requirements.</li>
                    <li className='list-disc'>Monitoring the credit collection.</li>
                    <li className='list-disc'>Risk Management and Insurance.</li>
                </ul>
                <button className='px-2 py-1 text-lg bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Interested ?</Link></button>
            </div>
            {/* <!-- Image --> */}
            <div className="flex-1 p-3">
                <img src={treasury} className="w-11/12" alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default TreasuryService