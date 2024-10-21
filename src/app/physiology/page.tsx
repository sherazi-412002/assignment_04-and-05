import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainImg from '../../public/physio01.jpg'
import Img02 from '../../public/physio02.jpg'
import Img03 from '../../public/physio03.jpg'
import Img04 from '../../public/physio04.jpg'


function page() {
  return (
    <div>

        <div className='p-12 flex flex-col gap-6'>
            <div><Image src={mainImg} alt='name' height={1000} width={1000} className='h-72 w-[98%] md:h-96 md:w-[90%] ml-[1%] md:ml-[5%] mt-32'/></div>
            <div className='text-justify'>Physiology is the branch of biology that studies the functions and mechanisms of living organisms, 
              focusing on how their systems, organs, cells, and biomolecules work together to sustain life. This discipline encompasses a wide 
              range of topics, from the molecular and cellular levels to the integration of systems within whole organisms.In animals, physiology 
              examines processes such as respiration, circulation, digestion, and homeostasis—the regulation of internal conditions despite 
              external changes. For instance, it explores how the heart pumps blood, how lungs facilitate gas exchange, and how kidneys filter 
              waste from the blood. In plants, physiology investigates processes like photosynthesis, nutrient uptake, and water regulation, 
              illustrating how plants adapt to their environments.</div>
        </div>



        <section className='flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-6 w-[94%] gap-8 m-[3%] border-4 rounded-2xl p-5'>


         {/* card01 */}
         <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img02} alt='oceanoghraphyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>The nervous system is a complex network of cells and tissues that coordinates and regulates the functions 
              of the body by transmitting signals between different parts. It is responsible for processing sensory information, controlling 
              movements, and facilitating communication between various organs and systems. The nervous system can be broadly divided into two 
              main components: the central nervous system (CNS) and the peripheral nervous system (PNS).
              .</p><br/>
        </div>


        {/* card02 */}
        <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img03} alt='wildlifeImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>DNA (deoxyribonucleic acid) is the molecular blueprint of life, playing a critical role in the physiology 
              of all living organisms. It carries the genetic information necessary for the growth, development, functioning, and reproduction of 
              cells. Understanding DNA is essential for comprehending various physiological processes, including gene expression, protein synthesis,
              and cellular regulation.</p><br/>
        </div>


        {/* card03 */}
        <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img04} alt='entomologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>A neuron is a specialized cell that serves as the fundamental building block of the nervous system, responsible 
              for transmitting and processing information throughout the body. Neurons are unique in their ability to generate and propagate electrical 
              impulses, allowing for rapid communication between different parts of the body. They play a crucial role in various physiological functions, 
              including sensation, movement, thought, and reflexes.</p><br/>
        </div>




        <Link href={'/'}><button className='border-gray-600 border-2 p-2 w-24 rounded-xl  bg-yellow-600 hover:shadow-yellow-700 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-yellow-500'>Back</button></Link>


        </section>





    </div>
  )
}

export default page