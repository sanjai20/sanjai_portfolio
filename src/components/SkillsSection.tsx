import { useEffect, useState } from 'react';
import { 
  Code, Database, Shield, Brain, Users, FileText, 
  Zap, Network, Search, AlertTriangle 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C/C++ (Beginner)', 'HTML/CSS (Beginner)', 'JavaScript (Beginner)', 'SQL'],
      color: 'primary'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      skills: ['TensorFlow', 'Keras', 'LangChain', 'Huggingface', 'PyQt', 'Librosa', 'PyAudio'],
      color: 'accent'
    },
    {
      title: 'Security Tools',
      icon: Shield,
      skills: ['Wireshark', 'Burp Suite', 'Nmap'],
      color: 'cyber-blue'
    },
    {
      title: 'Cybersecurity Concepts',
      icon: AlertTriangle,
      skills: ['Threat Detection', 'Network Monitoring', 'Incident Response', 'Anomaly Detection'],
      color: 'electric-violet'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Critical Thinking', 'Problem-Solving', 'Team Collaboration', 'Documentation'],
      color: 'tech-purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary to-primary/60',
      'accent': 'from-accent to-accent/60',
      'cyber-blue': 'from-cyber-blue to-cyber-blue/60',
      'electric-violet': 'from-electric-violet to-electric-violet/60',
      'tech-purple': 'from-tech-purple to-tech-purple/60'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-primary to-primary/60';
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of technologies and methodologies for building 
              secure, intelligent solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isVisible ? 'slide-in' : 'opacity-0 translate-y-10'
                }`}
              >
                <Card className="h-full card-hover bg-secondary/30 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(category.color)} flex items-center justify-center mr-4`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-background/50 border border-primary/20 rounded-full text-sm text-foreground hover:border-primary/40 transition-colors duration-300"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Specialized Expertise */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
              Specialized Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center card-hover bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2 text-foreground">AI & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Developing predictive models and intelligent systems using TensorFlow and Keras
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <Network className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2 text-foreground">Network Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time monitoring and anomaly detection for network security
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover bg-gradient-to-br from-cyber-blue/10 to-cyber-blue/5 border-cyber-blue/20">
                <CardContent className="p-6">
                  <Search className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                  <h4 className="font-semibold mb-2 text-foreground">Threat Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced threat hunting and incident response capabilities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Proficiency Levels */}
          <div className={`mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-r from-secondary/50 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-4 text-center">
                  Continuous Learning & Development
                </h4>
                <p className="text-muted-foreground text-center">
                  Actively expanding my expertise through hands-on projects, certifications, and 
                  staying current with the latest developments in AI and cybersecurity. 
                  Always eager to tackle new challenges and learn emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;