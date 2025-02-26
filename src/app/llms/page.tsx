'use client';

import { useState } from 'react';
import CodeExample from '@/components/CodeExample';
import QuizSection from '@/components/QuizSection';

type Section = {
  title: string;
  content: string;
  examples?: Array<{
    title: string;
    description: string;
    code: string;
    output?: string;
  }>;
};

type Sections = {
  [key: string]: Section;
};

const quizQuestions = [
  {
    id: 1,
    text: "What is the primary architecture used in modern LLMs?",
    options: [
      "Recurrent Neural Networks (RNN)",
      "Transformer Architecture",
      "Convolutional Neural Networks (CNN)",
      "Long Short-Term Memory (LSTM)"
    ],
    correctAnswer: 1,
    explanation: "Modern LLMs primarily use the Transformer architecture, introduced in the 'Attention is All You Need' paper. This architecture enables efficient parallel processing and better handling of long-range dependencies through self-attention mechanisms."
  },
  {
    id: 2,
    text: "Which of the following is NOT a typical capability of LLMs?",
    options: [
      "Text generation",
      "Real-time video processing",
      "Language translation",
      "Code completion"
    ],
    correctAnswer: 1,
    explanation: "While LLMs excel at text-based tasks like generation, translation, and code completion, they are not designed for real-time video processing. That's typically handled by computer vision models and specialized neural networks."
  },
  {
    id: 3,
    text: "What is 'tokenization' in the context of LLMs?",
    options: [
      "Converting text into numerical values",
      "Breaking text into smaller units for processing",
      "Encrypting sensitive information",
      "Generating authentication tokens"
    ],
    correctAnswer: 1,
    explanation: "Tokenization is the process of breaking text into smaller units (tokens) that the model can process. These tokens can be words, subwords, or characters, which are then converted into numerical values for the model to understand."
  }
];

