import { Code, Brain, Cloud, Terminal, Shield } from 'lucide-react';
import { Service, Testimonial } from '../types';

export const services: Service[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Master the most in-demand programming languages with personalized coaching from experts.',
    icon: Code,
    bulletPoints: [
      'Python for AI, data science, and web development',
      'JavaScript for front-end and Node.js back-end',
      'Java for enterprise applications and Android',
      'C++ for system-level and performance-critical apps',
      'C# for Windows applications and Unity game dev'
    ]
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Learn essential concepts in AI/ML and how to implement them in your projects.',
    icon: Brain,
    bulletPoints: [
      'Understand AI/ML fundamentals and key algorithms',
      'Work with TensorFlow, PyTorch, and other ML libraries',
      'Learn prompt engineering for LLMs',
      'Implement AI features in real-world applications',
      'Utilize AI-assisted development tools'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Gain expertise in cloud platforms and learn how to architect scalable solutions.',
    icon: Cloud,
    bulletPoints: [
      'AWS, Azure, and Google Cloud fundamentals',
      'Cloud architecture and best practices',
      'Serverless computing and FaaS',
      'Database design for cloud environments',
      'Cost optimization and performance tuning'
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description: 'Learn how to implement efficient CI/CD pipelines and automate deployment processes.',
    icon: Terminal,
    bulletPoints: [
      'CI/CD pipeline setup and optimization',
      'Docker containerization and Kubernetes',
      'Infrastructure as code with Terraform',
      'Monitoring and logging best practices',
      'Automating testing and deployment'
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Develop skills to implement secure coding practices and protect your applications.',
    icon: Shield,
    bulletPoints: [
      'Secure coding principles and OWASP Top 10',
      'Authentication and authorization systems',
      'API security and data protection',
      'Penetration testing basics',
      'Security compliance and best practices'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Senior Developer',
    company: 'TechCorp Inc.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'The AI & Machine Learning coaching program completely transformed my career. Within 3 months, I was able to implement ML models at work that significantly improved our product\'s performance. My coach was incredibly knowledgeable and patient.'
  },
  {
    id: '2',
    name: 'Arjun Patel',
    role: 'Full Stack Developer',
    company: 'StartupLabs',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'I tried learning cloud computing on my own for months without much progress. After just a few sessions with my DevCoach mentor, everything clicked. They provided real-world scenarios and guided me through building actual cloud solutions. Now I\'m leading cloud initiatives at my company.'
  },
  {
    id: '3',
    name: 'Neha Gupta',
    role: 'DevOps Engineer',
    company: 'InnovateTech',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'The DevOps coaching program was exactly what I needed to advance my career. My coach helped me design and implement CI/CD pipelines that reduced our deployment time by 70%. The personalized approach and project-based learning made all the difference.'
  },
  {
    id: '4',
    name: 'Rahul Verma',
    role: 'Security Specialist',
    company: 'SecureData Systems',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'As someone transitioning into cybersecurity, I was overwhelmed by the vast amount of information. My DevCoach mentor provided a structured learning path and practical exercises that helped me understand complex security concepts. I now lead security initiatives at my organization.'
  }
];