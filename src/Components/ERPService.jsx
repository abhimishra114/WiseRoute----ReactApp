import React, {useEffect} from 'react'
import ERP from '../Assets/Picture4.png'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
function ERPService(props) {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
  return (
    <>
        <section id='ERF' className='container mx-auto px-10 rounded-md border-2 border-black'>
        <div className='my-3 flex items-center justify-between'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-2xl lg:text-5xl'>ERP Service</h1>
            <div className='cursor-pointer'>
                {props.logo}
            </div>
        </div>
        <div  className="flex flex-col mt-5 md:flex-row items-center justify-between px-0 md:px-10 container gap-10 mb-8">
            {/* <!-- Image --> */}
            <div className="flex-1 p-3">
                <img src={ERP} className="" alt=""/>
            </div>
            <div className="flex-1 p-3 items-start flex flex-col gap-4">
                <ul className='text-[15px] px-0'>
                    <li className='list-disc'>Understand Business requirement and evaluate potential ERP solutions</li>
                    <li className='list-disc'>Advice as to which software to choose and which modules to select within the software.</li>
                    <li className='list-disc'>Accurately map workflow and ensure proper integration at the point of use.</li>
                    <li className='list-disc'>Recognize and avoid pitfalls such as scope creep, inadequate testing and poor data cleansing.</li>
                    <li className='list-disc'>Formulate and ensure smooth and successful migration of the data from the legacy system.</li>
                </ul>
                <button className='px-2 py-1 text-lg bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Interested ?</Link></button>
            </div>
        </div>
    </section>
    </>
  )
}

export default ERPService