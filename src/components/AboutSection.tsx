import { useEffect, useState } from 'react';
import { Brain, Shield, Code, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const traits = [
    {
      icon: Brain,
      title: 'Critical Thinking',
      description: 'Analytical approach to complex problem-solving'
    },
    {
      icon: Shield,
      title: 'Security Mindset',
      description: 'Proactive threat detection and prevention strategies'
    },
    {
      icon: Code,
      title: 'Technical Innovation',
      description: 'Developing cutting-edge AI and ML solutions'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Effective communication and collaborative development'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Text */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Innovating at the Intersection of AI and Cybersecurity
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated B.Tech undergraduate specializing in Computer Science and Engineering 
                  with Cyber Security at Amrita Vishwa Vidyapeetham, Coimbatore. My academic journey 
                  has been driven by an unwavering passion for artificial intelligence, machine learning, 
                  and cybersecurity.
                </p>
                
                <p>
                  My expertise lies in developing innovative solutions that bridge the gap between 
                  theoretical knowledge and practical applications. I specialize in creating 
                  predictive models, anomaly detection systems, and real-time security tools using 
                  Python, TensorFlow, Keras, and modern AI frameworks.
                </p>
                
                <p>
                  What sets me apart is my ability to think critically about complex security challenges 
                  while leveraging cutting-edge AI technologies to create robust, scalable solutions. 
                  I thrive in collaborative environments where I can contribute to meaningful projects 
                  that make a real-world impact.
                </p>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
              <Card className="bg-secondary/50 border-primary/20 card-hover">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-primary">Key Focus Areas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Anomaly Detection Systems for Network Security</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time Security Monitoring Tools</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>AI-powered Threat Detection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-electric-violet rounded-full mt-2 flex-shrink-0"></div>
                      <span>Predictive Security Analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Personal Traits */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-2xl font-semibold text-center mb-8 text-primary">Core Strengths</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {traits.map((trait, index) => (
                <Card 
                  key={trait.title}
                  className="text-center card-hover bg-secondary/30 border-primary/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <trait.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h5 className="font-semibold mb-2 text-foreground">{trait.title}</h5>
                    <p className="text-sm text-muted-foreground">{trait.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;