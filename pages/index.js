import Head from 'next/head'
import Companies from '../components/Companies'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

export default function Home() {
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
    </>
  )
}
