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
      content: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think and learn like humans. The field encompasses everything from simple rule-based systems to complex neural networks that can process natural language and recognize patterns.

Key concepts in AI include:
• Machine Learning: Systems that improve with experience
• Neural Networks: Computing systems inspired by biological brains
• Deep Learning: Advanced neural networks with multiple layers
• Natural Language Processing: AI systems that understand and generate human language
• Computer Vision: Systems that can interpret and analyze visual information`
    },
    types: {
      title: 'Types of AI',
      content: `There are different types of AI:

1. Narrow/Weak AI (ANI):
• Designed for specific tasks
• Examples: Chess engines, image recognition, virtual assistants
• Currently the most common form of AI

2. General AI (AGI):
• Hypothetical AI with human-like general intelligence
• Ability to understand, learn, and apply knowledge across domains
• Currently not achieved, subject of ongoing research

3. Super AI (ASI):
• Theoretical AI surpassing human intelligence
• Could potentially solve complex global challenges
• Raises significant ethical and safety considerations

4. Based on Functioning:
• Rule-Based Systems: Follow pre-programmed rules
• Machine Learning Systems: Learn from data
• Hybrid Systems: Combine multiple approaches`
    },
    ml: {
      title: 'Machine Learning Basics',
      content: `Machine Learning is a subset of AI that focuses on developing systems that can learn from and make decisions based on data. The main types include:

1. Supervised Learning:
• Learning from labeled data
• Examples: Classification, regression
• Applications: Spam detection, price prediction

2. Unsupervised Learning:
• Finding patterns in unlabeled data
• Examples: Clustering, dimensionality reduction
• Applications: Customer segmentation, anomaly detection

3. Reinforcement Learning:
• Learning through trial and error
• Based on rewards and punishments
• Applications: Game AI, robotics

4. Semi-Supervised Learning:
• Combines labeled and unlabeled data
• Reduces need for expensive labeled data
• Applications: Image classification, speech recognition`
    },
    neural: {
      title: 'Neural Networks',
      content: `Neural networks are computing systems inspired by biological neural networks. They form the foundation of modern AI and deep learning, enabling computers to:

1. Architecture:
• Input Layer: Receives raw data
• Hidden Layers: Process information
• Output Layer: Produces results
• Neurons: Basic computational units
• Weights and Biases: Adjustable parameters

2. Key Concepts:
• Backpropagation: Learning from errors
• Activation Functions: Adding non-linearity
• Loss Functions: Measuring performance
• Optimization: Improving accuracy

3. Applications:
• Image Recognition
• Natural Language Processing
• Speech Recognition
• Game Playing
• Medical Diagnosis`
    },
    applications: {
      title: 'Real-World Applications',
      content: `AI is transforming various industries and aspects of daily life:

1. Healthcare:
• Disease diagnosis
• Drug discovery
• Patient care optimization
• Medical imaging analysis

2. Finance:
• Fraud detection
• Algorithmic trading
• Risk assessment
• Personal banking

3. Transportation:
• Autonomous vehicles
• Traffic management
• Route optimization
• Safety systems

4. Entertainment:
• Content recommendations
• Game AI
• Virtual reality
• Art generation

5. Education:
• Personalized learning
• Automated grading
• Student engagement
• Administrative tasks`
    },
    challenges: {
      title: 'Challenges and Limitations',
      content: `Current challenges in AI development include:

1. Technical Challenges:
• Data quality and quantity requirements
• Computational resources needed
• Algorithm optimization
• System reliability and robustness

2. Ethical Concerns:
• Privacy issues
• Bias in AI systems
• Transparency and explainability
• Safety considerations

3. Implementation Challenges:
• Integration with existing systems
• Cost of development and deployment
• Skill gap in workforce
• Regulatory compliance

4. Future Considerations:
• Sustainability of AI systems
• Social impact management
• International cooperation
• Research directions`
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