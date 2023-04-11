import React from 'react'

function Serviceproject() {
  return (
    <>
        <section className='container mx-auto px-5 lg:px-10 mb-10'>
            <div className='mb-14 underline underline-offset-4'>
                <h1 className='text-4xl font-bold text-center'>Our Numbers</h1>
            </div>
            <div className='flex flex-col md:flex-row text-center items-center gap-7 md:gap-0 justify-between'>
                {/* 1st num */}
                <div className='flex flex-col items-center gap-5 border-b-[5px] border-orange-400 pb-5'>
                    <h1 className='text-6xl font-bold'>100+</h1>
                    <h1 className='text-3xl'>Succeeded Projects</h1>
                </div>
                {/* 2nd num */}
                <div className='flex flex-col items-center gap-5 border-b-[5px] border-green-500 pb-5'>
                    <h1 className='text-6xl font-bold'>17140+</h1>
                    <h1 className='text-3xl'>Working Hours Spent</h1>
                </div>
                {/* 3rd num */}
                <div className='flex flex-col items-center gap-5 border-b-[5px] border-purple-500 pb-5'>
                    <h1 className='text-6xl font-bold'>600+</h1>
                    <h1 className='text-3xl'>Happy Clients</h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default Serviceproject