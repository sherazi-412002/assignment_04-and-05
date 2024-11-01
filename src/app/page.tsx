import Blogs from "@/components/Blogs";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div>
      
      <HeroSection/>
      <br /> <br /> <br />
      <h2 className="mt-6 flex justify-center items-center ml-[2%] text-4xl md:text-4xl font-bold font-title text-black">Main Branches Of Zoology</h2>
      <Blogs/>
     
    </div>
  );
}
