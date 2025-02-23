'use client';

import { useState } from 'react';

type Section = {
  title: string;
  content: string;
};

type Sections = {
  [key: string]: Section;
};

export default function Implications() {
  const [activeSection, setActiveSection] = useState('societal');

  const sections: Sections = {
    societal: {
      title: 'Societal Impact',
      content: `AI is reshaping society in profound ways:
      • Automation of jobs and creation of new roles
      • Changes in education and learning methods
      • Impact on privacy and personal data
      • Transformation of social interactions
      • Evolution of entertainment and media
      • Healthcare improvements and accessibility
      • Changes in transportation and urban planning`
    },
    ethical: {
      title: 'Ethical Considerations',
      content: `Key ethical concerns surrounding AI include:
      • Bias and fairness in AI systems
      • Privacy and data protection
      • Transparency and explainability
      • Accountability for AI decisions
      • Impact on human autonomy
      • Digital divide and accessibility
      • Environmental impact of AI computing`
    },
    economic: {
      title: 'Economic Impact',
      content: `AI's influence on the economy:
      • Job market transformation
      • New business models and opportunities
      • Industry automation and efficiency
      • Economic inequality concerns
      • Global competition in AI development
      • Investment in AI research and development
      • Impact on traditional business models`
    },
    future: {
      title: 'Future Considerations',
      content: `Looking ahead, we must consider:
      • Long-term effects on human society
      • Regulation and governance of AI
      • Education and workforce preparation
      • Global cooperation and competition
      • Environmental sustainability
      • Ethical framework development
      • Ensuring beneficial AI development`
    },
    governance: {
      title: 'AI Governance',
      content: `Important aspects of AI governance:
      • Regulatory frameworks
      • International cooperation
      • Industry standards
      • Safety protocols
      • Ethics guidelines
      • Public participation
      • Risk assessment and management`
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">AI Implications</h1>
      
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

      {/* Call to Action */}
      <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border dark:border-green-900/30">
        <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
        <p className="text-gray-900 dark:text-gray-100 mb-4">
          Stay informed and participate in shaping the future of AI:
        </p>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.partnershiponai.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Partnership on AI - Ensuring AI benefits society
            </a>
          </li>
          <li>
            <a
              href="https://www.unesco.org/en/artificial-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              UNESCO AI Ethics - Global standards for AI
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 