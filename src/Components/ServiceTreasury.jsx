import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ServicePanel from './ServicePanel';
import Footer from './Footer'
import servicebanner from '../Assets/Servicemainbanner.png'
function ServiceTreasury() {
  return (
    <>  
        <section className='container mx-auto px-5 lg:px-10 mt-20'>
            <div style={{ backgroundImage:'url('+servicebanner+')' }} className='object-cover bg-cover h-72 flex items-center justify-center rounded-lg p-5 text-center mb-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                <h1 className='text-5xl text-black font-bold'>Treasury Management</h1>
            </div>
            {/* main-topic */}
            <div className='flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b-2 border-black'>
                <div className='flex flex-[0.4]'>
                    <img src="https://www.processmaker.com/wp-content/uploads/2020/06/treasury-management.png" className='w-96' alt="" />
                </div>
                <div className='flex flex-[0.6] flex-col items-start'>
                    <h1 className='text-sm font-bold underline underline-offset-4 mb-3'>Introduction</h1>
                    <h1 className='font-bold text-4xl mb-4'>Treasury Management</h1>
                    <p>A treasury management system (TMS) is a software application which automates the process of managing a company's financial operations. It helps companies to manage their financial activities, such as cash flow, assets and investments, automatically.</p>
                </div>
            </div>
            {/* points */}
            <div className='pb-5 border-b-2 border-black'>
                <div className='font-bold text-5xl mb-10'>Some Important Points we offer</div>
                <ul className='flex flex-col gap-1'>
                    <li className='flex gap-2'><VerifiedIcon/>Forecasting of Cash requirements.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Estimation of Working Capital requirements and planning the level of investment in Current Assets.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Establishment of banking relationship.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Arrangement of funds for Working Capital requirements.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Monitoring the credit collection.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Risk Management and Insurance.</li>
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

export default ServiceTreasury