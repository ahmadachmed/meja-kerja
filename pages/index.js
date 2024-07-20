import Head from 'next/head'
import Companies from '../components/Companies'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <Head>
        <title>Meja Kerja 1.0</title>
        <meta name="description" content="Create opportunity with join us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='py-3 px-5 xl:max-w-7xl justify-center mx-auto'>
        <Hero />
        <Companies />
        <Projects />
      </div>
      <Footer/>
    </>
  )
}
