import { useEffect, useState } from 'react';
import { ExternalLink, Github, Shield, Zap, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: 'PortWatchdog – Real-Time Port Scan and Reconnaissance Detection System',
      description: 'Developed a real-time network security system to detect stealthy port scans using signature and behavioral anomaly detection, integrated with a kernel-level firewall for instant threat blocking.',
      longDescription: 'Advanced network security monitoring solution that combines signature-based detection with machine learning algorithms to identify suspicious port scanning activities. Features real-time threat blocking through kernel-level integration.',
      techStack: ['Python', 'Netfilter', 'Scapy', 'Linux Kernel Modules'],
      icon: Shield,
      featured: true,
      githubUrl: 'https://github.com/sanjai20',
      liveUrl: '#',
      category: 'Cybersecurity'
    },
    {
      title: 'WhisperGatekeeper – AI-Based Covert Audio Channel Detection',
      description: 'Built an AI-powered tool to detect covert audio-based data exfiltration using spectrogram classification and anomaly detection, including GeoIP tracking and automated reports.',
      longDescription: 'Sophisticated AI system that analyzes audio patterns to detect covert communication channels. Utilizes deep learning for spectrogram analysis and includes comprehensive tracking and reporting features.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'Librosa', 'Signal Processing'],
      icon: Zap,
      featured: true,
      githubUrl: 'https://github.com/sanjai20',
      liveUrl: '#',
      category: 'AI/ML Security'
    },
    {
      title: 'E-Shopping Website',
      description: 'Designed a basic e-commerce platform with a user-friendly interface and secure payment features.',
      longDescription: 'Full-stack e-commerce solution with modern UI/UX design, secure payment processing, and comprehensive product management system.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      icon: ShoppingCart,
      featured: false,
      githubUrl: 'https://github.com/sanjai20',
      liveUrl: '#',
      category: 'Web Development'
    }
  ];

  const getIconColor = (index: number) => {
    const colors = ['primary', 'accent', 'cyber-blue'];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions combining AI, Machine Learning, and Cybersecurity 
              to solve real-world challenges
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-1000 delay-${(index + 1) * 300} ${
                  isVisible ? 'slide-in' : 'opacity-0 translate-y-10'
                }`}
              >
                <Card className={`card-hover ${project.featured ? 'bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30' : 'bg-card border-border'}`}>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      {/* Project Icon & Category */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-${getIconColor(index)} to-${getIconColor(index)}/60 flex items-center justify-center mr-4`}>
                            <project.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                            {project.featured && (
                              <div className="text-xs text-accent font-medium mt-1">
                                ⭐ Featured Project
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {project.featured && (
                          <p className="text-sm text-muted-foreground mb-6 bg-secondary/50 p-4 rounded-lg border-l-4 border-primary">
                            {project.longDescription}
                          </p>
                        )}

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-background/50 border border-primary/20 rounded-full text-sm text-foreground hover:border-primary/40 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                          <Button 
                            variant="default"
                            size="sm"
                            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                            View Code
                          </Button>
                          
                          {project.liveUrl !== '#' && (
                            <Button 
                              variant="outline"
                              size="sm"
                              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                              onClick={() => window.open(project.liveUrl, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                              Live Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-r from-secondary/50 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-primary mb-4">
                  Explore More Projects
                </h4>
                <p className="text-muted-foreground mb-6">
                  Visit my GitHub profile to discover additional projects and contributions 
                  to the open-source community.
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  onClick={() => window.open('https://github.com/sanjai20', '_blank')}
                >
                  <Github className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;