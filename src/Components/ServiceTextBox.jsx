import React from 'react'
import servicebg from '../Assets/servicebg.png'
import {Link} from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';
function ServiceTextBox() {
  return (
    <>
    <div className='container mx-auto px-5'>
        <div style={{ backgroundImage:`url(${servicebg})` }} className='mt-20 relative bg-cover w-full h-96 md:h-52  rounded-md shadow-main'>
            <div className='absolute px-20 py-20 flex flex-col md:flex items-center justify-evenly gap-5'>
                <div className='font-bold w-2/3'>
                    <h1 className='text-green-500 px-2 text-xl'>EXPLORE OUR FINANCE & ACCOUNTS OUTSOURCING SOLUTIONS TO STREAMLINE YOUR ACTIVITIES</h1>
                    <h1 className='text-white px-2'>Schedule a No-Obligation Consultation</h1>
                </div>
                <button className="px-4 font-bold py-2 text-lg text-white w-fit bg-transparent border-2 border-white rounded-md cursor-pointer"><Link to='/'>Explore <span><EastIcon/></span> </Link></button>
            </div>
        </div>    
    </div>
    </>
  )
}

export default ServiceTextBox