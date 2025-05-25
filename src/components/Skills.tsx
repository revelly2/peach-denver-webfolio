
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Bootstrap", "Sass", "Material-UI", "Chakra UI"
      ],
      color: "bg-peach-100 text-peach-800"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Express.js", "Python", "Django", "FastAPI",
        "PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL"
      ],
      color: "bg-cream-100 text-cream-800"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Netlify", "Firebase",
        "Jest", "Cypress", "Webpack", "Vite", "ESLint", "Prettier"
      ],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving", "Team Collaboration", "Communication",
        "Project Management", "Agile/Scrum", "Code Review", "Mentoring"
      ],
      color: "bg-pink-100 text-pink-800"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
