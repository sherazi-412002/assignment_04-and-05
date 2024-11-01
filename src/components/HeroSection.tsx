import React from 'react';
import Image from 'next/image';
import image from '../public/main.jpg';

function HeroSection() {
  return (
    <div className='w-[100%] mt-36 flex sm:flex-row gap-10 lg:gap-10 flex-col  justify-center items-center'>
        <div className='md:w-[45%] w-[90%]'>
        <h1 className="text-5xl md:text-6xl  font-bold font-title">Zoology</h1><br />
        <p className=' sm:m-4 text-xl sm:text-2xl md:text-xl lg:text-2xl text-justify '>
        Zoology is the scientific study of animals, including their biology, behavior, structure,
        physiology, classification, and distribution. As a branch of biology, it explores a vast 
        range of topics, from the smallest organisms like microscopic invertebrates to the largest 
        animals such as whales. Zoology examines both living and extinct species, contributing to 
        our understanding of animal life and its role in ecosystems.</p>
        </div>

      
        <Image src={image} height={1000} width={1000} alt='image' className='h-[400px] w-[90%] md:w-[45%]'/>
        

    </div>
  )
}

export default HeroSection