export default function UnderstandingLLMs() {
  const [activeSection, setActiveSection] = useState('intro');
  const [showQuiz, setShowQuiz] = useState(false);

  const sections: Sections = {
    intro: {
      title: 'What are Large Language Models?',
      content: `Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data. They represent a breakthrough in natural language processing and artificial intelligence, capable of understanding and generating human-like text, translating languages, writing creative content, and answering questions in an informative way.

Key Characteristics:
• Massive scale (billions to trillions of parameters)
• Trained on diverse internet-scale datasets
• Capable of few-shot and zero-shot learning
• Context-aware text generation
• Multi-task capabilities without specific training`,
      examples: [
        {
          title: 'Simple LLM Interaction',
          description: 'Basic example of how to interact with an LLM using Python',
          code: `from openai import OpenAI

client = OpenAI()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain what an LLM is in one sentence."}
    ]
)

print(response.choices[0].message.content)`,
          output: `"A Large Language Model is a sophisticated AI system trained on vast amounts of text data that can understand and generate human-like text across various tasks and domains."`
        }
      ]
    },
    how: {
      title: 'How Do LLMs Work?',
      content: `LLMs work through a sophisticated process involving transformer architecture and self-attention mechanisms:

1. Architecture Components:
• Transformer Blocks: Core processing units
• Self-Attention Layers: Context understanding
• Feed-Forward Networks: Information processing
• Layer Normalization: Stability in training

2. Processing Steps:
• Tokenization: Converting text to numbers
• Embedding: Creating vector representations
• Self-Attention: Understanding relationships
• Generation: Producing output tokens

3. Training Process:
• Pretraining on massive datasets
• Fine-tuning for specific tasks
• Continuous learning and updates
• Parameter optimization`,
      examples: [
        {
          title: 'Tokenization Example',
          description: 'How text is broken down into tokens',
          code: `from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")
text = "Hello, how are you?"
tokens = tokenizer.encode(text)
decoded = tokenizer.decode(tokens)

print(f"Original: {text}")
print(f"Tokens: {tokens}")
print(f"Decoded: {decoded}")`,
          output: `Original: Hello, how are you?
Tokens: [15496, 11, 2129, 389, 345, 30]
Decoded: Hello, how are you?`
        }
      ]
    },
    capabilities: {
      title: 'Capabilities and Limitations',
      content: `Understanding both the capabilities and limitations of LLMs is crucial:

1. Current Capabilities:
• Natural language understanding and generation
• Code generation and analysis
• Translation and summarization
• Creative writing and content creation
• Question answering and reasoning
• Text classification and analysis
• Knowledge extraction and synthesis

2. Advanced Features:
• Context-aware responses
• Multi-turn conversations
• Style adaptation
• Format following
• Instruction following

3. Limitations:
• May generate plausible-sounding but incorrect information
• Limited to training data cutoff date
• No real-time information or true understanding
• Can exhibit biases present in training data
• Lack of causal reasoning
• Inconsistency in responses
• Resource intensive

4. Safety Considerations:
• Content filtering needs
• Privacy concerns
• Security implications
• Ethical considerations`,
      examples: [
        {
          title: 'Code Generation Example',
          description: 'Example of LLM generating Python code',
          code: `response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "Write a Python function to calculate fibonacci numbers"}
    ]
)

print(response.choices[0].message.content)`,
          output: `def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib`
        }
      ]
    },
    applications: {
      title: 'Real-world Applications',
      content: `LLMs are revolutionizing various fields:

1. Software Development:
• Code generation and review
• Documentation writing
• Bug detection and fixing
• Development assistance
• API integration support

2. Content Creation:
• Article and blog writing
• Marketing copy generation
• Social media content
• Email composition
• Creative writing

3. Education:
• Personalized tutoring
• Content explanation
• Question answering
• Study material generation
• Language learning

4. Business Applications:
• Customer service automation
• Document analysis
• Report generation
• Market research
• Data analysis

5. Research and Analysis:
• Literature review
• Data synthesis
• Hypothesis generation
• Pattern identification
• Research assistance`
    },
    future: {
      title: 'Future of LLMs',
      content: `The future of LLMs points toward several exciting developments:

1. Technical Advancements:
• More efficient training methods
• Reduced computational requirements
• Improved accuracy and reliability
• Enhanced reasoning capabilities
• Better factual grounding

2. New Capabilities:
• Multimodal understanding
• Improved logical reasoning
• Better common sense reasoning
• Enhanced creativity
• Deeper contextual understanding

3. Integration Trends:
• Edge device deployment
• API standardization
• Custom model development
• Industry-specific solutions
• Hybrid AI systems

4. Societal Impact:
• Democratization of AI
• Educational transformation
• Workplace evolution
• Creative industry changes
• Research acceleration`
    },
    best_practices: {
      title: 'Best Practices and Usage Guidelines',
      content: `Important considerations when working with LLMs:

1. Prompt Engineering:
• Clear and specific instructions
• Context-rich prompts
• Structured output requests
• Error handling strategies
• Iterative refinement

2. Safety and Ethics:
• Content filtering
• Bias detection
• Output verification
• Privacy protection
• Ethical guidelines

3. Performance Optimization:
• Token management
• Cost optimization
• Response caching
• Error handling
• Rate limiting

4. Integration Guidelines:
• API best practices
• Error handling
• Monitoring and logging
• Version control
• Testing strategies`
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-8">Understanding LLMs</h1>
      
      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveSection(key);
              setShowQuiz(false);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeSection === key && !showQuiz
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            {sections[key].title}
          </button>
        ))}
        <button
          onClick={() => {
            setShowQuiz(true);
            setActiveSection('');
          }}
          className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
            showQuiz
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
        >
          <span>📝</span> Test Your Knowledge
        </button>
      </div>

      {/* Content Section */}
      {!showQuiz ? (
        <>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">
              {sections[activeSection].title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="whitespace-pre-line text-gray-900 dark:text-gray-100 text-lg leading-relaxed">
                {sections[activeSection].content}
              </p>
            </div>

            {/* Code Examples */}
            {sections[activeSection].examples?.map((example, index) => (
              <CodeExample
                key={index}
                title={example.title}
                description={example.description}
                code={example.code}
                output={example.output}
              />
            ))}
          </div>

          {/* Interactive Demo Placeholder */}
          <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border dark:border-yellow-900/30">
            <h3 className="text-xl font-semibold mb-4">Try it Yourself!</h3>
            <p className="text-gray-900 dark:text-gray-100 mb-4">
              Experience how LLMs work by trying out these popular models:
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://chat.openai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ChatGPT - OpenAI&apos;s conversational AI
                </a>
              </li>
              <li>
                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Claude - Anthropic&apos;s AI assistant
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <QuizSection
          title="Test Your Understanding of LLMs"
          questions={quizQuestions}
        />
      )}
    </div>
  );
} 