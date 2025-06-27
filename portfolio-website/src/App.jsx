import React, { useEffect, useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

// Lazy load components for code splitting
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSection = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4 mx-auto"></div>
          <p className="text-muted-foreground">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<LoadingSection />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

