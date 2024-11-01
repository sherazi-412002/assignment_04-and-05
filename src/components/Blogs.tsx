import React from 'react'
import Image from 'next/image'
import oceanImg from '../public/blog-ocean.webp'
import entoImg from '../public/blog-ento.jpg'
import wildImg from '../public/blog-wild.jpg'
import paraImg from '../public/blog-para.webp'
import evoImg from '../public/blog-evolution1.jpg'
import physImg from '../public/blog-phys.jpg'
import Link from 'next/link'


function Blogs() {
  return ( 

    <section className='flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-6 w-[94%] gap-8 m-[3%] border-4 rounded-2xl p-5 justify-around'>
        
        {/* card01 */}
        <div className='h-[610px] md:h-[570px] sm:h-[570px] lg:h-[490px] w-[450px] md:w-[90%] lg:w-[450px] md:ml-[5%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={oceanImg} alt='oceanoghraphyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <h2 className='text-3xl flex justify-center items-center font-serif font-bold m-4'>Oceanography</h2>
            <p className='text-justify'>Oceanography is the scientific study of the ocean, its ecosystems, and the physical,
             chemical, biological, and geological processes that govern it. This field covers a
             wide range of topics, including ocean currents, waves, tides, marine organisms.</p><br/>
             <Link href={'/oceanography'}><button className='border-gray-600 border-2 md:mt-12 lg:mt-0 rounded-xl p-2 bg-gray-400 hover:shadow-gray-500  hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-gray-300'>Read More</button></Link>
        </div>


        {/* card02 */}
        <div className='h-[610px] md:h-[570px] lg:h-[490px] sm:h-[570px] w-[450px] md:w-[90%] lg:w-[450px] md:ml-[5%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={wildImg} alt='wildlifeImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <h2 className='text-3xl flex justify-center items-center font-serif font-bold m-4'>Wildlife</h2>
            <p className='text-justify'>Wildlife plays a crucial role in maintaining ecological balance, supporting biodiversity,
             and contributing to healthy ecosystems. Conservation efforts often focus on protecting wildlife 
             from threats like habitat destruction, pollution, climate change, and over-exploitation.</p><br/>
             <Link href={'/wildelife'}><button className='border-gray-600 border-2 rounded-xl p-2 bg-gray-400 hover:shadow-gray-500 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-gray-300'>Read More</button></Link>
        </div>


        {/* card03 */}
        <div className='h-[610px] md:h-[570px] sm:h-[570px] w-[450px] lg:h-[490px] md:w-[90%] lg:w-[450px] md:ml-[5%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={entoImg} alt='entomologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <h2 className='text-3xl flex justify-center items-center font-serif font-bold m-4'>Entomology</h2>
            <p className='text-justify'>Insects play critical roles in ecosystems as pollinators, decomposers, and as part of the food chain.
             Some entomologists focus on beneficial insects like bees, while others study pest species that affect 
             agriculture, human health, or spread diseases such as malaria or dengue fever.</p><br/>
             <Link href={'/entomology'}><button className='border-gray-600 border-2 rounded-xl p-2 bg-gray-400 hover:shadow-gray-500 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-gray-300'>Read More</button></Link>
        </div>


        {/* card04 */}
        <div className='h-[610px] md:h-[570px] sm:h-[570px] w-[450px] lg:h-[490px] md:w-[90%] lg:w-[450px] md:ml-[5%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={evoImg} alt='evolutionImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <h2 className='text-3xl flex justify-center items-center font-serif font-bold m-4'>Evolution</h2>
            <p className='text-justify'>Evolution is the process by which species of organisms change over time through the gradual accumulation
             of genetic variations. These changes can lead to the development of new species and are driven by mechanisms
             such as natural selection, mutation, genetic drift.</p><br/>
             <Link href={'/evolution'}><button className='border-gray-600 border-2 rounded-xl p-2 bg-gray-400 hover:shadow-gray-500 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-gray-300'>Read More</button></Link>
        </div>


        {/* card05 */}
        <div className='h-[610px] md:h-[570px] sm:h-[570px] w-[450px] lg:h-[490px] md:w-[90%] lg:w-[450px] md:ml-[5%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={physImg} alt='physiologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <h2 className='text-3xl flex justify-center items-center font-serif font-bold m-4'>Physiology</h2>
            <p className='text-justify'>Physiology is the branch of biology that studies the functions and processes of living organisms, 
            including their organs, tissues, cells, and biological systems. It explores how organisms carry out 
            vital functions like breathing, digestion, circulation, and reproduction.</p><br/>
            <Link href={'/physiology'}><button className='border-gray-600 border-2 rounded-xl p-2 bg-gray-400 hover:shadow-gray-500 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-gray-300'>Read More</button></Link>
        </div>


        {/* card06 */}
        <div className='h-[610px] md:h-[570px] sm:h-[570px] w-[450px] lg:h-[490px] md:w-[90%] lg:w-[450px] md:ml-[5%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={paraImg} alt='parasitologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <h2 className='text-3xl flex justify-center items-center font-serif font-bold m-4'>Parasitology</h2>
            <p className='text-justify'>The field of parasitology also explores parasitic diseases that affect humans, animals, and plants,
             as well as methods for diagnosing, treating, and preventing these infections. It is important in 
             public health, veterinary medicine. <br /> <br /> </p><br/>
             <Link href={'/parasitology'}><button className='border-gray-600 border-2 rounded-xl p-2 bg-gray-400 hover:shadow-gray-500 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-gray-300'>Read More</button></Link>
        </div>


    </section>
    
  )
}

export default Blogs