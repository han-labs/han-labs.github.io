import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contributions } from './components/Contributions';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { BeyondCode } from './components/BeyondCode';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollSpy } from './components/ScrollSpy';

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollSpy />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contributions />
        <Projects />
        <Timeline />
        <BeyondCode />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
