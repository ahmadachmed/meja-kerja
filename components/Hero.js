import Image from 'next/image'
import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'

gsap.registerPlugin(CustomEase)
CustomEase.create('cubic-text', '0.25,1,0.5,1')

function Hero() {
    useEffect(() => {
        const titles = document.querySelectorAll('.h_title') 
        const tl = gsap.timeline({defaults: {duration:1}})

        titles.forEach((titles,index) => {
            const title = titles.querySelectorAll('span span')
            const delay = index * 0.8

            tl.to(
                title,
                {
                    y: 0,
                    duration: 1.5,
                    ease: 'cubic-text'
                },
                delay
            )
        })
        return () => {}

    },[])

    return (
        <div className=''>
            <div className='items-center mx-auto sm:max-w-md xl:max-w-3xl py-12'>
                <h1 className='h_title xl:text-8xl text-7xl font-bold tracking-wide font-serif'>
                    <span className='overflow-hidden inline-block align-bottom'>
                        <span className=' text-gray-500 inline-block translate-y-full'>CREATE DESIGN TO </span>
                    </span>
                   
                </h1>
                <h1 className='h_title xl:text-8xl text-7xl font-bold tracking-wide font-serif'>
                    <span className='overflow-hidden inline-block align-bottom'>
                        <span className='inline-block translate-y-full'>SIMPLIFY HUMAN LIFE.</span>
                    </span>
                </h1>
            </div>
            <div className='flex mx-auto max-w-3xl justify-between items-center'>
                <div><p></p></div>
                <div className='xl:max-w-lg font-light items-end subtitle'>
                    <p>
                        We Build more than just experiences. We are a full services agency designing digital experiences for large and small business alike.
                    </p>
                    <div className='flex mt-5 items-center cursor-pointer '>
                        <div className='mr-3'>
                            <span>
                                <Image alt='right-arrow' width={16} height={12} sizes='100vw' src='icons/right-arrow.svg' className='h-4 w-auto' />
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