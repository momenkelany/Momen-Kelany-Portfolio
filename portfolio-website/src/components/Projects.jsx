import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Fully Login System',
      description: 'Developed a secure user authentication system with session handling and encrypted password storage. Ensured backend validation and data protection best practices.',
      technologies: ['HTML', 'CSS', 'Node.js', 'MySQL'],
      category: 'fullstack',
      image: null,      // No image for this project, will show placeholder
      liveUrl: '#',
      githubUrl: '#',
      isReady: false

    },
    {
      title: 'Currency Converter App',
      description: 'Built a currency conversion tool using real-time API data. Designed a user-friendly interface with clear error handling.',
      technologies: ['JavaScript', 'RESTful APIs', 'RapidAPI'],
      category: 'frontend',
      image: null,
      liveUrl: '#',
      githubUrl: '#',
      isReady: true
    },
    {
      title: 'Movie Search Website',
      description: 'Developed a search app to fetch and display movie data from external APIs. Created a responsive, dynamic interface for easy browsing.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'RESTful APIs'],
      category: 'frontend',
      image: null,
      liveUrl: 'https://www.facebook.com/',
      githubUrl: '#',
      isReady: true
    },
    {
      title: 'Real-Time Chat App',
      description: 'Built a live chat application using WebSockets for multi-user messaging. Enabled room creation and instant message delivery in real time.',
      technologies: ['Node.js', 'Express.js', 'HTML', 'CSS', 'JavaScript'],
      category: 'fullstack',
      image: null,
      liveUrl: '#',
      githubUrl: '#',
      isReady: true
    },
    {
      title: 'Swimming Academy Website',
      description: 'Designed and deployed a responsive business website to showcase services, schedules, and contact information.',
      technologies: ['Bootstrap', 'JavaScript'],
      category: 'frontend',
      image: null,
      liveUrl: '#',
      githubUrl: '#',
      isReady: true
    },
    {
      title: 'Online Clothing Store',
      description: 'Launched an eCommerce website with full checkout and account functionality. Customized Zammit themes and integrated payment gateways.',
      technologies: ['Zammit'],
      category: 'cms',
      image: '/Momen-Kelany-Portfolio/images/projects/Online-Clothing-Store.jpg', // Local image path      liveUrl: 'https://toro-eg.com',
      liveUrl: 'https://toro-eg.com/',
      githubUrl: null, // Set to null to hide GitHub button
      isReady: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'cms', label: 'CMS' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getTechColor = (tech) => {
    const colors = {
      'HTML': 'bg-orange-500',
      'CSS': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'Node.js': 'bg-green-500',
      'React': 'bg-cyan-500',
      'MySQL': 'bg-blue-600',
      'MongoDB': 'bg-green-600',
      'Express.js': 'bg-gray-600',
      'Bootstrap': 'bg-purple-500',
      'WordPress': 'bg-blue-700',
      'Zammit': 'bg-purple-900',
      'RESTful APIs': 'bg-indigo-500',
      'RapidAPI': 'bg-red-500'
    };
    return colors[tech] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`${activeFilter === filter.id
                ? 'bg-primary text-primary-foreground'
                : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
            >
              <Filter size={16} className="mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border card-hover overflow-hidden">
              <div className="relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-muted flex items-center justify-center">
                    <div className="text-muted-foreground text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="text-primary" size={24} />
                      </div>
                      <p className="text-sm">Project Preview</p>
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed h-24 overflow-hidden">                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6 h-13 content-start">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    disabled={!project.isReady} // Disable button if not ready
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {project.isReady ? 'Live Demo' : 'Coming Soon'} {/* Conditional text */}
                  </Button>
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;


