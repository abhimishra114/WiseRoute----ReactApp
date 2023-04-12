import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ServicePanel from './ServicePanel';
import Footer from './Footer'
import servicebanner from '../Assets/Servicemainbanner.png'
function ServiceCFO() {
  return (
    <>  
        <section className='container mx-auto px-5 lg:px-10 mt-20'>
            <div style={{ backgroundImage:'url('+servicebanner+')' }} className='object-cover bg-cover h-72 flex items-center justify-center rounded-lg p-5 text-center mb-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                <h1 className='text-5xl text-black font-bold'>Chief Financial Officer Service</h1>
            </div>
            {/* main-topic */}
            <div className='flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b-2 border-black'>
                <div className='flex flex-[0.4]'>
                    <img src="https://foundersguide.com/wp-content/uploads/2021/04/cfo.jpg" className='w-96' alt="" />
                </div>
                <div className='flex flex-[0.6] flex-col items-start'>
                    <h1 className='text-sm font-bold underline underline-offset-4 mb-3'>Introduction</h1>
                    <h1 className='font-bold text-4xl mb-4'>Chief Financial Officer</h1>
                    <p>The term chief financial officer (CFO) refers to a senior executive responsible for managing the financial actions of a company. The CFO's duties include tracking cash flow and financial planning as well as analyzing the company's financial strengths and weaknesses and proposing corrective actions.</p>
                </div>
            </div>
            {/* points */}
            <div className='pb-5 border-b-2 border-black'>
                <div className='font-bold text-5xl mb-10'>Some Important Points we offer</div>
                <ul className='flex flex-col gap-1'>
                    <li className='flex gap-2'><VerifiedIcon/>Financial Advisory</li>
                    <li className='flex gap-2'><VerifiedIcon/>Managing Accounting Functions</li>
                    <li className='flex gap-2'><VerifiedIcon/>Cash Flow Forecasting</li>
                    <li className='flex gap-2'><VerifiedIcon/>Cost Management</li>
                    <li className='flex gap-2'><VerifiedIcon/>Treasury Management</li>
                    <li className='flex gap-2'><VerifiedIcon/>Debtor and Creditor Management</li>
                    <li className='flex gap-2'><VerifiedIcon/>MIS Reporting & Financial Analysis</li>
                    <li className='flex gap-2'><VerifiedIcon/>Year End Accounts Closure and Filing</li>
                    <li className='flex gap-2'><VerifiedIcon/>Compliances of the various Acts applicable</li>
                    <li className='flex gap-2'><VerifiedIcon/>Audit Support</li>
                    <li className='flex gap-2'><VerifiedIcon/>Strengthening Internal Control systems</li>
                    <li className='flex gap-2'><VerifiedIcon/>Budgeting</li>
                    <li className='flex gap-2'><VerifiedIcon/>HR Services</li>
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

export default ServiceCFO