'use client'

import Image from 'next/image'
import logo from '../public/assign3.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";

function Header() {

  const [isClick,setisClick] = useState(false)

  const toggleNavbar = ():void => {
    setisClick (!isClick)
  }  
  return (
    <div>

       <header className='flex justify-between items-center h-24 md:h-28 p-1 left-0 right-0 top-0 bg-black w-[100%] md:w-[90%] rounded-lg mt-2 md:ml-[5%] fixed'>
        <div>
            <Image src={logo} alt='Logo' width={500} height={500} className=' h-20 md:h-24 w-20 md:w-24 ml-2 sm:m-16 md:ml-20 lg:ml-24 rounded-full'/>
             
        </div>

        <div>
            <ul className=' hidden md:flex justify-between gap-10 text-2xl text-white font-bold mr-20'>
                <Link href={'/'}><li className=' hover:text-black hover:duration-500 hover:delay-300 hover:rounded-lg hover:bg-white hover:p-2'>Home</li></Link>
                <Link href={'/blogs'}><li className=' hover:text-black hover:duration-500 hover:delay-300 hover:rounded-lg hover:bg-white hover:p-2'>Blogs</li></Link>
                <Link href={'/about'}><li className=' hover:text-black hover:duration-500 hover:delay-300 hover:rounded-lg hover:bg-white hover:p-2'>About</li></Link>
                <Link href={'/contact'}><li className=' hover:text-black hover:duration-500 hover:delay-300 hover:rounded-lg hover:bg-white hover:p-2'>Contact</li></Link>
            </ul>
        </div>


        <div className='md:hidden flex items-center mr-3'>

        <div className='' onClick={toggleNavbar}>
              {isClick?(<div><RxCross2 size={40}  color='white'/></div>):(<div><GiHamburgerMenu size={40} color='white' /></div>)}
    
        </div >
        </div>

        
        </header>

        {isClick &&  (
            <div className='md:hidden mt-28'>
            <ul className='flex flex-col text-right pr-4 gap-3 pb-6 pt-6  bg-black text-white text-2xl hover:duration-300 hover:delay-300'>
                <Link href={'/'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2 hover:duration-300 hover:delay-300 ' >Home</li></Link>
                <Link href={'/about'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2 hover:duration-300 hover:delay-300 ' >About</li></Link>
                <Link href={'/blogs'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2  hover:duration-300 hover:delay-300' >Blogs</li></Link>
                <Link href={'/contact'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2  hover:duration-300 hover:delay-300' >Contact</li></Link>
                </ul>
            </div>

            )}
       


    </div>
  )
}

export default Header