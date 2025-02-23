'use client';

import { useState } from 'react';

type Section = {
  title: string;
  content: string;
};

type Sections = {
  [key: string]: Section;
};

export default function AIFundamentals() {
  const [activeSection, setActiveSection] = useState('intro');

  const sections: Sections = {
    intro: {
      title: 'Introduction to Artificial Intelligence',
      content: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think and learn like humans. The field encompasses everything from simple rule-based systems to complex neural networks that can process natural language and recognize patterns.`
    },
    types: {
      title: 'Types of AI',
      content: `There are different types of AI:
      • Narrow AI: Designed for specific tasks (like playing chess)
      • General AI: Hypothetical AI with human-like general intelligence
      • Super AI: Theoretical AI surpassing human intelligence`
    },
    ml: {
      title: 'Machine Learning Basics',
      content: `Machine Learning is a subset of AI that focuses on developing systems that can learn from and make decisions based on data. It includes:
      • Supervised Learning
      • Unsupervised Learning
      • Reinforcement Learning`
    },
    neural: {
      title: 'Neural Networks',
      content: `Neural networks are computing systems inspired by biological neural networks. They form the foundation of modern AI and deep learning, enabling computers to:
      • Recognize patterns
      • Process complex data
      • Learn from experience`
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">AI Fundamentals</h1>
      
      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeSection === key
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          {sections[activeSection].title}
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="whitespace-pre-line text-gray-900 dark:text-gray-100 text-lg leading-relaxed">
            {sections[activeSection].content}
          </p>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border dark:border-blue-900/30">
        <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.coursera.org/learn/ai-for-everyone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              AI for Everyone - Coursera
            </a>
          </li>
          <li>
            <a
              href="https://www.elementsofai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Elements of AI - Free Online Course
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 