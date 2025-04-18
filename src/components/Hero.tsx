import React from 'react';
import { Code, Terminal, Server, Rocket, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-24 pb-32 min-h-[90vh] flex items-center bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-zinc-800 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/3 w-60 h-60 bg-zinc-700 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-zinc-800 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
        <Terminal className="absolute top-1/4 left-1/5 text-white opacity-5" size={180} />
        <Code className="absolute bottom-1/4 right-1/5 text-white opacity-5" size={200} />
        <Server className="absolute top-2/3 left-1/2 text-white opacity-5" size={150} />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="text-yellow-500" size={32} />
            <span className="text-yellow-500 font-semibold text-xl">Launch Your Tech Career</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            From Graduate to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Professional Developer</span> in Months
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            No experience? No problem. Our expert coaching transforms recent graduates into industry-ready software developers with cutting-edge skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="group bg-yellow-500 text-black px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:bg-yellow-400 text-center relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles size={20} />
                Start Your Journey
              </span>
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:bg-white hover:text-black text-center group"
            >
              Free Career Consultation
            </a>
          </div>
          
          <div className="mt-16">
            <p className="text-gray-300 font-medium mb-4">Perfect for:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <span className="text-yellow-500">✓</span> Recent Graduates
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <span className="text-yellow-500">✓</span> Career Changers
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <span className="text-yellow-500">✓</span> Self-Taught Coders
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;