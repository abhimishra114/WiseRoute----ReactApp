import React from 'react'
import Footer from './Footer'

function Form() {
  return (
    <>
        {/* <!-- section-2 Form --> */}
    <section id="form" className="mt-10 md:px-20 xl:px-40 relative">
        {/* <!-- main-div for form --> */}
        <div className="p-8 lg:px-40 xl:px-60 main-shadow rounded-md">
            {/* <!-- text-area --> */}
            <div className="text-center flex flex-col gap-2">
                <h1 className="font-bold text-blue-500">Contact us</h1>
                <h1 className="text-3xl font-bold">Get in Touch</h1>
                <h1 className="text-sm">We'd love to hear form you. Please fill out this form</h1>
            </div>
            <form>
  <div class="mb-0 grid gap-6 p-4 md:grid-cols-2">
    {/* firstname */}
    <div>
      <label for="first_name" class="mb-2 block text-sm text-gray-900 font-bold aster">First name</label>
      <input type="text" id="first_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="John" required />
    </div>
    {/* lastname */}
    <div>
      <label for="last_name" class="mb-2 block text-sm text-gray-900 font-bold aster">Last name</label>
      <input type="text" id="last_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Doe" required />
    </div>
    {/* company */}
    <div>
      <label for="company" class="mb-2 block text-sm text-gray-900 font-bold">Company</label>
      <input type="text" id="company" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Flowbite" />
    </div>
    {/* phone */}
    <div>
      <label for="phone" class="mb-2 block text-sm text-gray-900 font-bold aster">Phone number</label>
      <input type="tel" id="phone" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="123-45-678" pattern="[789][0-9]{9}" required />
    </div>
  </div>
  {/* email */}
  <div class="mb-0 p-4">
    <label for="email" class="mb-2 block text-sm text-gray-900 font-bold aster">Email address</label>
    <input type="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="john.doe@company.com" required />
  </div>
  {/* message */}
  <div className='mb-4 p-4'>
    <label for="message" class="mb-2 block text-sm text-gray-900 font-bold aster">Your message</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Write your thoughts here..." required></textarea>
  </div>

  <div class="mb-6 flex items-start">
    <div class="flex h-5 items-center">
      <input id="remember" type="checkbox" value="" class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" required />
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-500 ">I agree with the <a href="/" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto re">Submit</button>
</form>
        </div>
    </section>  

    <Footer page1link="/" page1="Home" page2link="/service" page2="Services" page3link="/about" page3="About us"/>
    </>
  )
}

export default Form