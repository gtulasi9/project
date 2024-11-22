import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ 
  icon: Icon, 
  title, 
  organization, 
  date, 
  description 
}: { 
  icon: any, 
  title: string, 
  organization: string, 
  date: string, 
  description: string 
}) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div className="flex-1 w-0.5 bg-indigo-100"></div>
    </div>
    <div className="pb-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-indigo-600 font-medium">{organization}</p>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <TimelineItem
            icon={GraduationCap}
            title="Bachelor of Technology in Computer Science"
            organization="Tirumala Engineering College"
            date="2020 - 2024"
            description="Completed B.Tech in Computer Science and Engineering with a strong foundation in programming and software development."
          />
          
          <TimelineItem
            icon={Briefcase}
            title="Python Developer Intern"
            organization="InternWise"
            date="2023"
            description="Worked on Python development projects and gained hands-on experience in software development practices."
          />
          
          <TimelineItem
            icon={Briefcase}
            title="Data Science Intern"
            organization="SkillDzire"
            date="2023"
            description="Gained practical experience in data science, machine learning, and data analysis techniques."
          />
          
          <TimelineItem
            icon={GraduationCap}
            title="Python Full Stack Development Training"
            organization="Naresh IT"
            date="6 months"
            description="Completed comprehensive training in Python full-stack development, covering both frontend and backend technologies."
          />
          
          <TimelineItem
            icon={GraduationCap}
            title="Intermediate in MPC"
            organization="Sri Chaitanya junior  College"
            date="2018 - 2020"
            description="Completed Intermediate in MPC."
          />

            <TimelineItem
            icon={GraduationCap}
            title="Xth Class"
            organization="Sri Chaitanya Techno School"
            date="2017 - 2018"
            description="Completed Xth Class in Sri Chaitanya Techno School."
          />

        </div>
      </div>
    </section>
  );
};

export default Experience;

