import React from 'react'
import serviceban from '../Assets/serviceban.png'
import blob from '../Assets/blurblob.png'
function Servicehero() {
  return (
    <>
        <section className='container mx-auto px-5 lg:px-10 relative mb-14'>
            <div className='bg-primary-main-blue flex flex-col-reverse gap-6 md:flex-row items-center rounded-md p-5'>
                <div className='flex flex-col gap-5 text-start md:text-left'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold z-40'>“ Pick up the path that’s right for  You ”</h1>
                    <p className='text-3xl text-white z-40'>It's all about customers.</p>
                    <button className='px-3 py-1 rounded-lg text-center bg-white w-2/5 font-bold text-2xl  text-primary-main-blue border-2 hover:bg-primary-main-blue hover:text-white z-40 border-white transition duration-500'><a href="#services">Services</a></button>
                </div>
                <img src={serviceban} className='w-1/2' alt="" />
                <img src={blob} className='absolute z-30 left-0' alt="" />
            </div>
        </section>
    </>
  )
}

export default Servicehero