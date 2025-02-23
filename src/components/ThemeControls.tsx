'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeControls() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState('normal');

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Set initial font size from localStorage or default
    const savedFontSize = localStorage.getItem('font-size') || 'normal';
    setFontSize(savedFontSize);
    document.documentElement.setAttribute('data-font-size', savedFontSize);
  }, []);

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    localStorage.setItem('font-size', size);
    document.documentElement.setAttribute('data-font-size', size);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border dark:border-gray-700 z-50">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>

      {/* Font Size Controls */}
      <div className="border-l dark:border-gray-700 pl-2 flex gap-2">
        <button
          onClick={() => handleFontSizeChange('small')}
          className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
            fontSize === 'small' ? 'bg-blue-100 dark:bg-blue-900' : ''
          }`}
          aria-label="Small text"
        >
          A-
        </button>
        <button
          onClick={() => handleFontSizeChange('normal')}
          className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
            fontSize === 'normal' ? 'bg-blue-100 dark:bg-blue-900' : ''
          }`}
          aria-label="Normal text"
        >
          A
        </button>
        <button
          onClick={() => handleFontSizeChange('large')}
          className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
            fontSize === 'large' ? 'bg-blue-100 dark:bg-blue-900' : ''
          }`}
          aria-label="Large text"
        >
          A+
        </button>
      </div>
    </div>
  );
} 