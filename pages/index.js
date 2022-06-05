import Head from 'next/head'
import Companies from '../components/Companies'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className=''>
       <Head>
        <title>Meja Kerja 1.0</title>
        <meta name="description" content="Create opportunity with join us" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet" />
      </Head>
      <Navbar/>
      <div className='py-3 px-5 xl:max-w-7xl justify-center mx-auto'>
        <Hero/>
        <Companies/>
        <Projects/>
      </div>
    </div>
  )
}
