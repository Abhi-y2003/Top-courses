import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className='flex flex-col mt-12 space-y-10'>
        <div className='spinner'></div>
        <p className='font-bold py-5 text-lg '>Loading....</p>
    </div>
  )
}

export default Spinner