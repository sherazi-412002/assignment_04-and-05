import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainImg from '../../public/cea01.jpg'
import Img02 from '../../public/ocea02.jpg'
import Img03 from '../../public/ocea03.png'
import Img04 from '../../public/ocea04.jpeg'


function page() {
  return (
    <div>

        <div className='p-12 flex flex-col gap-6'>
            <div><Image src={mainImg} alt='name' height={1000} width={1000} className='h-72 w-[98%] md:h-96 md:w-[90%] ml-[1%] md:ml-[5%] mt-32'/></div>
            <div className='text-justify'>Oceanography is vital for understanding and preserving Earths oceans, which play a key role
            in regulating climate, supporting biodiversity, and sustaining human life. By studying ocean currents,
            temperature patterns, and the chemical composition of seawater, scientists can predict climate changes 
            and weather patterns, helping mitigate the impacts of global warming. The oceans are also home to a diverse
            array of marine species, many of which are crucial for maintaining ecosystems and providing food for millions
            of people. Oceanography contributes to sustainable fisheries management, aquaculture development, and the protection
            of marine habitats from pollution and overexploitation. Moreover, it aids in harnessing renewable energy from tides 
            and waves, as well as exploring valuable natural resources like oil and minerals. Additionally, understanding ocean 
            dynamics helps in predicting and mitigating natural disasters such as tsunamis and storm surges, protecting coastal 
            communities and economies. Overall, oceanography is essential for ensuring the sustainable management of ocean resources 
            and addressing global environmental challenges.</div>
        </div>



        <section className='flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-6 w-[94%] gap-8 m-[3%] border-4 rounded-2xl p-5'>


         {/* card01 */}
         <div className='h-[610px] sm:h-[570px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 bg-yellow-200 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img02} alt='oceanoghraphyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>Oceanography reveals the beauty and wonder of the oceans, exploring the vast, mysterious world beneath the waves. 
                It uncovers the intricate patterns of ocean currents, the vibrant ecosystems that thrive in coral reefs, and the fascinating creatures that
                 live in the deep sea. Through the study of oceanography, we gain a deeper appreciation for how the ocean shapes our climate, sustains life,
                  and provides endless resources.</p><br/>
        </div>


        {/* card02 */}
        <div className='h-[610px] sm:h-[570px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 bg-yellow-200 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img03} alt='wildlifeImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>
            Shores are the magical meeting point between land and sea, where waves gently lap or crash dramatically against the coast, creating a dynamic and 
            ever-changing environment. They serve as vital habitats for a variety of plants and animals, from delicate dune grasses to seabirds and crabs. 
            Shores are also places of beauty and serenity, where people come to relax, explore, and connect with nature. Beyond their beauty, shores play an
             important role in protecting inland areas from storms and erosion.</p><br/>
        </div>


        {/* card03 */}
        <div className='h-[610px] sm:h-[570px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 bg-yellow-200 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img04} alt='entomologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>The fauna of the oceans is incredibly diverse, ranging from tiny plankton to the largest animal on Earth, the blue whale.
                 Oceans are home to a vast array of creatures, including fish, marine mammals like dolphins and seals, and countless species of invertebrates like 
                 jellyfish, starfish, and octopuses. Coral reefs teem with colorful fish and sea creatures, while the deep sea hosts mysterious, bioluminescent 
                 organisms that thrive in darkness.</p><br/>
        </div>




        <Link href={'/'}><button className='border-gray-600 border-2 p-2 w-24 rounded-xl  hover:bg-yellow-600 hover:shadow-yellow-700 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-white'>Back</button></Link>


        </section>





    </div>
  )
}

export default page