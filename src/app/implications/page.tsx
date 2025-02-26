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

1. Workforce Transformation:
• Automation of routine tasks
• Creation of new job categories
• Skill requirements evolution
• Remote work enablement
• Workplace productivity changes

2. Education Evolution:
• Personalized learning paths
• AI-assisted teaching
• Skill assessment changes
• Lifelong learning emphasis
• Educational accessibility

3. Healthcare Revolution:
• Diagnostic assistance
• Treatment personalization
• Healthcare accessibility
• Preventive medicine
• Mental health support

4. Social Interaction Changes:
• Digital communication evolution
• Virtual communities
• Social media dynamics
• Human-AI interaction
• Relationship patterns

5. Urban Development:
• Smart city initiatives
• Transportation systems
• Energy management
• Public safety
• Environmental monitoring`
    },
    ethical: {
      title: 'Ethical Considerations',
      content: `Key ethical concerns surrounding AI include:

1. Fairness and Bias:
• Algorithm bias detection
• Dataset representation
• Equal access to AI benefits
• Fair decision-making
• Discrimination prevention

2. Privacy and Data Protection:
• Personal data handling
• Surveillance concerns
• Data ownership rights
• Consent management
• Information security

3. Transparency and Accountability:
• Decision explanation
• Audit mechanisms
• Responsibility attribution
• Error correction
• Public oversight

4. Human Agency:
• Autonomy preservation
• Human-in-the-loop systems
• Decision-making authority
• Control mechanisms
• User empowerment

5. Environmental Impact:
• Energy consumption
• Resource utilization
• Environmental monitoring
• Sustainable practices
• Climate change considerations`
    },
    economic: {
      title: 'Economic Impact',
      content: `AI's influence on the economy:

1. Labor Market Changes:
• Job displacement
• New role creation
• Skill requirements
• Wage impacts
• Work-life balance

2. Business Transformation:
• Productivity improvements
• Cost reduction
• Innovation acceleration
• Market competition
• Business models evolution

3. Industry Disruption:
• Manufacturing automation
• Service sector changes
• Agricultural innovation
• Healthcare efficiency
• Financial services evolution

4. Economic Distribution:
• Wealth inequality
• Income distribution
• Economic opportunities
• Market concentration
• Regional development

5. Global Competition:
• AI race dynamics
• Technology leadership
• Resource allocation
• International cooperation
• Market access`
    },
    future: {
      title: 'Future Considerations',
      content: `Looking ahead, we must consider:

1. Long-term Societal Effects:
• Cultural evolution
• Social structures
• Human relationships
• Work patterns
• Lifestyle changes

2. Governance Frameworks:
• Regulatory development
• International standards
• Policy coordination
• Enforcement mechanisms
• Adaptive governance

3. Educational Preparation:
• Curriculum updates
• Skill development
• Teacher training
• Learning methods
• Educational access

4. Environmental Impact:
• Energy efficiency
• Resource optimization
• Climate solutions
• Sustainable AI
• Environmental monitoring

5. Human-AI Coexistence:
• Integration patterns
• Interaction models
• Trust building
• Role definition
• Ethical frameworks`
    },
    governance: {
      title: 'AI Governance',
      content: `Important aspects of AI governance:

1. Regulatory Frameworks:
• Legal standards
• Compliance requirements
• Enforcement mechanisms
• International coordination
• Industry guidelines

2. Safety Protocols:
• Risk assessment
• Testing requirements
• Deployment guidelines
• Monitoring systems
• Emergency responses

3. Ethical Guidelines:
• Development principles
• Usage restrictions
• Rights protection
• Fairness requirements
• Accountability measures

4. Stakeholder Engagement:
• Public consultation
• Industry participation
• Academic input
• Civil society role
• Government coordination

5. Implementation Strategy:
• Phased deployment
• Impact assessment
• Resource allocation
• Capacity building
• Progress monitoring`
    },
    research: {
      title: 'Research Priorities',
      content: `Key areas requiring focused research:

1. Technical Development:
• Algorithm improvement
• Efficiency enhancement
• Safety mechanisms
• Robustness testing
• Integration methods

2. Social Impact Studies:
• Behavioral changes
• Cultural effects
• Community impacts
• Adaptation patterns
• Long-term consequences

3. Economic Analysis:
• Market effects
• Job impacts
• Innovation patterns
• Growth dynamics
• Distribution effects

4. Environmental Research:
• Energy efficiency
• Resource usage
• Climate effects
• Sustainable practices
• Impact mitigation

5. Policy Development:
• Regulatory frameworks
• Governance models
• International cooperation
• Implementation strategies
• Evaluation methods`
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