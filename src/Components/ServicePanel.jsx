import React, {useEffect, useState} from 'react'
import triangle from '../Assets/Picture2.png'
import CFO from '../Assets/CFO.png'
import ERP from '../Assets/ERP.png'
import CancelIcon from '@mui/icons-material/Cancel';
import treasury from '../Assets/treasury.png'
import taxation from '../Assets/taxation.png'
import payroll from '../Assets/payroll.png'
import process from '../Assets/p-out.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CFOService from './CFOService'
import ERPService from './ERPService';
import TreasuryService from './TreasuryService'
import TaxationService from './TaxationService'
import PayrollService from './PayrollService';
import ProcessService from './ProcessService';
function ServicePanel() {
    const [linkCFO, setCFO] = useState(false)
    const [linkERP, setERP] = useState(false)
    const [linktreasury, settreasury] = useState(false)
    const [linktaxation, settaxation] = useState(false)
    const [linkpayroll, setpayroll] = useState(false)
    const [linkprocess, setprocess] = useState(false)
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
  return (
    <>
        <section id='introduction' className='container mx-auto px-5 md:px-10'>
        <div className='my-24'>
            <h1 className='text-center font-bold underline underline-offset-8 text-primary-main-blue text-5xl'>Services that we Offer</h1>
        </div>
        <div  className="flex flex-col mt-5 items-center justify-between px-10 container mb-8">
             {/* <!-- Image --> */}
             <div className="flex p-3">
                <img src={triangle} className="w-11/12 mx-auto" alt=""/>
            </div>
            <div className="flex p-3 items-start flex-col gap-4">
                {/* cards */}
                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7 mt-20 relative'>
                    {/* card-1 */}
                    <div class="cont relative">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={CFO} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">CFO SERVICE</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button onClick={()=>setCFO(!linkCFO)}  class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                    <div class="cont relative">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={ERP} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">ERP Functional Service</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button onClick={()=> setERP(!linkERP)} class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                    <div class="cont relative">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={treasury} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Treasury Management</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button onClick={()=>settreasury(!linktreasury)} class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                    <div class="cont relative">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={taxation} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Taxation & Compliances</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button onClick={()=>settaxation(!linktaxation)} class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                    <div class="cont relative">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={payroll} className='w-full mb-5 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Payroll Management</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button onClick={()=>setpayroll(!linkpayroll)} class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                    <div class="cont relative">
                        <div class="card text-center">
                        <div class="front p-5  flex flex-col items-center gap-6 overflow-hidden">
                            <img src={process} className='w-2/3 mx-auto' alt="" />
                            <h1 class="text-center border-y-4 border-red-400 py-3 text-slate-600 font-bold text-3xl">Process Outsourching</h1>
                            <div className='absolute bottom-0 text-4xl px-3 py-1 rounded-tl-3xl -right-1 text-white bg-blue-400'>&#8594;</div>
                        </div>
                        <div class="back">
                            <button onClick={()=>setprocess(!linkprocess)} class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                    {/* CFO */}
                    {
                        linkCFO &&
                        <div className='absolute transition duration-300 z-40 bg-white shadow-2xl rounded-md lg:top-32 left-0'>
                            <CFOService logo={<CancelIcon onClick={()=>setCFO(false)}/>}/>
                        </div>
                    }
                    {/* ERP */}
                    {
                        linkERP &&
                        <div className='absolute transition duration-300 z-40 bg-white shadow-2xl rounded-md top-48 lg:top-32 left-0'>
                            <ERPService logo={<CancelIcon onClick={()=>setERP(false)}/>}/>
                        </div>
                    }
                    {/* Treasury Management */}
                    {
                        linktreasury &&
                        <div className='top-[30%] md:top-40 lg:top-32 absolute transition duration-300 z-40 bg-white shadow-2xl rounded-md left-0'>
                            <TreasuryService logo={<CancelIcon onClick={()=>settreasury(false)}/>}/>
                        </div>
                    }
                    {/* Taxation & Compliances */}
                    {
                        linktaxation &&
                        <div className='top-[50%] md:top-40 lg:top-32 absolute transition duration-300 z-40 bg-white shadow-2xl rounded-md left-0'>
                            <TaxationService logo={<CancelIcon onClick={()=>settaxation(false)}/>}/>
                        </div>
                    }
                    {/* Payroll Management */}
                    {
                        linkpayroll &&
                        <div className='top-[70%] md:top-[50%] lg:top-32 absolute transition duration-300 z-40 bg-white shadow-2xl rounded-md left-0'>
                            <PayrollService logo={<CancelIcon onClick={()=>setpayroll(false)}/>}/>
                        </div>
                    }
                    {/* Process OutSourching */}
                    {
                        linkprocess &&
                        <div className='top-[80%] md:top-[50%] lg:top-32 absolute transition duration-300 z-40 bg-white shadow-2xl rounded-md left-0'>
                            <ProcessService logo={<CancelIcon onClick={()=>setprocess(false)}/>}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ServicePanel