import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Sanjaiprashad63@gmail.com',
      href: 'mailto:Sanjaiprashad63@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93458 20976',
      href: 'tel:+919345820976',
      color: 'accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sanjai-prashad-cyber',
      href: 'https://www.linkedin.com/in/sanjai-prashad-cyber/',
      color: 'cyber-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'sanjai20',
      href: 'https://github.com/sanjai20',
      color: 'electric-violet'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('ljffE0tA8NodLeXEK');

      // Send email using EmailJS
      await emailjs.send(
        'service_5h9taic', // Service ID
        'template_8rcbk5d', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sanjai Prashad D',
        }
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary to-primary/60',
      'accent': 'from-accent to-accent/60',
      'cyber-blue': 'from-cyber-blue to-cyber-blue/60',
      'electric-violet': 'from-electric-violet to-electric-violet/60'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-primary to-primary/60';
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss opportunities, collaborate on projects, or explore how we can work together 
              to create innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
              <Card className="h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={info.label}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center group hover:scale-105 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(info.color)} flex items-center justify-center mr-4 group-hover:shadow-glow`}>
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 pt-8 border-t border-primary/20">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <span className="text-muted-foreground">Based in</span>
                    </div>
                    <p className="text-foreground font-medium">
                      Coimbatore, Tamil Nadu, India
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Available for remote work and on-site opportunities
                    </p>
                  </div>

                  {/* Response Time */}
                  <div className="mt-6 p-4 bg-background/50 rounded-lg border border-primary/10">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-muted-foreground">
                        Usually responds within 24 hours
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
              <Card className="h-full bg-card border-border card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full bg-background/50 border-primary/20 focus:border-primary"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-background/50 border-primary/20 focus:border-primary"
                        placeholder="Enter your email address"
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
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full bg-background/50 border-primary/20 focus:border-primary resize-none"
                        placeholder="Tell me about your project, opportunity, or how I can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Form Footer */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted regarding your inquiry. 
                      Your information will be kept confidential.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'slide-in' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-r from-secondary/50 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-primary mb-4">
                  Ready to Collaborate?
                </h4>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you're looking for a cybersecurity specialist, AI/ML developer, 
                  or a passionate team member for your next project, I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = 'mailto:Sanjaiprashad63@gmail.com'}
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Email Me Directly
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('https://www.linkedin.com/in/sanjai-prashad-cyber/', '_blank')}
                    className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;