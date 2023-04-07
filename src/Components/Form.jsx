import React from 'react'

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
            {/* <!-- form-part --> */}
            {/* <form/>
                <div className="md:px-10 mt-3 flex flex-col gap-3">
                    <!-- first name and last name -->
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <!-- first name -->
                        <div className="flex flex-col gap-1 ">
                            <h1 className="text-lg font-medium aster">First Name</h1>
                            <input className="text outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400" type="text" placeholder="First Name" name="firstname" id="firstname" required autocomplete="off"/>
                        </div>
                        <!-- last name -->
                        <div className="flex flex-col gap-1 md:ml-auto">
                            <h1 className="text-lg font-medium aster">Last Name</h1>
                            <input className="outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400" type="text" placeholder="Last Name" name="lastname" id="lastname" required autocomplete="off"/>
                        </div>
                    </div>
                    <!-- email -->
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-medium aster">Email</h1>
                        <input className="outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400" type="email" placeholder="you@company.com" name="email" id="email" required autocomplete="off"/>
                    </div>
                    <!-- phone no -->
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-medium aster">Phone number</h1>
                        <div className="flex items-center gap-2">
                            <!-- number according to country -->
                            <div className="outline-none border border-1 border-slate-800 p-2 rounded-md">
                                <select className="cursor-pointer" name="country-code" id="country-code">
                                    <option value="91">+91</option>
                                    <option value="92">+92</option>
                                    <option value="44">+44</option>
                                    <option value="95">+95</option>
                                    <option value="94">+94</option>s
                                </select>
                            </div>
                            <input className="outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400 w-full" type="tel" placeholder="123-456-7890" name="phone number" id="phone-number" required autocomplete="off"/>
                        </div>
                    </div>
                    <!-- message -->
                    <div className="flex flex-col  gap-1">
                        <h1 className="text-lg font-medium aster">Message</h1>
                        <textarea className="outline-none border border-1 border-slate-800 rounded-md p-2" rows="6" cols="50" name="message" placeholder="Leave us a message..." type="message" id="message" required autocomplete="off"></textarea>
                    </div>
                    <!-- tick -->
                    <div className="flex items-center gap-2">
                        <input id="myradio" type="radio" name="" required="required" checked/>
                        <h1><span className="text-gray-400">You agree to our friendly </span><span className="underline">Privacy Policy</span>.</h1>
                    </div>
                    <!-- submit -->
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2" type="submit">Submit</button>
                </div>  
            <form/> */}
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
    </>
  )
}

export default Form