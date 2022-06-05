import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(true);
  const links = [
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Works",
      href: "/works"
    },
    {
      title: "Services",
      href: "/services"
    },
    {
      title: "Contact",
      href: "/contact"
    }
  ]
  return (
    <nav className='flex shadow-sm py-5 px-5 sm:px-10 justify-between  items-center sticky inset-x-0 top-0 z-20 bg-slate-100'>
        <div className='flex basis-1/2'>
            <h2 className='text-lg font-bold'>
                Meja Kerja
            </h2>
        </div>
        <ul className={`flex md:flex-row md:w-auto md:h-auto md:static md:shadow-none md:opacity-100  md:bg-transparent flex-col right-6 py-3 shadow-lg absolute w-[30%] bg-slate-100 top-14 transition-all duration-300 ease-in-out ${open ? " opacity-0" : "opacity-100"}`}>
          {
            links.map((el, index) =>{
              return (
                <li key={index} className='hover:cursor-pointer text-sm px-5 py-2 active:border-b-slate-800 active:border-b-4 active:font-extrabold md:hover:bg-transparent md:hover:text-slate-500 md:hover:font-bold hover:text-slate-50 text-slate-800 hover:bg-slate-800 duration-300'>
                  <a href={el.href}>
                    {el.title}
                  </a>
                </li>
              )
            } )
          }
        </ul>
        <button onClick={() => setOpen(!open)} className='py-2 px-5 border-2 bg-slate-200 rounded-full text-xs hover:bg-slate-300 duration-300 md:hidden'>Menu</button>
    </nav>
  )
}

export default Navbar