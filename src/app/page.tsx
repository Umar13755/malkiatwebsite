import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="lg:mx-10 p-5">
      <Navbar />
      <Hero/>
      <Services/>
    </div>
  );
}
