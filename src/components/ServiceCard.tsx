import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div 
      className="group relative transform transition-all duration-500 hover:scale-105"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateY(0deg)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-2xl transform -skew-y-2 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/0 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <service.icon 
            size={32} 
            className="text-yellow-500 transform group-hover:rotate-12 transition-transform duration-500"
          />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-3 mb-6">
          {service.bulletPoints.map((point, idx) => (
            <li key={idx} className="flex items-start group/item">
              <span className="text-yellow-500 mr-2 transform group-hover/item:scale-110 transition-transform duration-300">•</span>
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                {point}
              </span>
            </li>
          ))}
        </ul>
        
        <a
          href="#contact"
          className="inline-block w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 text-center font-medium"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;