import React from 'react'

function AboutText() {
  return (
    <>
    <section className='container mx-auto lg:px-32 px-10 mb-10'>
        <div className=' py-10 border-y-[1px] border-black'>
            <div className='flex flex-col items-center md:flex-row md:items-start justify-between gap-20 mb-16'>
                <h1 className='text-5xl md:text-xl lg:text-5xl font-bold lg:sticky lg:top-20 flex-[0.3]'>Together we are strong</h1>
                <div className='flex-[0.7] lg:pl-32'>
                    <h1 className='font-bold mb-5'>At <span className='text-slate-700'>Wise Route</span> , we help your organization navigate the challenges associated with finance outsourcing, and leverage finance outsourcing to achieve measurable improvements in finance function efficiency and effectiveness.</h1>
                    <h1 className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, aliquid aperiam. Reprehenderit et atque accusantium quasi, ipsam eaque ratione perferendis quod cum eos distinctio animi corporis totam non velit nemo incidunt quis illo ea recusandae, ipsa culpa aperiam consectetur iste! Cum voluptatibus laborum nulla expedita explicabo, tenetur, nostrum qui quia fuga quisquam illo consequatur quis et suscipit aliquam dolore rerum molestiae quas exercitationem doloremque, corrupti eius architecto? Debitis aliquid veritatis odit dolores molestias nesciunt eum nostrum amet nihil itaque architecto, autem assumenda ut inventore? Quas perspiciatis magnam voluptate repudiandae iste</h1>
                </div>
            </div>
            <div className='flex flex-col md:items-start md:flex-row'>
                <div className='flex items-center gap-3 lg:sticky lg:top-16 mb-10 lg:mb-0 flex-[0.4]'>
                    <div className='w-[10%]'>
                        <img className='w-full rounded-full object-cover h-[5%]' src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></div>
                    <div>
                        <h1 className='font-bold'>Brandon Shaw</h1>
                        <h1>Founder & CEO</h1>
                    </div>
                </div>
                <h1 className='md:pl-32 flex-[0.6] font-bold text-3xl'>As WE believe, “Efficiencies will come from proactively transforming how we do business.”</h1>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutText