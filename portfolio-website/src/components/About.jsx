import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeElements = entry.target.querySelectorAll('.fade-in');
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="section-padding bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="fade-in">
            <Card className="bg-card border-border card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Junior Full Stack Developer with hands-on experience in HTML, CSS, JavaScript, Node.js, 
                  Express.js, and MongoDB. Proven ability to build responsive, scalable web applications 
                  and implement secure, maintainable code.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Solid foundation in computer science principles including object-oriented programming, 
                  data structures, and algorithms. Eager to contribute to agile development teams and grow 
                  as a junior full stack developer by solving real-world problems through clean, efficient code.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary" size={20} />
                    <span className="text-muted-foreground">Giza, Egypt</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <span className="text-muted-foreground">+201152214242</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <span className="text-muted-foreground">momenkelany1@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="text-primary" size={20} />
                    <a 
                      href="https://linkedin.com/in/momen-kelany/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                   <div className="flex items-center space-x-3">
                    <Github className="text-primary" size={20} />
                    <a 
                      href="https://github.com/momenkelany" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Github Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Competencies */}
          <div className="fade-in">
            <Card className="bg-card border-border card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Core Competencies</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Analytical Problem Solving</h4>
                      <p className="text-muted-foreground text-sm">Strong analytical skills for debugging and optimization</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Quick Adaptation</h4>
                      <p className="text-muted-foreground text-sm">Quickly adapt to new technologies and frameworks with minimal onboarding</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Agile Environments</h4>
                      <p className="text-muted-foreground text-sm">Adaptability in Agile development environments</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Team Collaboration</h4>
                      <p className="text-muted-foreground text-sm">Strong communication and teamwork skills</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Technical Leadership</h4>
                      <p className="text-muted-foreground text-sm">Initiative and leadership in technical projects</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Performance Focus</h4>
                      <p className="text-muted-foreground text-sm">Maintain performance and delivery speed in high-pressure environments</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;