import { useEffect, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
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

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering (Cyber Security)',
      institution: 'Amrita Vishwa Vidyapeetham',
      location: 'Coimbatore, Tamil Nadu, India',
      duration: 'Oct 2021 – Apr 2025',
      expectedGraduation: 'Expected Graduation: Aug 2025',
      description: 'Specialized in Cyber Security with focus on AI and Machine Learning applications',
      highlight: true
    },
    {
      degree: 'Higher Secondary (Class XII) – CBSE',
      institution: 'Vidyaa Vikas International School',
      location: 'Karamadai, Tamil Nadu, India',
      duration: '2020',
      percentage: '88.4%',
      description: 'Strong foundation in Science and Mathematics'
    },
    {
      degree: 'Secondary (Class X) – CBSE',
      institution: 'Vidyaa Vikas International School',
      location: 'Karamadai, Tamil Nadu, India',
      duration: '2018',
      percentage: '81.2%',
      description: 'Comprehensive secondary education with excellent academic performance'
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Academic Journey & Achievements
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 delay-${(index + 1) * 200} ${
                    isVisible ? 'slide-in' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10"></div>

                  {/* Education Card */}
                  <div className="md:ml-16">
                    <Card className={`card-hover ${edu.highlight ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30' : 'bg-card border-border'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {edu.degree}
                            </h3>
                            <h4 className="text-lg text-primary font-medium mb-2">
                              {edu.institution}
                            </h4>
                          </div>
                          {edu.highlight && (
                            <div className="flex-shrink-0 ml-4">
                              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <GraduationCap className="h-6 w-6 text-primary-foreground" />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span>{edu.duration}</span>
                          </div>
                          {edu.expectedGraduation && (
                            <div className="text-sm text-accent font-medium">
                              {edu.expectedGraduation}
                            </div>
                          )}
                          {edu.percentage && (
                            <div className="flex items-center text-muted-foreground">
                              <Award className="h-4 w-4 mr-2 text-primary" />
                              <span>Percentage: {edu.percentage}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-muted-foreground">
                          {edu.description}
                        </p>

                        {edu.highlight && (
                          <div className="mt-4 pt-4 border-t border-primary/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-semibold text-sm text-primary mb-2">Key Focus Areas:</h5>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Artificial Intelligence</li>
                                  <li>• Machine Learning</li>
                                  <li>• Cyber Security</li>
                                  <li>• Network Security</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-semibold text-sm text-primary mb-2">Specializations:</h5>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>• Threat Detection</li>
                                  <li>• Anomaly Detection</li>
                                  <li>• Security Analytics</li>
                                  <li>• Data Science</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-800 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-r from-secondary/50 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Academic Excellence</h4>
                <p className="text-muted-foreground">
                  Consistently maintained strong academic performance throughout my educational journey, 
                  with a particular focus on emerging technologies and security frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;