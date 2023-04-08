import React, {useEffect} from 'react'
import CFO from '../Assets/Picture3.png'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
function CFOService(props) {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
  return (
    <>
        <section id='CFO' className='container mx-auto rounded-md px-10 border-2 border-black'>
        <div className='my-3 flex items-center justify-between'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-2xl lg:text-5xl'>CFO Service</h1>
            <div className='cursor-pointer'>
                {props.logo}
            </div>
        </div>
        <div  className="flex flex-col-reverse mt-5 md:flex-row items-center justify-between px-0 lg:px-5 md:px-10 container mb-8">
            <div className="flex-1 p-3 items-start flex flex-col gap-4">
                <ul className='text-[15px] px-0'>
                    <li className='list-disc'>Financial Advisory</li>
                    <li className='list-disc'>Managing Accounting Functions</li>
                    <li className='list-disc'>Cash Flow Forecasting</li>
                    <li className='list-disc'>Cost Management</li>
                    <li className='list-disc'>Treasury Management</li>
                    <li className='list-disc'>Debtor and Creditor Management</li>
                    <li className='list-disc'>MIS Reporting & Financial Analysis</li>
                    <li className='list-disc'>Year End Accounts Closure and Filing</li>
                    <li className='list-disc'>Compliances of the various Acts applicable</li>
                    <li className='list-disc'>Audit Support</li>
                    <li className='list-disc'>Strengthening Internal Control systems</li>
                    <li className='list-disc'>Budgeting</li>
                    <li className='list-disc'>HR Services</li>
                </ul>
                <button className='px-2 py-1 text-lg bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Interested ?</Link></button>
            </div>
            {/* <!-- Image --> */}
            <div className="flex-1 p-3">
                <img src={CFO} className="" alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default CFOService