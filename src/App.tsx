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
import { AmbientScene } from './components/AmbientScene';

export default function App() {
  return (
    <>
      <AmbientScene />
      <Navbar />
      <ScrollSpy />
      <main>
        <Hero />
        <About />
        <Skills />
        <div className="hidden">
          <Contributions />
        </div>
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
