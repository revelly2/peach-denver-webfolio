
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Jay Denver</span>
            <br />
            <span className="text-gray-800">Espiritu</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-600 mb-8 font-light">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Passionate about creating beautiful, functional web applications that solve real-world problems. 
            I specialize in modern web technologies and love bringing ideas to life through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              onClick={scrollToContact}
              className="bg-peach-500 hover:bg-peach-600 text-white px-8 py-3 text-lg"
              size="lg"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-peach-500 text-peach-600 hover:bg-peach-50 px-8 py-3 text-lg"
              size="lg"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-peach-600 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-peach-600 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:jaydenverespiritu@gmail.com"
              className="text-gray-600 hover:text-peach-600 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full gradient-peach p-2">
              <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <img
                  src="denv.jpg"
                  alt="Jay Denver Espiritu"
                  className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
