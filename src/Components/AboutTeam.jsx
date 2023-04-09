import React from 'react'
import person1 from '../Assets/person1.jpg'
import person2 from '../Assets/person2.jpg'
import person3 from '../Assets/person3.jpg'
import person4 from '../Assets/person4.jpg'
import {Link} from 'react-router-dom'
function AboutTeam() {
  return (
    <>
        <section className='lg:px-10 px-5 container mb-16 md:mb-40'>
            {/* heading */}
            <div className='mb-10'>
                <h1 className='font-bold text-4xl text-center'>Meet Our Management Team</h1>
            </div>
            <div className='flex items-center justify-center gap-2 mb-20'>
                <button className='px-3 py-1 bg-white border-2 border-slate-800 rounded-lg hover:border-slate-500 transition duration-300'><Link to='/service'>Services</Link></button>
                <button className='px-3 py-1 bg-primary-main-blue text-white rounded-lg'><Link to='/contact'>Contact us</Link></button>
            </div>
            {/* team */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-7 px-5'>
                {/* person1 */}
                <div className='flex flex-col text-center items-center gap-5 lg:mt-20'>
                    <img className='object-cover h-60 w-full' src={person1} alt="" />
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='font-bold text-xl'>Jagruti Joshi</h1>
                        <h1>Chartered Accountant</h1>
                    </div>
                </div>
                {/* person2 */}
                <div className='flex flex-col text-center items-center gap-5'>
                    <img className='' src={person2} alt="" />
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='font-bold text-xl'>Jyoti More</h1>
                        <h1>Chartered Accountant</h1>
                    </div>
                </div>
                {/* person3 */}
                <div className='flex flex-col text-center items-center gap-5 lg:mt-20'>
                    <img className='' src={person3} alt="" />
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='font-bold text-xl'>Tejal Shah</h1>
                        <h1>M.B.A Finance</h1>
                    </div>
                </div>
                {/* person4 */}
                <div className='flex flex-col text-center items-center gap-5'>
                    <img className='' src={person4} alt="" />
                    <div className='flex flex-col gap-2 items-center'>
                        <h1 className='font-bold text-xl'>Amit Chatterjee</h1>
                        <h1>Software Industry Professional</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutTeam