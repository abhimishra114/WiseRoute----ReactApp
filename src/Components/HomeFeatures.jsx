import React from 'react'
import consultant from '../Assets/consultant-img.png'
import tick from '../Assets/tick.svg'
import tech from '../Assets/tech.svg'
import collab from '../Assets/collab-img.png'
import specialized from '../Assets/specialized-img.png'
import puzzle from '../Assets/puzzle.svg'
function HomeFeatures() {
  return (
    <>
        {/* <!-- features --> */}
        <section className="px-10 mt-10 container">
            <div className="my-16 text-3xl text-lines">Features</div>
            {/* <!-- features 1 --> */}
            <div className="flex flex-col sm:flex-row items-center mb-5">
                <div className="flex-1"><img src={consultant} className="w-11/12 rounded-lg p-3 mx-auto md:ml-0 md:pl-0" alt=""/></div>
                <div className="flex flex-1 flex-col gap-3 p-5 md:pr-0">
                    <img src={tick} className="w-10" alt=""/>
                    <h1 className="font-bold text-3xl">Consultantation</h1>
                    <h1 className="text-lg">We are a team of experienced professionals offering financial advisory services for 20+ years.</h1>
                </div>
            </div>
            {/* <!-- features 2 --> */}
            <div className="flex flex-col-reverse sm:flex-row items-center mb-5">
                <div className="flex flex-1 flex-col gap-3 p-5 md:pl-0">
                    <img src={tech} className="w-10" alt=""/>
                    <h1 className="font-bold text-3xl">Specialization</h1>
                    <h1 className="text-lg">We blend the right mix of People, Process and Technology to deliver cost effective and customized solutions to our clients.</h1>
                </div>
                <div className="flex-1"><img src={collab} className="w-11/12 rounded-lg p-3 mx-auto md:mr-0 md:pr-0" alt=""/></div>
            </div>
            {/* <!-- features 3 --> */}
            <div className="flex flex-col sm:flex-row items-center mb-5">
                <div className="flex-1"><img src={specialized} className="w-11/12 rounded-lg p-3 mx-auto md:ml-0 md:pl-0" alt=""/></div>
                <div className="flex flex-1 flex-col gap-3 p-5 md:pr-0">
                    <img src={puzzle} className="w-10" alt=""/>
                    <h1 className="font-bold text-3xl">Collaboration</h1>
                    <h1 className="text-lg">Our collaboration helps your company become more agile and compliant with regulations. We have built a strong network of Chartered Accountants, Cost Accountants, Company Secretaries and Corporate Lawyers to provide seamless services to customers.</h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeFeatures