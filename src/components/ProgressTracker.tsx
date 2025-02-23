'use client';

import { useState, useEffect } from 'react';

type Section = {
  id: string;
  title: string;
  path: string;
};

const sections: Section[] = [
  { id: 'fundamentals', title: 'AI Fundamentals', path: '/fundamentals' },
  { id: 'llms', title: 'Understanding LLMs', path: '/llms' },
  { id: 'implications', title: 'AI Implications', path: '/implications' },
];

export default function ProgressTracker() {
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('completedSections');
    if (saved) {
      setCompletedSections(JSON.parse(saved));
    }
  }, []);

  const toggleSection = (sectionId: string) => {
    const newCompleted = completedSections.includes(sectionId)
      ? completedSections.filter(id => id !== sectionId)
      : [...completedSections, sectionId];
    
    setCompletedSections(newCompleted);
    localStorage.setItem('completedSections', JSON.stringify(newCompleted));
  };

  const progress = Math.round((completedSections.length / sections.length) * 100);

  return (
    <div className="fixed left-4 top-24 z-50">
      <div 
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-12'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-3 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
          aria-label={isOpen ? 'Close progress tracker' : 'Open progress tracker'}
        >
          {isOpen ? '←' : '→'}
        </button>

        <div className={`p-4 ${isOpen ? 'block' : 'hidden'}`}>
          <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
          <div className="mb-4">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {progress}% Complete
            </p>
          </div>

          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={section.id}
                  checked={completedSections.includes(section.id)}
                  onChange={() => toggleSection(section.id)}
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                />
                <label 
                  htmlFor={section.id}
                  className="text-sm cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section.title}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-2 ${!isOpen ? 'block' : 'hidden'}`}>
          <div className="h-32 w-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ height: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 