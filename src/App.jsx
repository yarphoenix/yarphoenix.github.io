import { useRef } from 'react';
import useScrollEffects from './hooks/useScrollEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const rootRef = useRef(null);
  useScrollEffects(rootRef);

  return (
    <div className="site" ref={rootRef}>
      <Header />
      <Hero />
      <main>
        <About />
        <Stack />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
