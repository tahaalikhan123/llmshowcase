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
      content: `Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data. They can understand and generate human-like text, translate languages, write different kinds of creative content, and answer your questions in an informative way.`,
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
      content: `LLMs work through a process called transformer architecture and self-attention mechanisms. They:
      • Process text by breaking it into tokens
      • Use patterns learned from training data
      • Generate responses based on statistical predictions
      • Utilize context from the conversation to maintain coherence`,
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
      content: `Current capabilities of LLMs include:
      • Natural language understanding and generation
      • Code generation and analysis
      • Translation and summarization
      • Creative writing and content creation

      Limitations include:
      • May generate plausible-sounding but incorrect information
      • Limited to training data cutoff date
      • No real-time information or true understanding
      • Can exhibit biases present in training data`,
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
      content: `LLMs are being used in various fields:
      • Customer service and chatbots
      • Content creation and editing
      • Programming assistance
      • Educational tools
      • Research and analysis
      • Language translation
      • Document summarization`
    },
    future: {
      title: 'Future of LLMs',
      content: `The future of LLMs points toward:
      • More efficient training methods
      • Better factual accuracy
      • Improved reasoning capabilities
      • Enhanced multimodal abilities
      • Greater customization options
      • Reduced computational requirements
      • Better alignment with human values`
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