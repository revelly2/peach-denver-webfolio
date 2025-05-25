
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate web developer with a love for creating innovative digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-peach-600">
                  My Journey
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  My passion for web development started during my computer science studies, 
                  where I discovered the perfect blend of creativity and logic that programming offers. 
                  I love the challenge of turning complex problems into simple, beautiful solutions.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Over the years, I've worked on various projects ranging from small business websites 
                  to complex web applications. I'm constantly learning new technologies and staying 
                  up-to-date with industry trends.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-peach-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-peach-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-peach-600 mb-2">20+</div>
                <div className="text-gray-600">Happy Clients</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-peach-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
