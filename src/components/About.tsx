import React from 'react'

function About() {
  return (
    <div className='flex flex-col mt-36 mb-10 w-[80%] ml-[10%] bg-yellow-200 rounded-xl h-full gap-14 p-1 sm:p-5 md:p-10 lg:p-20'>
    <h1 className="mt-4 flex justify-center items-center text-green-800 text-5xl font-bold font-serif ">About Me</h1>
    <p className='text-justify text-xl  w-[90%] sm-[80%] md:w-[60%] lg:w-[40%] '>Hello! I am currently pursuing a Bachelor of Science in Zoology.
       My passion lies in understanding the intricacies of the animal
       kingdom and exploring the vast diversity of life on our planet.
        Alongside my academic journey, I have gained valuable experience
        as a teacher, sharing my knowledge and helping others learn in 
        engaging ways.</p>

    <p className='ml-[10%] sm:ml-[10%] md-[20%] lg:ml-[40%] text-justify text-xl  w-[90%] sm-[80%] md:w-[60%] lg:w-[40%]]'>
      In addition to my love for biology, I have developed skills in web
       development, specifically in HTML, CSS, and TypeScript. This combination
        of science and technology allows me to approach problem-solving with a
         unique perspective. I am always excited to take on new challenges and
         grow in both the fields of zoology and tech.</p>

   <p className='text-xl font-bold'>Feel free to explore my projects or get in touch with me!</p>
  </div>
  )
}

export default About;