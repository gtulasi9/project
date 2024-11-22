import React from 'react';
import { Code2, Database, Globe, Server, Terminal, Cpu } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
    <Icon className="w-8 h-8 text-indigo-600 mb-4" />
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java", "Python", "SQL"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: Server,
      title: "Frameworks",
      skills: ["Django", "React.js"]
    },
    {
      icon: Terminal,
      title: "Tools",
      skills: ["Visual Studio Code", "Git", "GitHub"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL"]
    },
    {
      icon: Cpu,
      title: "Other Skills",
      skills: ["Machine Learning", "Data Science"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;