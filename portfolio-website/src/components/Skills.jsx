import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Globe, Database, Settings } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages & Concepts',
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 75 },
        { name: 'SQL', level: 70 },
        { name: 'Object-Oriented Programming', level: 85 },
        { name: 'Data Structures & Algorithms', level: 78 }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="text-primary" size={24} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'React', level: 80 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'Responsive Web Design', level: 90 },
        { name: 'WordPress Development', level: 70 }
      ]
    },
    {
      title: 'Database Technologies',
      icon: <Database className="text-primary" size={24} />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Relational Database Management', level: 80 },
        { name: 'Database Design & Optimization', level: 80 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Settings className="text-primary" size={24} />,
      skills: [
        { name: 'Git (Version Control)', level: 80 },
        { name: 'GitHub', level: 80 },
        { name: 'Visual Studio Code', level: 90 },
        { name: 'Debugging Tools', level: 85 },
        { name: 'Microsoft Office Suite', level: 85 },
        { name: 'Adobe Illustrator / Photoshop', level: 70 }
      ]
    }
  ];

  const SkillBar = ({ skill, isVisible }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-muted-foreground text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="skill-bar rounded-full h-2"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transition: 'width 1.5s ease-in-out'
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-card" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in various technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-background border-border card-hover">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mt-12">
          <Card className="bg-background border-border card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">Languages</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-medium text-foreground mb-2">English</h4>
                  <p className="text-muted-foreground">Fluent</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div 
                      className="skill-bar rounded-full h-2"
                      style={{ 
                        width: isVisible ? '95%' : '0%',
                        transition: 'width 1.5s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-foreground mb-2">Arabic</h4>
                  <p className="text-muted-foreground">Mother Tongue</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div 
                      className="skill-bar rounded-full h-2"
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transition: 'width 1.5s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

