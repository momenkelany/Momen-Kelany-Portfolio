import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Create mailto link
    const mailtoLink = `mailto:momenkelany1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      value: 'momenkelany1@gmail.com',
      link: 'mailto:momenkelany1@gmail.com'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Phone',
      value: '+201152214242',
      link: 'tel:+201152214242'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Location',
      value: 'Giza, Egypt',
      link: null
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/momen-kelany/',
      link: 'https://linkedin.com/in/momen-kelany/'
    },
    {
      icon: <Github className="text-primary" size={24} />,
      title: 'Github',
      value: 'github.com/momenkelany',
      link: 'https://github.com/momenkelany'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question about my work, want to discuss a potential 
                collaboration, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/momen-kelany/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/momenkelany" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:momenkelany1@gmail.com"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

