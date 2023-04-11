import React from 'react'
import serviceimg1 from '../Assets/serviceimg1.png'
import serviceimg2 from '../Assets/serviceimg2.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HubIcon from '@mui/icons-material/Hub';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
function ServiceBlog() {
  return (
    <>
        <section className='container mx-auto px-5 lg:px-10 mb-10'>
            {/* blog-1 */}
            <div className='lg:px-20 gap-5 flex flex-col-reverse items-start md:flex-row justify-between mb-16'>
                {/* text */}
                <div className='flex flex-col items-start gap-5 lg:pr-32'>
                    <h1 className='text-4xl mb-3'>We connect our customers with the best, and help them keep up-and stay open.</h1>
                    <div className='flex flex-col gap-5 lg:gap-8 items-start'>
                        <h1 className='bg-primary-main-blue text-white p-2 pl-1 rounded-md'><HubIcon/>&nbsp;&nbsp;<span>We connect our customers with the best.</span></h1>
                        <h1><RemoveRedEyeIcon/>&nbsp;&nbsp;<span>Advisor success customer launch party.</span></h1>
                        <h1><WbSunnyIcon/>&nbsp;&nbsp;<span>Business-to-consumer long tail.</span></h1>
                    </div>
                </div>
                {/* img */}
                <img src={serviceimg2} className='md:w-2/5 lg:w-1/3' alt="" />
            </div>
            {/* blog-1 */}
            <div className='lg:px-20 md:gap-10 lg:gap-16 flex flex-col items-start md:flex-row justify-between'>
                {/* img */}
                <img src={serviceimg1} className='md:w-2/5 lg:w-1/3' alt="" />
                {/* text */}
                <div className='flex flex-col items-start gap-5 ml-auto'>
                    <h1 className='text-3xl mb-3'>Customer service should not be a department. It should be the entire company.</h1>
                    <div className='flex flex-col gap-5 lg:gap-8 items-start'>
                       <h1 className='flex items-center'><CheckCircleIcon/>&nbsp;&nbsp; <span>The Goal without a plan is just a wish.</span></h1>
                       <h1 className='flex items-center'><CheckCircleIcon/>&nbsp;&nbsp; <span>Believe us and You are halfway there.</span></h1>
                       <button className='px-3 py-1 bg-primary-main-blue text-white border-2 border-primary-main-blue hover:bg-white hover:text-primary-main-blue transition duration-500 rounded-lg'><Link to='/contact'>Connect</Link></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceBlog