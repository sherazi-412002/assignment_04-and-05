import Image from 'next/image'
import React from 'react'
import logo from '../public/assign3.jpg'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div>

       <header className='flex justify-between items-center h-28 p-1 left-0 right-0 top-0 bg-charcoal w-[90%] rounded-full mt-2 ml-[5%] fixed'>
        <div>
            <Image src={logo} alt='Logo' width={500} height={500} className='h-24 w-24 ml-10 sm:m-16 md:ml-20 lg:ml-24 rounded-full'/>
             
        </div>

        <div>
            <ul className=' hidden md:flex justify-between gap-10 text-2xl text-white font-bold mr-20'>
                <Link href={'/'}><li className=' hover:text-green-400'>Home</li></Link>
                <Link href={'/blogs'}><li className=' hover:text-green-400'>Blogs</li></Link>
                <Link href={'/about'}><li className=' hover:text-green-400'>About</li></Link>
                <Link href={'/contact'}><li className=' hover:text-green-400'>Contact</li></Link>
            </ul>
        </div>
        <div className='md:hidden mr-10'>
           <GiHamburgerMenu color='gray' size={50} width={500} height={500}/>
        </div>
        
        </header>
       


    </div>
  )
}

export default Header