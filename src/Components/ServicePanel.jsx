import React, {useEffect} from 'react'
import CFO from '../Assets/CFO.png'
import ERP from '../Assets/ERP.png'
import treasury from '../Assets/treasury.png'
import taxation from '../Assets/taxation.png'
import payroll from '../Assets/payroll.png'
import process from '../Assets/p-out.png'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
function ServicePanel() {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
  return (
    <>
        <section id='services' className='container mx-auto px-5 md:px-10'>
        <div className='my-0'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-5xl'>Services</h1>
        </div>
        <div  className="flex flex-col mt-5 items-center justify-between px-10 container mb-8">
            <div className="flex p-3 items-start flex-col gap-4">
                {/* cards */}
                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7 mt-20 relative'>
                    {/* card-1 */}
                    <div class="cont relative right-7">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={CFO} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">CFO SERVICE</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div class="cont relative right-7">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={ERP} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">ERP Functional Service</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div class="cont relative right-7">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={treasury} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Treasury Management</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div class="cont relative right-7">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={taxation} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Taxation & Compliances</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    {/* card-5 */}
                    <div class="cont relative right-7">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={payroll} className='w-full mb-5 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Payroll Management</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    {/* card-6 */}
                    <div class="cont relative right-7">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={process} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Process Outsourching</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ServicePanel