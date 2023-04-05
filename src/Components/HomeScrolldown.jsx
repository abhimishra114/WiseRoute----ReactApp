import React from 'react'
import { TfiMouse } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";
function HomeScrolldown() {
  return (
    <>


    <div className='container mx-auto px-10 mb-60'>
        <a href="#introduction">
            <div className='md:flex scroll-transition gap-2 cursor-pointer  hidden items-center mt-10  p-5'>
                <TfiMouse size={30}/>
                <h1 className='text-lg font-semibold font-[alkatra]'>Scroll Down</h1>
                <AiFillCaretDown size={20}/>
            </div>
        </a>
    </div>
    </>
  )
}

export default HomeScrolldown