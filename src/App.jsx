import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, Linkedin, Mail, SquarePen } from 'lucide-react';

// Data can be easily managed in a separate file for better maintainability.
const portfolioData = {
  name: 'Vedant Jadhav',
  title: 'Backend Developer | Java • Golang • PostgreSQL • Spring Boot',
  about: 'Skilled software developer with experience in backend development. Proficient problem solver with a strong ability to design and implement efficient and scalable solutions. Open to work and utilize my skills and expertise to contribute to the growth of your organization, while aiming to grow my knowledge and experience.',
  contactLinks: [
    { name: 'Email', href: 'mailto:veerujadhav879@gmail.com', icon: <Mail size={20} /> },
    { name: 'GitHub', href: 'https://github.com/vedantjdv', icon: <Github size={20} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ivedantjadhav', icon: <Linkedin size={20} /> },
  ],
  experience: [
    {
      title: 'Software Development Engineer - I',
      company: 'BharatNxt',
      date: 'Jun 2023 – Present',
      responsibilities: [
        'Lead backend services for payment operations.',
        'Built alerting system for anomaly detection in transactions.',
        'Implemented fallbacks, circuit breakers, and error handling.',
        'Migrated SQL to NoSQL to improve performance.',
        'Converted payment services from Java to Golang.',
        'Reduced payment latency by up to 2000 ms.',
        'Managed production servers and automated deployments.',
      ],
    },
    {
      title: 'Software Development Intern',
      company: 'BharatNxt',
      date: 'Nov 2022 – Jun 2023',
      responsibilities: [
        'Built APIs for internal dashboards.',
        'Wrote complex PostgreSQL queries for product and finance teams.',
        'Migrated payment gateway systems to updated versions.',
        'Implemented PCI DSS compliance for sensitive data handling.',
      ],
    },
  ],
  skills: [
    'Java', 'Golang', 'PostgreSQL', 'Spring Boot', 'Docker',
    'RabbitMQ', 'Kafka', 'GCP', 'JUnit5', 'REST APIs',
  ],
  connectLinks: [
    { name: 'Email', href: 'mailto:veerujadhav879@gmail.com', icon: <Mail size={20} /> },
    { name: 'GitHub', href: 'https://github.com/vedantjdv', icon: <Github size={20} /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ivedantjadhav', icon: <Linkedin size={20} /> },
    { name: 'Medium', href: 'https://medium.com/@vedantjdv', icon: <SquarePen size={20} /> },
  ],
};

// A reusable component for the Experience Card
const ExperienceCard = ({ title, company, date, responsibilities, animation }) => (
  <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    data-aos={animation}
  >
    <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{title}</h3>
    <p className="text-sm text-gray-400 mb-4 font-mono">{company} | {date}</p>
    <ul className="list-disc ml-6 text-gray-300 text-base space-y-2">
      {responsibilities.map((resp, index) => (
        <li key={index} className="text-gray-200">{resp}</li>
      ))}
    </ul>
  </div>
);

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const {
    name,
    title,
    about,
    contactLinks,
    experience,
    skills,
    connectLinks,
  } = portfolioData;

  return (
    <div className="bg-gray-950 text-white font-sans antialiased">
      {/* Skip to Content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Hero Section (always visible) */}
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 py-32 rounded-b-3xl shadow-xl">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
            {name}
          </h1>
          <p className="text-lg md:text-xl text-yellow-300 max-w-3xl mx-auto mb-10 font-mono">
            {title}
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-lg">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transform transition-transform duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </header>
      
      <main id="main-content">
        {/* About Section */}
        <section className="py-24" data-aos="fade-up">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-yellow-400 inline-block pb-1">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {about}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center border-b-2 border-yellow-400 inline-block pb-1">
              Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {experience.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  {...exp}
                  animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24" data-aos="zoom-in">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-yellow-400 inline-block pb-1">
              Technical Skills
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-gray-300 text-lg">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:bg-yellow-400 hover:text-gray-950 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-24 bg-gray-900" data-aos="fade-up">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-yellow-400 inline-block pb-1">
              Connect with Me
            </h2>
            <p className="text-gray-300 mb-8">
              I actively write articles on Medium and share my learnings on GitHub.
              Feel free to connect with me through the following links:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {connectLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 hover:text-gray-950 transition-all duration-300 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                  <span className="text-white group-hover:text-gray-950">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-700 bg-gray-950">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
