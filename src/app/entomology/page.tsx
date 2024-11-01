import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainImg from '../../public/ento04.jpg'
import Img02 from '../../public/ento01.jpg'
import Img03 from '../../public/ento02.jpg'
import Img04 from '../../public/ento03.jpg'


function page() {
  return (
    <div>

        <div className='p-12 flex flex-col justify-center lg:flex-row lg:gap-10 gap-6'>
            <div><Image src={mainImg} alt='name' height={1000} width={1000} className='h-96 w-[98%] md:h-96 md:w-[90%] ml-[1%] md:ml-[5%] mt-32'/></div>
            <div className='text-justify lg:w-[50%] lg:mt-32 text-lg lg:text-xl'>Entomology is the scientific study of insects, a branch of zoology that focuses on the vast and diverse 
            world of these arthropods. Insects are the most numerous and widespread group of animals on Earth, representing over half of all known 
            living organisms. Entomologists study various aspects of insect biology, including their physiology, behavior, ecology, taxonomy, and 
            their interactions with humans and other species. Insects play crucial roles in ecosystems as pollinators, decomposers, and food 
            sources for other animals. They can also impact human activities, both positively and negatively, by being vectors of diseases or as 
            beneficial agents in agriculture through pollination and biological control. The field of entomology has practical applications in 
            pest management, agriculture, environmental monitoring, and forensic science..</div>
        </div>



        <section className='flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-6 w-[94%] gap-8 m-[3%] border-4 rounded-2xl p-5'>


         {/* card01 */}
         <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] flex flex-col gap-4 md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img02} alt='oceanoghraphyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>Lepidoptera is an order of insects that includes butterflies and moths, renowned for their vibrant colors 
            and intricate wing patterns. Characterized by their scale-covered wings, these insects undergo a complete metamorphosis, transforming 
            from larvae (caterpillars) to adults.In contrast, grasshoppers belong to the order Orthoptera and are recognized for their powerful hind 
            legs, which allow them to jump long distances.</p><br/>
        </div>


        {/* card02 */}
        <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] md:w-[80%] flex flex-col gap-4 lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img03} alt='wildlifeImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>The mantis, belonging to the order Mantodea, is a unique and fascinating group of insects known for their 
              distinctive appearance and predatory behavior. Characterized by their elongated bodies, triangular heads, and large, compound eyes, 
              mantises possess a pair of raptorial forelegs adapted for capturing prey. They are primarily carnivorous and are known for their 
              ambush hunting techniques, often remaining motionless while waiting for unsuspecting insects to come within striking distance. 
              </p><br/>
        </div>


        {/* card03 */}
        <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px]  md:w-[80%] flex flex-col gap-4 lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-gray-100 hover:shadow-gray-500 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img04} alt='entomologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>Hoppers and locusts are both members of the order Orthoptera, but they exhibit distinct behaviors and life 
            stages. Hoppers refer to the juvenile forms of grasshoppers and crickets, characterized by their small size and inability to fly. They 
            resemble miniature versions of adult insects, undergoing several molts before reaching maturity. Hoppers primarily feed on vegetation 
            and can sometimes become pests in agricultural settings, particularly when their populations are high.</p><br/>
        </div>




        <Link href={'/'}><button className='border-gray-600 border-2 p-2 w-24 rounded-xl bg-gray-400  hover:bg-gray-300 hover:shadow-gray-500 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black'>Back</button></Link>


        </section>





    </div>
  )
}

export default page