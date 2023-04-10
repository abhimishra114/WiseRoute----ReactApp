import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.svg'
function Footer(props) {
  return (
    <>
        <section className='bg-gray-300'>
            <div className='container mx-auto p-10'>
                {/* logo & Name & Links */}
                <div className='flex flex-col gap-4 items-center text-center pb-12 border-b-2 border-black'>
                    <img src={logo} className='w-16' alt="" />
                    <h1 className='text-primary-main-blue text-4xl font-bold mb-8'>Wise Route Financial Advisory</h1>
                    <div className='flex items-center gap-5 md:gap-10 font-bold'>
                        <h1 className='cursor-pointer'><Link to={props.page1link}>{props.page1}</Link></h1>
                        <div className='w-[2px] h-4 bg-black'></div>
                        <h1 className='cursor-pointer'><Link to={props.page2link}>{props.page2}</Link></h1>
                        <div className='w-[2px] h-4 bg-black'></div>
                        <h1 className='cursor-pointer'><Link to={props.page3link}>{props.page3}</Link></h1>
                    </div>
                </div>
                {/* Reserved Rights */}
                <div className='flex items-center justify-end mt-5'>
                    <h1>&copy; 2022 <span className='font-bold'>Wise Route</span> All Rights Reserved.</h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer