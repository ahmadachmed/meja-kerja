import React from 'react'

function Navbar() {
  return (
    <div className='flex pt-3 px-5 justify-between items-center'>
        <div>
            <h2 className='text-lg font-bold'>
                Meja Kerja
            </h2>
        </div>
        <div className='py-2 px-5 border-2 bg-slate-200 rounded-full text-sm'>
            <button>Menu</button>
        </div>
    </div>
  )
}

export default Navbar