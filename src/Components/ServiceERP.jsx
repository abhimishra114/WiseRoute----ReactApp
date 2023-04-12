import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import ServicePanel from './ServicePanel';
import Footer from './Footer'
import servicebanner from '../Assets/Servicemainbanner.png'
function ServiceERP() {
  return (
    <>  
        <section className='container mx-auto px-5 lg:px-10 mt-20'>
            <div style={{ backgroundImage:'url('+servicebanner+')' }} className='object-cover bg-cover h-72 flex items-center justify-center rounded-lg p-5 text-center mb-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
                <h1 className='text-5xl text-black font-bold'>Enterprise Resource Planning</h1>
            </div>
            {/* main-topic */}
            <div className='flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b-2 border-black'>
                <div className='flex flex-[0.4]'>
                    <img src="https://thecustomizewindows.com/wp-content/uploads/2013/10/What-ERP-Software-as-a-Service-Has-to-Offer.jpg" className='w-96' alt="" />
                </div>
                <div className='flex flex-[0.6] flex-col items-start'>
                    <h1 className='text-sm font-bold underline underline-offset-4 mb-3'>Introduction</h1>
                    <h1 className='font-bold text-4xl mb-4'>Enterprise resource planning</h1>
                    <p>Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.</p>
                </div>
            </div>
            {/* points */}
            <div className='pb-5 border-b-2 border-black'>
                <div className='font-bold text-5xl mb-10'>Some Important Points we offer</div>
                <ul className='flex flex-col gap-1'>
                    <li className='flex gap-2'><VerifiedIcon/>Understand Business requirement and evaluate potential ERP solutions.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Advice as to which software to choose and which modules to select within the software.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Accurately map workflow and ensure proper integration at the point of use.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Recognize and avoid pitfalls such as scope creep, inadequate testing and poor data cleansing.</li>
                    <li className='flex gap-2'><VerifiedIcon/>Formulate and ensure smooth and successful migration of the data from the legacy system.</li>
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

export default ServiceERP