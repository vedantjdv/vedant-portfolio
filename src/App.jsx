import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Vedant Jadhav
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Backend Developer | Java • Golang • PostgreSQL • Spring Boot
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <a
              href="mailto:veerujadhav879@gmail.com"
              className="hover:text-yellow-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/vedantjdv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ivedantjadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-400 inline-block pb-1">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Skilled software developer with experience in backend development.
            Proficient problem solver with a strong ability to design and
            implement efficient and scalable solutions. Open to work and utilize
            my skills and expertise to contribute to the growth of your
            organization, while aiming to grow my knowledge and experience.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center border-b-2 border-yellow-400 inline-block pb-1">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">
                Software Development Engineer - I
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                BharatNxt | Jun 2023 – Present
              </p>
              <ul className="list-disc ml-6 text-gray-300 text-base space-y-2">
                <li>Lead backend services for payment operations.</li>
                <li>Built alerting system for anomaly detection in transactions.</li>
                <li>Implemented fallbacks, circuit breakers, and error handling.</li>
                <li>Migrated SQL to NoSQL to improve performance.</li>
                <li>Converted payment services from Java to Golang.</li>
                <li>Reduced payment latency by up to 2000 ms.</li>
                <li>Managed production servers and automated deployments.</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">
                Software Development Intern
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                BharatNxt | Nov 2022 – Jun 2023
              </p>
              <ul className="list-disc ml-6 text-gray-300 text-base space-y-2">
                <li>Built APIs for internal dashboards.</li>
                <li>Wrote complex PostgreSQL queries for product and finance teams.</li>
                <li>Migrated payment gateway systems to updated versions.</li>
                <li>Implemented PCI DSS compliance for sensitive data handling.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-400 inline-block pb-1">
            Technical Skills
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300 text-lg">
            <li>Java</li>
            <li>Golang</li>
            <li>PostgreSQL</li>
            <li>Spring Boot</li>
            <li>Docker</li>
            <li>RabbitMQ</li>
            <li>Kafka</li>
            <li>GCP</li>
            <li>JUnit5</li>
          </ul>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-yellow-400 inline-block pb-1">
            Connect with Me
          </h2>
          <p className="text-gray-300 mb-8">
            I actively write articles on Medium and share my learnings on GitHub.  
            Feel free to connect with me through the following links:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:veerujadhav879@gmail.com"
              className="bg-gray-900 px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/vedantjdv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ivedantjadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@vedantjdv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 px-5 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              Medium
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Vedant Jadhav. All rights reserved.
      </footer>
    </div>
  );
}
