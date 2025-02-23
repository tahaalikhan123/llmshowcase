'use client';

import { useState } from 'react';

type Resource = {
  title: string;
  description: string;
  link: string;
  type: 'course' | 'documentation' | 'tool' | 'research' | 'community';
};

type ResourcesByType = {
  [key: string]: {
    icon: string;
    title: string;
    resources: Resource[];
  };
};

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const resourcesByType: ResourcesByType = {
    course: {
      icon: '📚',
      title: 'Online Courses',
      resources: [
        {
          title: 'AI for Everyone',
          description: 'A non-technical course to help you understand AI technologies',
          link: 'https://www.coursera.org/learn/ai-for-everyone',
          type: 'course'
        },
        {
          title: 'Deep Learning Specialization',
          description: 'Learn the foundations of Deep Learning and AI',
          link: 'https://www.coursera.org/specializations/deep-learning',
          type: 'course'
        }
      ]
    },
    documentation: {
      icon: '📖',
      title: 'Documentation & Guides',
      resources: [
        {
          title: 'Hugging Face Documentation',
          description: 'Comprehensive guides for working with transformers and LLMs',
          link: 'https://huggingface.co/docs',
          type: 'documentation'
        },
        {
          title: 'OpenAI API Documentation',
          description: 'Learn how to integrate with OpenAI\'s language models',
          link: 'https://platform.openai.com/docs',
          type: 'documentation'
        }
      ]
    },
    tool: {
      icon: '🛠️',
      title: 'Tools & Platforms',
      resources: [
        {
          title: 'Google Colab',
          description: 'Free platform to write and execute Python code in the browser',
          link: 'https://colab.research.google.com',
          type: 'tool'
        },
        {
          title: 'Hugging Face Hub',
          description: 'Platform for sharing and discovering AI models',
          link: 'https://huggingface.co',
          type: 'tool'
        }
      ]
    },
    research: {
      icon: '🔬',
      title: 'Research Papers',
      resources: [
        {
          title: 'Attention Is All You Need',
          description: 'The original transformer paper that revolutionized NLP',
          link: 'https://arxiv.org/abs/1706.03762',
          type: 'research'
        },
        {
          title: 'Language Models are Few-Shot Learners',
          description: 'The GPT-3 paper introducing few-shot learning capabilities',
          link: 'https://arxiv.org/abs/2005.14165',
          type: 'research'
        }
      ]
    },
    community: {
      icon: '👥',
      title: 'Communities',
      resources: [
        {
          title: 'r/MachineLearning',
          description: 'Reddit\'s largest ML community',
          link: 'https://www.reddit.com/r/MachineLearning/',
          type: 'community'
        },
        {
          title: 'AI Alignment Forum',
          description: 'Discussion forum focused on AI safety and ethics',
          link: 'https://www.alignmentforum.org/',
          type: 'community'
        }
      ]
    }
  };

  const allResources = Object.values(resourcesByType).flatMap(
    category => category.resources
  );

  const displayedResources = activeFilter === 'all'
    ? allResources
    : allResources.filter(resource => resource.type === activeFilter);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Learning Resources</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'all'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
        >
          All Resources
        </button>
        {Object.entries(resourcesByType).map(([type, { icon, title }]) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
              activeFilter === type
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            <span>{icon}</span>
            {title}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {displayedResources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 
              hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">
                {resourcesByType[resource.type].icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {resource.description}
                </p>
                <span className="text-blue-600 dark:text-blue-400 text-sm">
                  Learn more →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 