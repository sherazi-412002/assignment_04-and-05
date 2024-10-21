import Blogs from "@/components/Blogs";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <h2 className="mt-6 flex justify-center items-center  text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-black">Main Baraches Of Zoology</h2>
      <Blogs/>
     
    </div>
  );
}
