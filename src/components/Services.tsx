import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../utils/constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-gradient-to-r from-yellow-500/20 to-yellow-500/0 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Expert Coaching Services
          </h2>
          <p className="text-lg text-gray-400">
            Master the most in-demand skills with personalized coaching from industry experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"></div>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Not sure which path to take? Get personalized recommendations from our experts.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;