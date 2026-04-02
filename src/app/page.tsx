import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { SERVICES, PROJECTS, TESTIMONIALS, PROCESS } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services services={SERVICES} />
        <Process steps={PROCESS} />
        <Portfolio projects={PROJECTS} />
        <Reviews testimonials={TESTIMONIALS} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
