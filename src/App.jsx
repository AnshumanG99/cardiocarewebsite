import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ProblemStatement from './sections/ProblemStatement';
import Solution from './sections/Solution';
import Progress from './sections/Progress';
import Impact from './sections/Impact';
import Team from './sections/Team';
import Contact from './sections/Contact';

function App() {
  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <ProblemStatement />
        <Solution />
        <Progress />
        <Impact />
        <Team />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;