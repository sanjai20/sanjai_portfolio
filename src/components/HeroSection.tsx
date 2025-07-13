import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const profileImage = '/lovable-uploads/304cf3da-1692-413c-bb0d-e0e36a3ee90e.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Placeholder for resume download
    window.open('#', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:Sanjaiprashad63@gmail.com';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className={`hero-glow mb-8 transition-all duration-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1">
                <img
                  src={profileImage}
                  alt="Sanjai Prashad D"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Sanjai Prashad D</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary mb-4 font-medium">
              AI & Cyber Security Enthusiast
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate about solving real-world industry challenges through innovative, 
              data-driven solutions in Artificial Intelligence, Machine Learning, and Cyber Security
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={openEmail}
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Get In Touch
              </Button>
              
              <Button 
                onClick={downloadResume}
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={scrollToAbout}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span className="text-sm mb-2">Explore More</span>
              <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Tech Icons Floating */}
      <div className="absolute bottom-10 left-10 floating opacity-20">
        <div className="w-8 h-8 bg-primary/20 rounded-lg"></div>
      </div>
      <div className="absolute top-20 right-20 floating opacity-20" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-accent/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-32 floating opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-cyber-blue/20 rounded-lg rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;