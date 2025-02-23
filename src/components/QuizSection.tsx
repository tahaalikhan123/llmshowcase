'use client';

import { useState } from 'react';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type QuizProps = {
  title: string;
  questions: Question[];
};

export default function QuizSection({ title, questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer after selection
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border dark:border-gray-700">
        <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
        <div className="mb-6">
          <p className="text-lg mb-2">Your score: {score} out of {questions.length}</p>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                percentage >= 70 ? 'bg-green-500' : percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{percentage}%</p>
        </div>
        <button
          onClick={resetQuiz}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4">{question.text}</p>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedAnswer === null
                  ? 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  : selectedAnswer === index
                  ? index === question.correctAnswer
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-500'
                    : 'bg-red-100 dark:bg-red-900/30 border-red-500'
                  : index === question.correctAnswer
                  ? 'bg-green-100 dark:bg-green-900/30 border-green-500'
                  : 'opacity-50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-gray-900 dark:text-gray-100">
            {question.explanation}
          </p>
        </div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={handleNextQuestion}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      )}
    </div>
  );
} 