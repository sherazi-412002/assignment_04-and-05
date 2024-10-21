import React from 'react';
import Image from 'next/image';
import image from '../public/main.jpg';

function HeroSection() {
  return (
    <div className='mt-36 flex sm:flex-row gap-10 sm:gap-0 flex-col justify-between items-center'>
        <div>
        <h1 className="ml-[5%] text-4xl md:text-6xl  font-bold font-serif">Zoology</h1><br />
        <p className=' sm:m-4 ml-[5%] w-[90%]  text-xl sm:text-2xl text-justify'>
        Zoology is the scientific study of animals, including their biology, behavior, structure,
        physiology, classification, and distribution. As a branch of biology, it explores a vast 
        range of topics, from the smallest organisms like microscopic invertebrates to the largest 
        animals such as whales. Zoology examines both living and extinct species, contributing to 
        our understanding of animal life and its role in ecosystems.</p>
        </div>

        <div>
        <Image src={image} alt='image' height={1000} width={1000} className='h-[400px] md:w-[200rem] ml-[5%] md:ml-[0%] md:mr-[5%] w-[90%]'/>
        </div> 

    </div>
  )
}

export default HeroSection