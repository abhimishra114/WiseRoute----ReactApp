import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Link} from 'react-router-dom'
function AboutMap() {
    const contactplace = (logo, through, contactway) => (
        <div className='flex flex-col text-center items-center gap-2 p-5'>
            <div>{logo}</div>
            <div className='font-bold'>{through}</div>
            <div className='px-5'>{contactway}</div>
        </div>
    )
  return (
    <>
        <section className='container px-5 lg:px-10 mb-20'>
            <div className='flex items-center justify-center mb-5'>
            <button class="relative inline-block text-lg group"><Link to='/contact'>
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Contact us</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span></Link>
            </button>
            </div>
            <div className='map-shadow rounded-lg p-8 flex flex-col lg:flex-row items-center justify-between'>
                {/* Place */}
                <div className='grid grid-cols-2 gap-5'>
                    {contactplace(<LocationOnIcon/>, 'Address', '721, Broadway, New York NY 569866')}
                    {contactplace(<CallIcon/>, 'Call Us', '91+ 1234567890 91+ 9876543210')}
                    {contactplace(<QueryBuilderIcon/>, 'Open Hours', '9:00 AM - 5:00 PM')}
                    {contactplace(<AlternateEmailIcon/>, 'Email Us', 'info@wise-route.com')}
                </div>
                {/* map */}
                <div className=''>
                <iframe className='w-full md:w-96' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1884.3755823681868!2d72.8460126!3d19.1623666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64e1850c29d%3A0xc1fdebfb3ed02b71!2sShantiniketan!5e0!3m2!1sen!2sin!4v1681138998699!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutMap