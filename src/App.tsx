import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contributions } from './components/Contributions';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { BeyondCode } from './components/BeyondCode';
import { Certificates } from './components/Certificates';
import { BlogPreview } from './components/BlogPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contributions />
        <Projects />
        <Timeline />
        <BeyondCode />
        <Certificates />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
