import React from 'react'

function Form() {
  return (
    <>
        {/* <!-- section-2 Form --> */}
    <section id="form" class="mt-10 md:px-20 xl:px-40 relative">
        {/* <!-- main-div for form --> */}
        <div class="p-8 lg:px-40 xl:px-60 main-shadow rounded-md">
            {/* <!-- text-area --> */}
            <div class="text-center flex flex-col gap-2">
                <h1 class="font-bold text-blue-500">Contact us</h1>
                <h1 class="text-3xl font-bold">Get in Touch</h1>
                <h1 class="text-sm">We'd love to hear form you. Please fill out this form</h1>
            </div>
            {/* <!-- pop-up message --> */}
            <div id="pop-up" class="hidden pop-up z-40 p-16 bg-green-400 rounded-md text-center">
                <img src="Assets/pop-up-success2.gif" class="rounded-full w-1/3 mx-auto mb-3" alt=""/>
                <h1 class="text-sm md:text-lg text-white font-bold mb-3">Good job! Thanks for submitting the form.</h1>
                <button class="px-4 py-2 bg-blue-400 text-white font-bold rounded-md">OK</button>
            </div>
            {/* <!-- form-part --> */}
            <form/>
                <div class="md:px-10 mt-3 flex flex-col gap-3">
                    {/* <!-- first name and last name --> */}
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        {/* <!-- first name --> */}
                        <div class="flex flex-col gap-1 ">
                            <h1 class="text-lg font-medium aster">First Name</h1>
                            <input class="text outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400" type="text" placeholder="First Name" name="firstname" id="firstname" required autocomplete="off"/>
                        </div>
                        {/* <!-- last name --> */}
                        <div class="flex flex-col gap-1 md:ml-auto">
                            <h1 class="text-lg font-medium aster">Last Name</h1>
                            <input class="outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400" type="text" placeholder="Last Name" name="lastname" id="lastname" required autocomplete="off"/>
                        </div>
                    </div>
                    {/* <!-- email --> */}
                    <div class="flex flex-col gap-1">
                        <h1 class="text-lg font-medium aster">Email</h1>
                        <input class="outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400" type="email" placeholder="you@company.com" name="email" id="email" required autocomplete="off"/>
                    </div>
                    {/* <!-- phone no --> */}
                    <div class="flex flex-col gap-1">
                        <h1 class="text-lg font-medium aster">Phone number</h1>
                        <div class="flex items-center gap-2">
                            {/* <!-- number according to country --> */}
                            <div class="outline-none border border-1 border-slate-800 p-2 rounded-md">
                                <select class="cursor-pointer" name="country-code" id="country-code">
                                    <option value="91">+91</option>
                                    <option value="92">+92</option>
                                    <option value="44">+44</option>
                                    <option value="95">+95</option>
                                    <option value="94">+94</option>s
                                </select>
                            </div>
                            <input class="outline-none border border-1 border-slate-800 rounded-md p-2 placeholder:text-gray-400 w-full" type="tel" placeholder="123-456-7890" name="phone number" id="phone-number" required autocomplete="off"/>
                        </div>
                    </div>
                    {/* <!-- message --> */}
                    <div class="flex flex-col  gap-1">
                        <h1 class="text-lg font-medium aster">Message</h1>
                        <textarea class="outline-none border border-1 border-slate-800 rounded-md p-2" rows="6" cols="50" name="message" placeholder="Leave us a message..." type="message" id="message" required autocomplete="off"></textarea>
                    </div>
                    {/* <!-- tick --> */}
                    <div class="flex items-center gap-2">
                        <input id="myradio" type="radio" name="" required="required" checked/>
                        <h1><span class="text-gray-400">You agree to our friendly </span><span class="underline">Privacy Policy</span>.</h1>
                    </div>
                    {/* <!-- submit --> */}
                    <button id="form-submitbtn" class="bg-blue-400 text-white rounded-md px-4 py-2" type="submit">Submit</button>
                </div>  
            <form/>
        </div>
    </section>  
    </>
  )
}

export default Form