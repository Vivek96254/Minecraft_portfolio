import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  // Simulate initial loading (optional - you can remove this for instant load)
  useEffect(() => {
    // Check if user has seen loading screen before
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    if (hasSeenLoading) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasSeenLoading', 'true');
  };

  return (
    <div className="min-h-screen">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      {!isLoading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <main>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
