import React, {useEffect} from 'react'
import payroll from '../Assets/Picture8.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
function PayrollService(props) {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
  return (
    <>
        <section id='treasury' className='container mx-auto px-10 border-2 border-black rounded-3xl'>
        <div data-aos="fade-down" className='my-24 flex items-center justify-between'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-xl lg:text-5xl'>Payroll Management</h1>
            <div className='cursor-pointer'>{props.logo}</div>
        </div>
        <div  className="flex flex-col-reverse mt-5 md:flex-row items-center justify-between px-0 lg:px-5 md:px-10 container mb-8">
            <div data-aos="fade-right" className="flex-1 p-3 items-start flex flex-col gap-4">
                <ul className='text-[15px] px-0'>
                    <li className='list-disc'>We offer a full fledged Payroll solutions ensuring accurate, streamline and consistent execution of payroll and compliance needs.</li>
                    <li className='list-disc'>Get real-time access to your payroll online.</li>
                    <li className='list-disc'>Have payroll taxes calculated for you.</li>
                    <li className='list-disc'>Access expertise and unified technology.</li>
                </ul>
                <button className='px-2 py-1 text-lg bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Interested ?</Link></button>
            </div>
            {/* <!-- Image --> */}
            <div data-aos="fade-left" className="flex-1 p-3">
                <img src={payroll} className="w-11/12" alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default PayrollService