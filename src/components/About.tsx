import React from 'react';
import profile from '@/public/profilePic.jpg';
import Image from 'next/image';
import { IoRibbon } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";

function About() {
  return (
    <div className='mt-32'>
        <div className='font-serif border-[1px] border-gray-300 w-[96%] ml-[2%] mt-6 rounded-3xl'>
        <p className='flex items-center justify-center text-gray-500 mt-3 font-sans font-bold'>Get To Know More</p>
        <h1 className='flex justify-center mt-2 text-6xl font-bold font-sans'>About Me</h1>

        <div className='w-[90%] ml-0 md:ml-[5%] mt-14 flex flex-col md:flex-col lg:flex-row mb-6'>
            <div className='ml-[5%] md:ml-[15%] lg:ml-[5%]'>
                <Image src={profile} alt='profile' width={1000} height={1000} className='h-[400px] w-[450px] rounded-3xl'/>
 
            </div>

            <div className='w-[95%] mt-8 md:mt-8 lg:mt-0 ml-[3%] md:ml-[5%]'>

                <div className='flex flex-col md:flex-row w-[100%] gap-6 md:gap-2 lg:gap-6 '>
                    <div className='border-[2px] border-gray-400 h-48 rounded-3xl w-96 p-4 md:space-y-1 lg:space-y-2 flex flex-col justify-center items-center '>
                        <div><IoRibbon size={30} /></div>
                        <h2 className='text-2xl font-bold font-sans'>Experience</h2>
                        <p className='text-gray-700'>1 + years</p>
                        <p className='text-gray-700'>Teacher</p>
                        <p className='text-gray-700'>Allama Iqbal Sec School | Sep 2021 - Nov 2023</p>
                    </div>
                    <div className='border-[2px] border-gray-400 h-48 rounded-3xl w-96 p-4 md:space-y-1 lg:space-y-2 flex flex-col justify-center items-center '>
                        <div><MdCastForEducation size={30} /></div>
                        <h2 className='text-2xl font-bold font-sans'>Education</h2>
                        <p className='text-gray-700'>Matric in Science , 2018</p>
                        <p className='text-gray-700'>Intermediate in Medical , 2020</p>
                        <p className='text-gray-700'>Bachelor of Science in Zoology , Continue</p>
                    </div>
                </div>

                <div className='mt-6 space-y-2 md:space-y-2 lg:space-y-1'>
                    <p className='text-justify'>Hi, I am a web developer  and a growing passion for front-end development. Currently, I am pursuing a 
                        BS in Zoology, but alongside my studies, I have developed a strong interest in creating responsive and intuitive user interfaces.</p>
                    <p>I have gained proficiency in HTML, CSS, and TypeScript, and have worked with Next.js to build modern web applications. My 
                        focus is on UI/UX design and ensuring websites are responsive across all devices, creating seamless user experiences.</p>
                    <p>I love the way development combines creativity with problem-solving, and I am excited to continue learning and growing as a developer
                        while finishing my degree. I look forward to building more projects that reflect both my love for technology and the natural world!</p>
                </div>

            </div>
        </div>

    </div>
    </div>
  )
}

export default About