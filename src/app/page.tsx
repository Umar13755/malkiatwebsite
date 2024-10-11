import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative lg:mx-10 p-5">
      {/* Main Content */}
      <Navbar />
      <Hero />
      <Services />
      <SuccessStories />
      <Testimonials />
      <Footer />
    </div>
  );
}
