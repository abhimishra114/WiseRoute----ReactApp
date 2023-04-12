import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ServicePanel from './ServicePanel';
import Footer from './Footer'
import servicebanner from '../Assets/Servicemainbanner.png'
import process from '../Assets/p-out.png'
function ServiceProcess() {
  return (
    <>  
        <section className='container mx-auto px-5 lg:px-10 mt-20'>
            <div style={{ backgroundImage:'url('+servicebanner+')' }} className='object-cover bg-cover h-72 flex items-center justify-center rounded-lg p-5 text-center mb-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                <h1 className='text-5xl text-black font-bold'>Process RightSourcing</h1>
            </div>
            {/* main-topic */}
            <div className='flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b-2 border-black'>
                <div className='flex flex-[0.4]'>
                    <img src={process} className='w-96' alt="" />
                </div>
                <div className='flex flex-[0.6] flex-col items-start'>
                    <h1 className='text-sm font-bold underline underline-offset-4 mb-3'>Introduction</h1>
                    <h1 className='font-bold text-4xl mb-4'>Process RightSourcing</h1>
                    <p>Rightsourcing is a method of recruiting talented industry experts in order to discover the right organization or individual able to provide a service that aligns with an organization's specific business needs.</p>
                </div>
            </div>
            {/* points */}
            <div className='pb-5 border-b-2 border-black'>
                <div className='font-bold text-5xl mb-10'>Some Important Points we offer</div>
                <ul className='flex flex-col gap-1'>
                    <li className='flex gap-2'><VerifiedIcon/>“Right sourcing for your firm”.</li>
                    <li className='flex gap-2'><VerifiedIcon/>We provide cost driven and client focused services.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Handle R2R processes [Record-to-Report].</li>
                    <li className='flex gap-2'><VerifiedIcon/>Accounts Payable Management.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Accounts Receivable Management.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Bookkeeping Services.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Management Reporting.</li>
                    <li className='flex gap-2'><VerifiedIcon/>We suggest process improvements for better control and recording.</li>
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

export default ServiceProcess