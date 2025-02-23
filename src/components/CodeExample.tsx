'use client';

import { useState } from 'react';
import { Geist_Mono } from 'next/font/google';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

type CodeExampleProps = {
  title: string;
  description: string;
  code: string;
  output?: string;
};

export default function CodeExample({ title, description, code, output }: CodeExampleProps) {
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border dark:border-gray-700 my-4">
      <div className="p-4 bg-white dark:bg-gray-900">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      
      <div className="relative">
        <pre className={`${geistMono.variable} font-mono bg-gray-50 dark:bg-gray-800 p-4 overflow-x-auto`}>
          <code className="text-sm">{code}</code>
        </pre>
        
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-white dark:bg-gray-700 
            hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
        >
          {isCopied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>

      {output && (
        <div className="border-t dark:border-gray-700">
          <button
            onClick={() => setIsOutputVisible(!isOutputVisible)}
            className="w-full p-2 text-left text-sm font-medium hover:bg-gray-100 
              dark:hover:bg-gray-700 transition-colors flex items-center"
          >
            <span className="transform transition-transform duration-200 mr-2">
              {isOutputVisible ? '▼' : '▶'}
            </span>
            Output
          </button>
          
          {isOutputVisible && (
            <pre className={`${geistMono.variable} font-mono bg-gray-100 dark:bg-gray-800 p-4 text-sm`}>
              <code>{output}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
} 