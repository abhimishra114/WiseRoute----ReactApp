import React from 'react'
import { Link } from 'react-router-dom'
function Navbaritems(props) {
  return (
    <>
      <div>
        <h1 className='text-sm text-gray-400 hover:opacity-70 transition duration-300 font-bold'><Link to={`${props.route}`}>{props.title}</Link></h1>
      </div>
    </>
  )
}

export default Navbaritems