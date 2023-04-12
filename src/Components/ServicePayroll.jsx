import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ServicePanel from './ServicePanel';
import Footer from './Footer'
import servicebanner from '../Assets/Servicemainbanner.png'
function ServicePayroll() {
  return (
    <>  
        <section className='container mx-auto px-5 lg:px-10 mt-20'>
            <div style={{ backgroundImage:'url('+servicebanner+')' }} className='object-cover bg-cover h-72 flex items-center justify-center rounded-lg p-5 text-center mb-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                <h1 className='text-5xl text-black font-bold'>Payroll Management</h1>
            </div>
            {/* main-topic */}
            <div className='flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b-2 border-black'>
                <div className='flex flex-[0.4]'>
                    <img src="https://www.datocms-assets.com/40521/1614082064-payroll-1.png" className='w-96' alt="" />
                </div>
                <div className='flex flex-[0.6] flex-col items-start'>
                    <h1 className='text-sm font-bold underline underline-offset-4 mb-3'>Introduction</h1>
                    <h1 className='font-bold text-4xl mb-4'>Payroll Management</h1>
                    <p>Payroll management is the administrative task of compensating employees for services rendered. It also provides a financial record of employee gross earnings, payroll deductions and net pay, as well as the employer's related payroll tax liability.</p>
                </div>
            </div>
            {/* points */}
            <div className='pb-5 border-b-2 border-black'>
                <div className='font-bold text-5xl mb-10'>Some Important Points we offer</div>
                <ul className='flex flex-col gap-1'>
                    <li className='flex gap-2'><VerifiedIcon/>We offer a full fledged Payroll solutions ensuring accurate, streamline and consistent execution of payroll and compliance needs.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Get real-time access to your payroll online.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Have payroll taxes calculated for you.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Access expertise and unified technology.</li>
                </ul>
            </div>
            <div className='mt-5'>
                <ServicePanel/>
            </div>
        </section>
        <Footer page1link="/" page1="Home" page2link="/about" page2="About us" page3link="/contact" page3="Contact"/>
    </>
  )
}

export default ServicePayroll