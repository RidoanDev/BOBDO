import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Globe } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const DeveloperInfo = () => {
  return (
    <div>
      <PageHeader 
        title="Developer Information" 
        description="Meet the developer behind BOBDO's web platform"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <img
                  src="https://avatars.githubusercontent.com/u/108570191?v=4"
                  alt="Ridoan Zisan"
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800"
                />
              </div>
            </div>
            
            <div className="pt-20 pb-8 px-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ridoan Zisan</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Full Stack Developer</p>
              
              <div className="mt-6 flex justify-center space-x-4">
                <a
                  href="https://github.com/ridoan01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ridoan-zisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:ridoan.zisan@gmail.com"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://ridoan-zisan.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </div>

              <div className="mt-8">
                <a
                  href="https://ridoan-zisan.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Visit Portfolio
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About the Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ridoan Zisan is a passionate Full Stack Developer with expertise in modern web technologies. 
                He developed the BOBDO web platform using React, TypeScript, and Tailwind CSS, creating a 
                user-friendly interface for blood donation management.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With a focus on creating impactful solutions, Ridoan combines technical expertise with a 
                deep understanding of user needs to build applications that make a difference in people's lives.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="font-medium text-gray-900 dark:text-white">Frontend</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    React, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="font-medium text-gray-900 dark:text-white">Backend</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Node.js, Express, PostgreSQL
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h4 className="font-medium text-gray-900 dark:text-white">Tools</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Git, VS Code, Figma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;