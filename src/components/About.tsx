import React from 'react';
import { Users, Award, BookOpen, Calendar, Target, Zap, Trophy, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-500/20 rounded-lg px-4 py-2 mb-6">
              <span className="text-blue-400 font-semibold">Why Choose Us?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for Graduates, <span className="text-blue-400">Designed for Success</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our program is specifically designed for recent graduates and newcomers to software development. 
              We focus on practical, industry-relevant skills that employers are actively seeking, helping you 
              bridge the gap between education and professional development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <Users size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">1:1 Mentorship</h3>
                <p className="text-gray-300">
                  Personal guidance from experienced developers who understand the graduate journey.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <Target size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Career Focus</h3>
                <p className="text-gray-300">
                  Interview prep, portfolio building, and job search strategy tailored for new developers.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <Zap size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Modern Tech Stack</h3>
                <p className="text-gray-300">
                  Learn the latest tools and technologies that innovative companies are using today.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <TrendingUp size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Progress</h3>
                <p className="text-gray-300">
                  Accelerated learning path designed to get you job-ready in months, not years.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Your Path to Success</h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Skill Assessment</h4>
                  <p className="text-gray-300">
                    We evaluate your current knowledge and create a personalized learning roadmap.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Foundations & Fundamentals</h4>
                  <p className="text-gray-300">
                    Master the core concepts and best practices that every professional developer needs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Real-World Projects</h4>
                  <p className="text-gray-300">
                    Build a professional portfolio with projects that showcase your capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Career Launch</h4>
                  <p className="text-gray-300">
                    Interview preparation, resume building, and direct connections to hiring partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;