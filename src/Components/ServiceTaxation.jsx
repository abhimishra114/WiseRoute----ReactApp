import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ServicePanel from './ServicePanel';
import Footer from './Footer'
import servicebanner from '../Assets/Servicemainbanner.png'
function ServiceTaxation() {
  return (
    <>  
        <section className='container mx-auto px-5 lg:px-10 mt-20'>
            <div style={{ backgroundImage:'url('+servicebanner+')' }} className='object-cover bg-cover h-72 flex items-center justify-center rounded-lg p-5 text-center mb-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                <h1 className='text-5xl text-black font-bold'>Taxation & Compliances</h1>
            </div>
            {/* main-topic */}
            <div className='flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b-2 border-black'>
                <div className='flex flex-[0.4]'>
                    <img src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/8/1/816d0b1be491155f40b1da4b37e6fd85d05a201bab9c776de3a8e929ac85245f/tax-compliance-mc-slide6.png" className='w-96' alt="" />
                </div>
                <div className='flex flex-[0.6] flex-col items-start'>
                    <h1 className='text-sm font-bold underline underline-offset-4 mb-3'>Introduction</h1>
                    <h1 className='font-bold text-4xl mb-4'>Taxation & Compliances</h1>
                    <p>According to James and Alley, tax compliance is “the willingness of individuals and other taxable entities to act in accordance with the spirit as well as the letter of tax law and administration without the application of enforcement activity”.</p>
                </div>
            </div>
            {/* points */}
            <div className='pb-5 border-b-2 border-black'>
                <div className='font-bold text-5xl mb-10'>Some Important Points we offer</div>
                <ul className='flex flex-col gap-1'>
                    <li className='flex gap-2'><VerifiedIcon/>Registrations under various Tax Laws.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Assistance in compliance.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Preparation of Tax Returns.</li>
                    <li className='flex gap-2'><VerifiedIcon/>GST consultancy.</li>
                    <li className='flex gap-2'><VerifiedIcon/>TDS filing.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Advising on Tax Planning.</li>
                    <li className='flex gap-2'><VerifiedIcon/>MCA compliances.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Company Incorporation.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Payroll related statutory compliances.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Trademark Registration.</li>
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

export default ServiceTaxation