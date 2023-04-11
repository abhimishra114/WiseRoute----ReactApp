import React from 'react'

function ServiceValue() {
    const text = (h1, span, p) => (
        <div className='flex flex-col justify-between gap-3 md:flex-row items-start'>
            <h1 className='text-4xl flex-1'>{h1} <span className='text-green-400'>{span}</span></h1>
            <p className='flex-1 md:px-4 text-lg'>{p}</p>
        </div>
    );
  return (
    <>
        <section className='bg-primary-main-blue'>
            <div className='container mx-auto px-10 text-white py-5'>
                <h1 className='text-center font-bold pt-5'>Our Blog</h1>
                <h1 className='text-4xl font-bold text-center px-10 pt-4 border-b-2 border-white pb-14 '>Value proposition accelerator product management venture</h1>
                {/* main-text */}
                <div className='flex flex-col items-start gap-10 mt-10'>
                    {text('We are', 'commited', 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ')}
                    {text('We are', 'responsible', 'Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain.')}
                    {text('We aim for', 'progress', 'Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. ')}
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceValue