import Image from 'next/image'
import React from 'react'

function Companies() {
  return (
    <div className=' pt-20'>
        <p className='text-xs font-bold'>
            +100 Companies have collaborated
        </p>
        <div className='grid grid-cols-3 sm:grid-cols-5  gap-1 items-center pt-5'>
            <div className=' shadow-md opacity-60 hover:opacity-100  ease-in-out duration-300'>
                <Image alt="company-logo" width={0} height={0} sizes='100vw' src='icons/google-logo.svg' className='w-auto h-auto'/>
            </div>
            <div className=' shadow-md opacity-60 hover:opacity-100 ease-in-out duration-300'>
                <Image alt="company-logo" width={0} height={0} sizes='100vw' src='icons/facebook-logo.svg' className='w-auto h-auto'/>
            </div>
            <div className=' shadow-md opacity-60 hover:opacity-100 ease-in-out duration-300'>
                <Image alt="company-logo" width={0} height={0} sizes='100vw' src='icons/logitech-logo.svg' className='w-auto h-auto'/>
            </div>
            <div className=' shadow-md opacity-60 hover:opacity-100 ease-in-out duration-300'>
                <Image alt="company-logo"  width={0} height={0} sizes='100vw' src='icons/tokopedia-logo.svg' className='w-auto h-auto'/>
            </div>
            <div className=' shadow-md opacity-60 hover:opacity-100 ease-in-out duration-300'>
                <Image alt="company-logo" width={0} height={0} sizes='100vw' src='icons/pull-and-bear-logo.svg' className='w-auto h-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Companies