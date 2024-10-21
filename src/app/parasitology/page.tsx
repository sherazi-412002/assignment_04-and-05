import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainImg from '../../public/para01.jpg'
import Img02 from '../../public/para02.png'
import Img03 from '../../public/para03.png'
import Img04 from '../../public/para04.jpg'


function page() {
  return (
    <div>

        <div className='p-12 flex flex-col gap-6'>
            <div><Image src={mainImg} alt='name' height={1000} width={1000} className='h-72 w-[98%] md:h-96 md:w-[90%] ml-[1%] md:ml-[5%] mt-32'/></div>
            <div className='text-justify'>Parasitology is the branch of biology and medicine that focuses on the study of parasites, their hosts, 
              and the relationships between them. Parasites are organisms that live on or within a host organism, deriving nutrients at the hosts 
              expense. This field encompasses a wide range of organisms, including protozoa, helminths (worms), and ectoparasites like fleas and 
              ticks. Parasitologists investigate the life cycles, biology, ecology, and evolution of these organisms, as well as their impacts on 
              host health and ecosystems. Understanding parasitology is crucial for addressing various public health issues, as many parasites are 
              responsible for significant diseases in humans, animals, and plants, such as malaria, schistosomiasis, and hookworm infections.Additionally, 
              parasitology has important implications for agriculture, wildlife conservation, and the study of evolutionary biology, providing insights 
              into co-evolutionary processes and host-parasite interactions.</div>
        </div>



        <section className='flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-6 w-[94%] gap-8 m-[3%] border-4 rounded-2xl p-5'>


         {/* card01 */}
         <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img02} alt='oceanoghraphyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>Ectoparasites are organisms that live on the surface of their host, feeding on their blood, tissues, or 
              bodily fluids without penetrating the hosts skin. Common examples include fleas, ticks, lice, and mites. These parasites can be 
              found on a wide range of hosts, including mammals, birds, reptiles, and even amphibians. Ectoparasites are typically small, with 
              specialized mouthparts adapted for feeding and mechanisms for attaching to their hosts to avoid being dislodged.</p><br/>
        </div>


        {/* card02 */}
        <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img03} alt='wildlifeImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>Endoparasites are organisms that live within the bodies of their hosts, often residing in organs, tissues, 
            or cells. These parasites derive nutrients and energy from their hosts, typically causing harm in the process. Common examples of 
            endoparasites include protozoa, helminths (such as tapeworms and roundworms), and some fungi. Endoparasites can infect a wide range of 
            hosts, including humans, animals, and plants, and they exhibit various life cycles and reproductive strategies.</p><br/>
        </div>


        {/* card03 */}
        <div className='h-[610px] sm:h-[570px] md:h-[490px] w-[450px] md:w-[80%] lg:w-[450px] md:ml-[10%] lg:ml-0 border-2 border-gray-600 rounded-2xl
          p-3 mb-12 hover:bg-yellow-100 hover:shadow-yellow-600 hover:shadow-xl hover:duration-500 hover:delay-200'>
            <div><Image src={Img04} alt='entomologyImg' width={1000} height={1000} className='h-[200px] w-full rounded-2xl'/></div>
            <p className='text-justify'>Aquatic parasites are organisms that live in or on the bodies of aquatic hosts, which can include fish, 
              amphibians, marine mammals, and even some aquatic plants. These parasites can be found in freshwater, brackish, and marine 
              environments, and they can be classified into various groups, including protozoa, helminths, and ectoparasites like fish lice or 
              leeches.</p><br/>
        </div>




        <Link href={'/'}><button className='border-gray-600 border-2 p-2 w-24 rounded-xl  bg-yellow-600 hover:shadow-yellow-700 hover:shadow-lg 
             font-bold hover:delay-200 hover:duration-500 hover:text-black hover:bg-yellow-500'>Back</button></Link>


        </section>





    </div>
  )
}

export default page