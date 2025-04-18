import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-400">
            Choose the plan that best fits your learning goals and schedule
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Plan */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                <p className="text-gray-400">3 Classes Per Week</p>
              </div>
              <div className="bg-zinc-800 rounded-full p-2">
                <Star size={24} className="text-yellow-500" />
              </div>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">$100</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>12 Sessions per Month</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>1-on-1 Mentorship</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>Project Reviews</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>Learning Materials</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="block w-full bg-white text-black text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-zinc-900 rounded-2xl p-8 border-2 border-yellow-500 relative">
            <div className="absolute -top-4 right-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-gray-400">5 Classes Per Week</p>
              </div>
              <div className="bg-yellow-500 rounded-full p-2">
                <Star size={24} className="text-black" />
              </div>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">$200</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>20 Sessions per Month</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>Priority 1-on-1 Mentorship</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>Unlimited Project Reviews</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>Advanced Learning Materials</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>Interview Preparation</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-500" size={20} />
                <span>Resume Review</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="block w-full bg-yellow-500 text-black text-center py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;