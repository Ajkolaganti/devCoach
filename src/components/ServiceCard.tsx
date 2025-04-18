import React from 'react';
import { XIcon as Icon } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`bg-zinc-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-yellow-500 border-2 border-transparent ${
        isEven ? 'md:border-l-yellow-500' : 'md:border-r-yellow-500'
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="w-14 h-14 rounded-lg bg-zinc-700 flex items-center justify-center mb-6">
          <service.icon 
            size={28} 
            className="text-yellow-500"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
        
        <ul className="space-y-3 mb-6">
          {service.bulletPoints.map((point, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>
        
        <a
          href="#contact"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-md transition-all duration-300 hover:bg-yellow-400 mt-2"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;