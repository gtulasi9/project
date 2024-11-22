import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  technologies,
  image
}: {
  title: string,
  description: string,
  technologies: string[],
  image: string
}) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
          <Github className="w-4 h-4 mr-2" /> Code
        </a>
        <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
          <ExternalLink className="w-4 h-4 mr-2" /> Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Image to Audio Converter",
      description: "Conversion of image into audio using OCR and Text-To-Speech techniques",
      technologies: ["Python", "OCR", "TTS"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application built with Java and Spring Boot",
      technologies: ["Java", "Spring Boot", "WebSocket"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3"
    },
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform with modern features",
      technologies: ["React.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3"
    },
    {
      title: "Fake Product Identification",
      description: "QR code-based system using machine learning for product verification",
      technologies: ["Python", "ML", "QR Code"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;