import React from 'react'
import loader from "/loader.gif"

function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img className="h-96 w-96  object-cover" src={loader} alt="loading..." />
    </div>
  )
}

export default Loading;