import React from 'react'
import finance from '../Assets/finance-service.svg'
import business from '../Assets/business.svg'
import treasure from '../Assets/treasure.svg'
import cash from '../Assets/cash.svg'
import payroll from '../Assets/payroll.svg'
import client from '../Assets/client.svg'
import {Link} from 'react-router-dom'
function Whatwedo() {
  return (
    <>
        {/* <!-- Services --> */}
        <section id='whatwedo'  className="px-10 mb-20 mt-10 container">
            <div className="my-16 text-3xl text-lines">What We Do</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* <!-- box-1 --> */}
                <div className="hover:box flex flex-col items-center text-center rounded-xl gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                    <img src={finance} className="w-1/4" alt=""/>
                    <h1 className="text-3xl sm:text-2xl font-bold">CFO Service</h1>
                    <h1 className="text-lg text-center">Financial Advisory and managing accounting functions.</h1>
                    <h1 className="hover:text-blue-600 font-bold border border-1 border-slate-800 px-4 py-2 rounded-lg hover:border-blue-600"><Link to="/service">Learn More <span>&rarr;</span></Link></h1>
                </div>
                {/* <!-- box-2 --> */}
                <div className="hover:box flex flex-col items-center text-center rounded-xl gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                    <img src={business} className="w-1/4" alt=""/>
                    <h1 className="text-3xl sm:text-2xl font-bold">ERP Functional Service</h1>
                    <h1 className="text-lg text-center">Understand Business requirement and evaluate potential ERP solutions.</h1>
                    <h1 className="hover:text-blue-600 font-bold border border-1 border-slate-800 px-4 py-2 rounded-lg hover:border-blue-600"><Link to="/service">Learn More <span>&rarr;</span></Link></h1>
                </div>
                {/* <!-- box-3 --> */}
                <div className="hover:box flex flex-col items-center text-center rounded-xl gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                    <img src={treasure} className="w-1/4" alt=""/>
                    <h1 className="text-3xl sm:text-2xl font-bold">Treasury Management</h1>
                    <h1 className="text-lg text-center">Forecast cash requirements and estimation of working capital requirement.</h1>
                    <h1 className="hover:text-blue-600 font-bold border border-1 border-slate-800 px-4 py-2 rounded-lg hover:border-blue-600"><Link to="/service">Learn More <span>&rarr;</span></Link></h1>
                </div>
                {/* <!-- box-4 --> */}
                <div className="hover:box flex flex-col items-center text-center rounded-xl gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                    <img src={cash} className="w-1/4" alt=""/>
                    <h1 className="text-3xl sm:text-2xl font-bold">Taxation & Compliances</h1>
                    <h1 className="text-lg text-center">Assistance in taxation and complainces.</h1>
                    <h1 className="hover:text-blue-600 font-bold border border-1 border-slate-800 px-4 py-2 rounded-lg hover:border-blue-600"><Link to="/service">Learn More <span>&rarr;</span></Link></h1>
                </div>
                {/* <!-- box-5 --> */}
                <div className="hover:box flex flex-col items-center text-center rounded-xl gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                    <img src={payroll} className="w-1/4" alt=""/>
                    <h1 className="text-3xl sm:text-2xl font-bold">Payroll management</h1>
                    <h1 className="text-lg text-center">Full fledged Payroll solutions.</h1>
                    <h1 className="hover:text-blue-600 font-bold border border-1 border-slate-800 px-4 py-2 rounded-lg hover:border-blue-600"><Link to="/service">Learn More <span>&rarr;</span></Link></h1>
                </div>
                {/* <!-- box-6 --> */}
                <div className="hover:box flex flex-col items-center text-center rounded-xl gap-5 md:gap-3 p-8 justify-evenly transition duration-500 hover-box">
                    <img src={client} className="w-1/4" alt=""/>
                    <h1 className="text-3xl sm:text-2xl font-bold">Process "Right Sourcing"</h1>
                    <h1 className="text-lg text-center">cost driven and client focused services.</h1>
                    <h1 className="hover:text-blue-600 font-bold border border-1 border-slate-800 px-4 py-2 rounded-lg hover:border-blue-600"><Link to="/service">Learn More <span>&rarr;</span></Link></h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default Whatwedo