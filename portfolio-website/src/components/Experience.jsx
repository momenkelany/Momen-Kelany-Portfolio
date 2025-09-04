import React from 'react';
import { Card, CardContent } from './ui/card';
import { Calendar, MapPin, Building, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'IT Support Specialist',
      company: 'Al Remas Developments',
      location: 'Giza, Egypt',
      period: '10/2023 – 04/2024',
      description: [
        'Diagnosed and resolved software and network issues for over 50 end users, ensuring minimal downtime and improved productivity',
        'Configured and deployed essential software solutions tailored to department needs',
        'Documented technical support requests and solutions to improve resolution speed and internal knowledge sharing'
      ],
      technologies: ['Technical Support', 'Network Troubleshooting', 'Software Configuration', 'Documentation']
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Bachelor\'s Degree in Computer Science',
      institution: 'October 6 University',
      location: 'Giza, Egypt',
      period: '09/2019 – 06/2023',
      description: [
        'Graduated with a GPA of 3.41 from the Faculty of Computer Science and Information Systems',
        'Completed coursework in data structures, algorithms, databases, and object-oriented programming'
      ],
      grade: 'GPA: 3.41 (Excellent)'
    }
  ];

  const certifications = [
    {
      type: 'certification',
      title: 'Web Developer Bootcamp',
      certificationLink: "https://www.udemy.com/certificate/UC-31e30920-979c-4237-9fdf-eaa7246a6866/",
      institution: 'Udemy',
      institutionLink: 'https://www.udemy.com',
      period: '10/2021',
      description: [
        'Completed 70+ hours of full-stack development training covering HTML, CSS, JavaScript, Node.js, Express.js, REST APIs, and responsive design.',
        'Built real-world projects such as authentication systems, full-stack applications, and API-based tools.'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'Responsive Design']
    },
    {
      type: 'certification',
      title: 'MCIT - Introduction to AI & Generative AI',
      certificationLink: "https://drive.google.com/file/d/10tLdMMvxcdKny_DDEY2ccqrZHn17toWB/view?usp=drive_link",
      institution: 'Ministry of Communications and Information Technology (MCIT)',
      institutionLink: 'https://www.mcit.gov.eg/',
      period: '08/2025',
      description: [],
      technologies: ['Prompt Engineering', 'Integration Skills', 'Critical Thinking', 'Creativity & Innovation', 'Ethics in AI']
    },
    {
      type: 'certification',
      title: 'Sprints x Microsoft Summer Camp - Web Development',
      certificationLink: "https://sprints.ai/journeys/learning/ID - SPR - W2H4F0/view-certificate-serial",
      institution: 'Sprints',
      institutionLink: 'https://sprints.ai/',
      period: '08/2025',
      description: [
        'Gained web development fundamentals including HTML, CSS, JavaScript, and Python through 40+ hours of training.',
        'Completed training on software processes with guidance from Microsoft Learn resources.'],
      technologies: ['HTML', 'CSS', 'Python','Git','Github', 'REST APIs', 'Responsive Design']
    },
    {
      type: 'certification',
      title: 'CIB Summer Internship Program - “The Green Leap”',
      certificationLink: "https://apiv2.ciboat.com/storage/certificates/12898/modified_1757000123.pdf",
      institution: 'CIB Egypt',
      institutionLink: 'https://www.cibeg.com',
      period: '08/2025',
      description: [
        'Expand my knowledge of sustainable finance and banking innovation.',
        'Engage with real-world ESG applications and inclusion practices.'],
      technologies: []
    },
  ];

  // ✅ Helper to parse periods correctly
  const parsePeriod = (period) => {
    if (!period) return new Date(0);

    const clean = period.replace("–", "-").trim();

    // Range case: "MM/YYYY - MM/YYYY"
    if (clean.includes("-")) {
      const parts = clean.split("-");
      const end = parts[1].trim();

      if (/present/i.test(end)) return new Date();

      const [endMonth, endYear] = end.split("/");
      return new Date(parseInt(endYear), parseInt(endMonth) - 1);
    }

    // Single date "MM/YYYY"
    const [month, year] = clean.split("/");
    return new Date(parseInt(year), parseInt(month) - 1);
  };

  const allItems = [...experiences, ...education, ...certifications].sort(
    (a, b) => parsePeriod(b.period) - parsePeriod(a.period)
  );

  const TimelineItem = ({ item, index, isLast }) => {
    const getIcon = () => {
      switch (item.type) {
        case 'work': return <Building className="text-primary" size={20} />;
        case 'education': return <GraduationCap className="text-primary" size={20} />;
        case 'certification': return <Award className="text-primary" size={20} />;
        default: return <Calendar className="text-primary" size={20} />;
      }
    };

    const getTechColor = (tech) => {
      const colors = {
        'HTML': 'bg-orange-500',
        'CSS': 'bg-blue-500',
        'JavaScript': 'bg-yellow-500',
        'Node.js': 'bg-green-500',
        'Express.js': 'bg-gray-600',
        'REST APIs': 'bg-indigo-500',
        'Responsive Design': 'bg-purple-500',
        'Technical Support': 'bg-blue-600',
        'Network Troubleshooting': 'bg-green-600',
        'Software Configuration': 'bg-orange-600',
        'Documentation': 'bg-gray-500'
      };
      return colors[tech] || 'bg-gray-500';
    };

    return (
      <div className="relative flex items-start space-x-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center">
            {getIcon()}
          </div>
          {!isLast && <div className="w-0.5 h-16 bg-border mt-4"></div>}
        </div>

        <Card className="flex-1 bg-card border-border card-hover mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                <a href={item.certificationLink} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </h3>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Calendar size={16} />
                <span>{item.period}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                {item.type === 'work'
                  ? <Building size={16} className="text-primary" />
                  : <GraduationCap size={16} className="text-primary" />}
                <span className="text-foreground font-medium hover:text-primary transition-colors">
                  <a href={item.institutionLink} target="_blank" rel="noopener noreferrer">
                    {item.company || item.institution}
                  </a>
                </span>
              </div>
              {item.location && (
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{item.location}</span>
                </div>
              )}
            </div>

            {item.grade && (
              <div className="mb-4">
                <span className="text-accent font-medium">{item.grade}</span>
              </div>
            )}

            <div className="space-y-2 mb-4">
              {item.description.map((desc, descIndex) => (
                <div key={descIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {item.technologies && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey, educational background, and certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {allItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === allItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
