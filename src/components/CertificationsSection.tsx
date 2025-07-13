import { useEffect, useState } from 'react';
import { Award, Calendar, ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
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

    const element = document.getElementById('certifications');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const certifications = [
    {
      title: 'Generative AI with LangChain and Huggingface',
      provider: 'Udemy',
      status: 'Completed',
      description: 'Comprehensive course covering advanced generative AI techniques using LangChain framework and Huggingface transformers.',
      skills: ['LangChain', 'Huggingface', 'Generative AI', 'Transformers', 'NLP'],
      category: 'AI/ML',
      color: 'primary'
    },
    {
      title: 'AWS Academy Cloud Security Foundations',
      provider: 'AWS Academy',
      status: 'Completed',
      description: 'Foundational knowledge of cloud security principles, AWS security services, and best practices for securing cloud infrastructure.',
      skills: ['AWS Security', 'Cloud Security', 'IAM', 'VPC', 'Security Groups'],
      category: 'Cloud Security',
      color: 'accent'
    },
    {
      title: 'Blue Team – Defensive Security',
      provider: 'CERTCOP',
      status: 'Ongoing',
      description: 'Specialized training in defensive cybersecurity techniques, incident response, and security monitoring.',
      skills: ['SOC Operations', 'Incident Response', 'SIEM', 'Threat Hunting', 'Digital Forensics'],
      category: 'Cybersecurity',
      color: 'cyber-blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary to-primary/60',
      'accent': 'from-accent to-accent/60',
      'cyber-blue': 'from-cyber-blue to-cyber-blue/60'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-primary to-primary/60';
  };

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'text-green-400' : 'text-yellow-400';
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and continuous learning in AI, Cybersecurity, and Cloud Technologies
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`transition-all duration-1000 delay-${(index + 1) * 300} ${
                  isVisible ? 'slide-in' : 'opacity-0 translate-y-10'
                }`}
              >
                <Card className="h-full card-hover bg-secondary/30 border-primary/10 relative overflow-hidden">
                  <CardContent className="p-6">
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full bg-background/50 border ${getStatusColor(cert.status)}`}>
                        {cert.status}
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {cert.category}
                      </span>
                    </div>

                    {/* Certification Header */}
                    <div className="flex items-start mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(cert.color)} flex items-center justify-center mr-4 flex-shrink-0`}>
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {cert.provider}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-background/50 border border-primary/20 rounded text-xs text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator for Ongoing */}
                    {cert.status === 'Ongoing' && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm text-primary">In Progress</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div className="bg-gradient-primary h-2 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Learning */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Commitment to Learning */}
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-primary mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">
                      Continuous Learning
                    </h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Actively pursuing additional certifications in cybersecurity, cloud computing, 
                    and advanced AI technologies to stay current with industry developments.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• CompTIA Security+ (Planned)</li>
                    <li>• AWS Certified Security - Specialty (Planned)</li>
                    <li>• Certified Ethical Hacker (CEH) (Planned)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Academic Achievements */}
              <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-accent mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">
                      Academic Excellence
                    </h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Maintaining strong academic performance while actively engaging in 
                    practical projects and industry-relevant certifications.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current CGPA:</span>
                      <span className="text-accent font-medium">Strong Performance</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Graduation:</span>
                      <span className="text-accent font-medium">August 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Verification CTA */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-r from-secondary/50 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Verify Credentials
                </h4>
                <p className="text-muted-foreground mb-4">
                  All certifications can be verified through their respective platforms. 
                  Contact me for specific credential verification details.
                </p>
                <Button 
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Request Verification
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;