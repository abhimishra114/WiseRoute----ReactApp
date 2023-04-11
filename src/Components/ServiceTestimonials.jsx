import React from 'react'
import quote from '../Assets/Quotationmarks.svg'
function ServiceTestimonials() {
  return (
    <>
        <section className='container mx-auto px-5 lg:px-5 mb-14'>
            <div className='bg-primary-main-blue p-7 rounded-lg'>
                <div className='mb-10 xl:px-32'>
                    <h1 className='text-white font-bold text-4xl'>Testimonials</h1>
                </div>
                {/* testi section */}
                <div className='flex flex-col md:flex-row items-center xl:px-32 gap-5'>
                    {/* first-testi */}
                    <div className='flex flex-col gap-5 p-4 rounded-lg' style={{background: '#F4F8FF'}}>
                        <img src={quote} className='w-9' alt="" />
                        <h1 className='font-bold text-xl'>Amazing Customer Service</h1>
                        <p className=''>I recommend this consultancy service.</p>
                        <div className='flex justify-end'>
                            <img src={quote} className='w-9 rotate-180' alt="" />
                        </div>
                        <div className='flex justify-end'>
                            <h1 className='font-bold text-xl'>Amazon</h1>
                        </div>
                    </div>  
                    {/* 2nd-testi */}
                    <div className='flex flex-col gap-5 p-4 rounded-lg' style={{background: '#F4F8FF'}}>
                        <img src={quote} className='w-9' alt="" />
                        <h1 className='font-bold text-xl'>Amazing Customer Service</h1>
                        <p className=''>I recommend this consultancy service.</p>
                        <div className='flex justify-end'>
                            <img src={quote} className='w-9 rotate-180' alt="" />
                        </div>
                        <div className='flex justify-end'>
                            <h1 className='font-bold text-xl'>Flipkart</h1>
                        </div>
                    </div>  
                    {/* third-testi */}
                    <div className='flex flex-col gap-5 p-4 rounded-lg' style={{background: '#F4F8FF'}}>
                        <img src={quote} className='w-9' alt="" />
                        <h1 className='font-bold text-xl'>Amazing Customer Service</h1>
                        <p className=''>I recommend this consultancy service.</p>
                        <div className='flex justify-end'>
                            <img src={quote} className='w-9 rotate-180' alt="" />
                        </div>
                        <div className='flex justify-end'>
                            <h1 className='font-bold text-xl'>Mintra</h1>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceTestimonials