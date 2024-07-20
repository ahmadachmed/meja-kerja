import Link from 'next/link';
import React, {useState } from 'react'
import Social from './Social';
import Menu from './Menu';


function Navbar() {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open)
  }

  const social = Social
  const links = Menu

  return (
    <nav className='flex shadow-sm py-5 sm:px-10 justify-between  items-center sticky inset-x-0 top-0 z-20 bg-slate-100'>
      <div className='flex basis-1/2 px-5'>
        <h2 className='text-lg font-bold'>
          Meja Kerja
        </h2>
      </div>
      <ul className={`flex md:flex-row md:w-auto md:h-auto md:static md:shadow-none md:opacity-100  md:bg-transparent flex-col py-3 shadow-lg absolute bg-slate-500  ${open ? " opacity-0 " : "top-0 left-0 opacity-100 h-screen w-screen text-slate-50 justify-between px-5"}`}>
        <div className='flex justify-end md:hidden'>
          <button onClick={toggleMenu}>&#x2715;</button>
        </div>
        <div className={`md:flex ${open ? "" : "text-5xl uppercase"}`}>
          {
            links.map((el, index) => {
              return (
                <li key={index} className=' hover:cursor-pointer md:px-5 md:py-2 py-5 active:border-b-slate-800 active:border-b-4 active:font-extrabold md:hover:bg-transparent md:hover:text-slate-500 md:hover:font-bold hover:text-slate-50 hover:bg-slate-800 duration-300'>
                  <a href={el.href}>
                    {el.title}
                  </a>
                </li>
              )
            })
          }
        </div>
        <div className='md:hidden'>
          {social.map((el, index) => {
            return (
              <li key={index}>
                <Link href={el.link}>
                  {el.text}
                </Link>
              </li>
            )
          })}
        </div>
      </ul>
      <div className='flex basis-1/2 px-5 justify-end md:hidden'>
        <button onClick={toggleMenu} className='py-2 px-5 border-2 bg-slate-200 text-xs hover:bg-slate-300 duration-300 rounded-full md:hidden'>
          Menu
        </button>
      </div>
    </nav>
  )
}

export default Navbar