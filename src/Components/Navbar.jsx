import React, { useState, useEffect, useRef } from 'react'
import Navbaritems from './Navbaritems'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Assets/logo.svg';
import { Link } from 'react-router-dom'
function Navbar() {
    const [openham, setopenham] = useState(false)
    let menuRef = useRef()
    useEffect(()=> {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setopenham(false)
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })
  return (
    <>
        <div ref={menuRef} className=' shadow-md fixed w-full top-0 z-50 backdrop-filter backdrop-blur-md'>
            <div className='flex items-center justify-between z-50 container mx-auto relative px-8 md:px-10 py-3 '>
                <div>
                    <a href="/">
                    <img className='w-1/2' src={logo} alt='' />
                    </a>
                </div>
                <div className='hidden md:flex items-center gap-6'>
                    <Navbaritems route='/' title='Home'/>
                    <Navbaritems route='/service' title='Services'/>
                    <Navbaritems route='/about' title='About us'/>
                    <button className='px-2 py-1 text-sm bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Contact us</Link></button>
                </div>
                <div onClick={()=> setopenham(!openham)} className='cursor-pointer md:hidden'>
                    <MenuIcon/>
                </div>
                {
                    openham && 
                    <div  className='absolute bg-white shadow-md p-5 w-full top-14 left-0'>
                        <div className='flex flex-col items-center gap-3 z-40'>
                            <Navbaritems route='/' title='Home'/>
                            <Navbaritems route='/service' title='Services'/>
                            <Navbaritems route='/about' title='About us'/>
                            <button className='px-2 py-1 text-sm bg-primary-main-blue text-white rounded-md hover:bg-white hover:text-primary-main-blue border-2 border-primary-main-blue transition duration-500'><Link to='/contact'>Contact us</Link></button>
                        </div>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default Navbar

