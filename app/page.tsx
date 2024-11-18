import About from "@/components/about/About";
import Cta from "@/components/cta/Cta";
import Hero from "@/components/hero/Hero";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import Work from "@/components/works/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Services /> */}
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
