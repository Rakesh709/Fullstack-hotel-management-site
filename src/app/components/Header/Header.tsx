import Link from 'next/link';
import React from 'react'

 const Header = () => {
  return <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
      <div className='flex item-center w-full md:2/3'>
        <Link href="/" className='font-black text-[#F27405]'>Hotelzz</Link>
      </div>

      <ul>

      </ul>
  </header>
    
  
}

export default Header;