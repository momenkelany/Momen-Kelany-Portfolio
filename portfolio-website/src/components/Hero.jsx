import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Junior Full Stack Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-background flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="fade-in visible">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Momen Kelany</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-2 h-8">
            <span className="typing-animation">{displayText}</span>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about building responsive, scalable web applications with modern technologies. 
            Experienced in MERN stack development with a focus on clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('#contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
             <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/momen-kelany/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/momenkelany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:momenkelany1@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
             <a 
              href="tel:+201152214242"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;