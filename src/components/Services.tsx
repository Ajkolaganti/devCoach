import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../utils/constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Coaching Services</h2>
          <p className="text-lg text-gray-300">
            We offer specialized coaching in the most in-demand technologies and skills for 2025 and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Not sure which coaching program is right for you? Schedule a free consultation to get personalized recommendations.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:bg-yellow-400"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;