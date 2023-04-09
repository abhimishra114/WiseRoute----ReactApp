import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function AboutTimline() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
  return (
    <>
    <section className='container px-5 lg:px-10 mb-20'>

    <div className='text-center'>
        <h1 data-aos='fade-down' className='text-5xl font-bold mb-10 underline underline-offset-4'>OUR TIMELINE</h1>
    </div>
        <div>
                <div class="w-full px-2 py-3 sm:mx-auto lg:px-32 sm:px-0">
                    <div class="relative text-sm font-semibold text-gray-700 antialiased">
                    {/* <!-- Vertical bar running through middle --> */}
                    <div class="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-blue-300 sm:block"></div>

                    {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                    <div data-aos='fade-right' class="mt-6 sm:mb-12 sm:mt-0">
                        <div class="flex flex-col items-center sm:flex-row">
                        <div class="mx-auto flex w-full items-center justify-start">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                            <div class="rounded bg-blue-500 p-4 shadow">
                                <div class="flex flex-col">
                                <h1 class="text-xl font-bold text-white">Start Up</h1>
                                <h1 class="text-sm text-gray-200">Formed at August 2022</h1>
                                <h1 class="text-sm font-bold text-white">Incorporated and a new venture is born</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-blue-500 sm:translate-y-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div data-aos='fade-left' class="mt-6 sm:mb-12 sm:mt-0">
                        <div class="flex flex-col items-center sm:flex-row">
                        <div class="mx-auto flex w-full items-center justify-end">
                            <div class="w-full sm:w-1/2 sm:pl-8">
                            <div class="rounded bg-blue-500 p-4 shadow">
                                <div class="flex flex-col">
                                <h1 class="text-xl font-bold text-white">New Project</h1>
                                <h1 class="text-sm text-gray-200">September 2022</h1>
                                <h1 class="text-sm font-bold text-white">R2R projects and ERP Migration Projects</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-blue-500 sm:translate-y-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                    <div data-aos='fade-right' class="mt-6 sm:mb-12 sm:mt-0">
                        <div class="flex flex-col items-center sm:flex-row">
                        <div class="mx-auto flex w-full items-center justify-start">
                            <div class="w-full sm:w-1/2 sm:pr-8">
                            <div class="rounded bg-blue-500 p-4 shadow">
                                <h1 class="text-xl font-bold text-white">Coming Soon...</h1>
                            </div>
                            </div>
                        </div>
                        <div class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-blue-500 sm:translate-y-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        </div>
                    </div>
                    {/* <!-- end --> */}
                    </div>
                </div>

        </div>
    </section>
    </>
  )
}

export default AboutTimline