import React from 'react'

function Hero() {
  return (
    <div className=''>
        <div className='items-center mx-auto sm:max-w-md xl:max-w-3xl py-12'>
            <h1 className='xl:text-8xl text-7xl font-bold tracking-wide font-serif'>
                <span className=' text-gray-500'>CREATE DESIGN TO </span>
                <span>SIMPLIFY HUMAN LIFE.</span>
            </h1>
        </div>
        <div className='flex mx-auto max-w-3xl justify-between items-center'>
            <div><p></p></div>
            <div className='xl:max-w-lg font-light items-end'>
                <p>
                    We Build more than just experiences. We are a full services agency designing digital experiences for large and small business alike.
                </p>
                <div className='flex mt-5 items-center cursor-pointer '>
                    <div className='mr-3'>
                        <span>
                            <img src='icons/right-arrow.svg' className='h-4'/>
                        </span>
                    </div>
                    <div>
                        <button className='text-sm font-bold'>
                            View Our Work
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero