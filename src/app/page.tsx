import Blogs from "@/components/Blogs";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div>
      
      <HeroSection/>
      <br /> <br /> <br />
      <h2 className="mt-6 text-center ml-[2%] text-4xl md:text-5xl font-bold font-title text-black">Differnt Zoological Blogs</h2>
      <Blogs/>
     
    </div>
  );
}
