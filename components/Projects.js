import React from 'react'

function Projects() {
  return (
    <div className='pt-20'>
        <div className='flex gap-x-5 items-center justify-between'>
            <h2 className='flex flex-col'>
                <span className='sm:text-4xl text-2xl font-black tracking-widest font-serif text-slate-600' >Our </span>
                <span className='sm:text-4xl text-2xl font-black tracking-widest font-serif'>Projects</span>
            </h2>
            <div className='sm:text-base text-xs'>
                <p>
                    Our works is the bridge to various insightfull digital experiences.<br/>Check our works below for featured
                </p>
            </div>
        </div>
        <div className='py-10'>
            <div className='flex relative sm:justify-between w-auto bg-cyan-800 overflow-hidden items-center'>
                <span className='w-1/2 sm:w-1/2 h-96 bg-cyan-200 absolute -rotate-6 -right-5 -top-10 sm:h-[30rem]'/>
                <div className='w-1/2 py-10 px-5'>
                    <h1 className='sm:text-7xl text-sm font-bold text-cyan-50'>
                        Top-Rated Real Estate Websites For Millenials
                    </h1>
              
                    <div className='flex gap-2 items-center py-3 text-cyan-50 text-xs font-light'>
                        <img src='icons/right-arrow.svg' className='h-3 pl-2'/>
                        <p>View Works</p>
                    </div>
                </div>
                <div className='w-1/2 sm:w-2/6 pr-5 py-5 relative'>
                    <img src='images/real-estate.jpeg'></img>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <p className='text-xs font-bold'>
                See all the work that we have done before
            </p>
            <span>
                <img src='icons/right-arrow.svg' className='h-3 pl-2'/>
            </span>
        </div>
    </div>
  )
}

export default Projects