import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sanjai20',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sanjai-prashad-cyber/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:Sanjaiprashad63@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">
                Sanjai Prashad D
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI & Cyber Security Enthusiast passionate about creating innovative 
                solutions for real-world challenges through cutting-edge technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Coimbatore, Tamil Nadu, India</p>
                <p>+91 93458 20976</p>
                <p>Sanjaiprashad63@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center text-muted-foreground">
                <span>© {currentYear} Sanjai Prashad D. Made with</span>
                <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
                <span>and modern web technologies</span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Built with:</span>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-secondary rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-secondary rounded text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-secondary rounded text-xs">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <div className="w-8 h-8 border border-primary/30 rounded-full flex items-center justify-center mx-auto group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <span className="text-xs">↑</span>
              </div>
              <span className="text-xs mt-2 block">Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;