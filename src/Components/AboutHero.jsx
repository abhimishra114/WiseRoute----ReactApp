import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function AboutHero() {
  useEffect(() => {
    AOS.init({duration: 3000});
}, [])
  return (
    <>
        <section className='container px-5 md:px-10 mb-10'>
          <div className='flex flex-col mb-5 md:flex-row items-end justify-between md:px-10 px-5 lg:px-20'>
            <h1 data-aos="fade-down" className='text-3xl md:text-xl lg:text-4xl font-bold p-3'>We build bridges between <span className='text-gray-400'>companies and customers.</span></h1>
            <h1 data-aos="fade-left" className='p-4 md:pl-6'>To build software that gives customer-facing teams at small and medium-sized business the ability to create fruitful and enduring relationship with customers.</h1>
          </div>
          <div>
            <img className='object-cover w-full h-100 rounded-lg' src='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="" />
          </div>
        </section>
    </>
  )
}

export default AboutHero