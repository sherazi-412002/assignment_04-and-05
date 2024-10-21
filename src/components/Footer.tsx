import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-black h-auto gap-5 md:gap-0 md:h-76 lg:h-52 flex bottom-0 flex-col md:flex-row justify-between p-4'>
        <div className='mx-5 md:mx-16'>
            <span className='text-3xl text-white flex justify-center '>Links</span><br />
            <div className='md:hidden'>
              <ul className='flex flex-row justify-center items-center font-bold text-white text-xl gap-5'>
                <Link href={'/'}><li className=' hover:text-green-400'>Home</li></Link>
                <Link href={'/about'}><li className=' hover:text-green-400'>About</li></Link>
               <Link href={'/blogs'}> <li className=' hover:text-green-400'>Blogs</li></Link>
                <Link href={'/contact'}><li className=' hover:text-green-400'>Contact</li></Link>
              </ul>
            </div>
            <ul className='flex justify-between flex-col gap-8 mt-7'>
                <Link href={"https://www.linkedin.com/in/syed-shoaib-sberazi-3638822b4/"}>
                <li className='text-white text-2xl flex gap-4 ml-10 md:ml-0'>LinkedIn Id : <GrLinkedin size="34px" color='white'/></li>
                </Link>

                <Link href={"https://github.com/sherazi-412002"}>
                <li className='text-white text-2xl flex gap-4 ml-10 md:ml-0'>GitHub Id : < FaGithub size="34px" color='white'/></li>
                </Link>
            </ul>
        </div>
        <div className='md:flex justify-center hidden md:mt-40 text-gray-500 gap-1'>
            <p className='mt-1'><FaRegCopyright /></p>
            <p>2024 Syed Shoaib Sherazi | All Right Revesed</p>
        </div>
        <div className='mx-5 md:mx-16'>
             <span className='text-3xl text-white flex justify-center'>Projects</span>
             <Link href={"https://hackathons-cq1n.vercel.app/"}>
             <p className='text-blue-600 underline mt-11 ml-10 md:ml-0'>Resume Builder Web Application</p>
             </Link>
        </div>

        <div className='flex justify-center md:hidden mt-4 md:mt-40 text-gray-500 gap-1'>
            <p className='mt-1'><FaRegCopyright /></p>
            <p>2024 Syed Shoaib Sherazi | All Right Revesed</p>
        </div>

    </div>
  )
}

export default Footer