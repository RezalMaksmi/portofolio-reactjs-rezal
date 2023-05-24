import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center'>
        <div class="loader">
            <div class="outer"></div>
            <div class="middle"></div>
            <div class="inner"></div>
        </div>

    </div>
  )
}

export default Loading
