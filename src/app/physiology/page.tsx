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
            <div><Image src={mainImg} alt='name' height={1000} width={1000} className='h-96 w-[90%] ml-[5%] mt-32'/></div>
            <div className='text-justify'>Evolution is the process by which organisms change over time through variations in 
            their genetic makeup, leading to the development of new species and adaptations to their environment. This gradual 
            change occurs over generations due to mechanisms such as natural selection, genetic drift, mutations, and gene flow. 
            Charles Darwins theory of natural selection explains that individuals with traits better suited to their environment 
            are more likely to survive and reproduce, passing these advantageous traits to their offspring. Over long periods, these 
            small changes accumulate, resulting in significant biological diversity and the evolution of complex life forms from simpler 
            ancestors. Evolution is central to understanding the history of life on Earth and the relationships between species..</div>
        </div>



        <section className='flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-6 w-[94%] gap-8 m-[5%] border-4 rounded-2xl p-5'>


         {/* card01 */}
         <div className='h-[610px] sm:h-[570px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 bg-yellow-200 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img02} alt='oceanoghraphyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>The history of the theory of evolution dates back to ancient times, but it gained scientific foundation in the 
                19th century. Early Greek philosophers, such as Anaximander, proposed that life originated from non-living matter and evolved over time. However, it 
                wasnt until the 18th century that naturalists like Carl Linnaeus and Georges-Louis Leclerc, Comte de Buffon, began systematically classifying species 
                and suggesting ideas of change. Jean-Baptiste Lamarck, in the early 1800s, proposed that organisms could pass on traits acquired during their lifetimes, 
                but his ideas were later refuted. The most significant breakthrough came with Charles Darwins On the Origin of Species in 1859, where he introduced the 
                concept of natural selection as the driving force behind evolution.</p><br/>
        </div>


        {/* card02 */}
        <div className='h-[610px] sm:h-[570px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 bg-yellow-200 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img03} alt='wildlifeImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>Life on Earth has evolved over billions of years, beginning with simple single-celled organisms and gradually progressing to the 
                complex and diverse forms we see today. According to evolutionary theory, life originated around 3.5 to 4 billion years ago, likely from simple molecules 
                in Earths early environment, forming the first prokaryotic cells. Over time, these cells diversified and adapted to various environments, with some evolving 
                into more complex eukaryotic cells through processes like endosymbiosis.</p><br/>
        </div>


        {/* card03 */}
        <div className='h-[610px] sm:h-[570px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 bg-yellow-200 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img04} alt='entomologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>The geological column provides a framework for understanding the timing and sequence of evolutionary events. Each period is 
                marked by significant evolutionary changes and fossil records, illustrating how life has adapted to changing environments over geological time. The 
                study of the geological column allows scientists to trace the evolutionary history of life on Earth, revealing the interconnectedness of species through 
                time.</p><br/>
        </div>




        <Link href={'/'}><button className='border-gray-600 border-2 p-2 w-24 rounded-xl  hover:bg-yellow-600 hover:shadow-yellow-700 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-white'>Back</button></Link>


        </section>





    </div>
  )
}

export default page