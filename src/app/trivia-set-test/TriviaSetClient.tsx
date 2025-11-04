'use client';

import { useState } from 'react';
import type { TriviaSetFromDB } from '@/lib/triviaSetLoader';

interface ParsedQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

interface TriviaSetClientProps {
  triviaSet: TriviaSetFromDB;
}

// Parse the question_data jsonb field
function parseContent(questionData: unknown): ParsedQuestion[] {
  console.log('Raw question_data (jsonb):', questionData);
  console.log('Type:', typeof questionData);

  if (!questionData) {
    console.log('No question_data');
    return [];
  }

  const questions: ParsedQuestion[] = [];

  // Handle different possible JSON structures
  if (Array.isArray(questionData)) {
    // Direct array of questions
    questionData.forEach((item: unknown, index: number) => {
      const questionItem = item as {
        question?: string;
        text?: string;
        prompt?: string;
        options?: string[];
        choices?: string[];
        answer?: string;
        correct?: string;
        correctAnswer?: string;
        explanation?: string;
        reason?: string;
      };
      questions.push({
        id: index + 1,
        question:
          questionItem.question ||
          questionItem.text ||
          questionItem.prompt ||
          '',
        options: questionItem.options ||
          questionItem.choices || ['True', 'False'],
        correctAnswer:
          questionItem.answer ||
          questionItem.correct ||
          questionItem.correctAnswer ||
          '',
        explanation: questionItem.explanation || questionItem.reason || '',
      });
    });
  } else if (
    typeof questionData === 'object' &&
    questionData !== null &&
    'questions' in questionData &&
    Array.isArray((questionData as { questions: unknown[] }).questions)
  ) {
    // Object with questions array
    const questionsArray = (questionData as { questions: unknown[] }).questions;
    questionsArray.forEach((item: unknown, index: number) => {
      const questionItem = item as {
        question?: string;
        text?: string;
        prompt?: string;
        options?: string[];
        choices?: string[];
        answer?: string;
        correct?: string;
        correctAnswer?: string;
        explanation?: string;
        reason?: string;
      };
      questions.push({
        id: index + 1,
        question:
          questionItem.question ||
          questionItem.text ||
          questionItem.prompt ||
          '',
        options: questionItem.options ||
          questionItem.choices || ['True', 'False'],
        correctAnswer:
          questionItem.answer ||
          questionItem.correct ||
          questionItem.correctAnswer ||
          '',
        explanation: questionItem.explanation || questionItem.reason || '',
      });
    });
  } else if (typeof questionData === 'object' && questionData !== null) {
    // Single question object
    const questionItem = questionData as {
      question?: string;
      text?: string;
      prompt?: string;
      options?: string[];
      choices?: string[];
      answer?: string;
      correct?: string;
      correctAnswer?: string;
      explanation?: string;
      reason?: string;
    };
    questions.push({
      id: 1,
      question:
        questionItem.question || questionItem.text || questionItem.prompt || '',
      options: questionItem.options ||
        questionItem.choices || ['True', 'False'],
      correctAnswer:
        questionItem.answer ||
        questionItem.correct ||
        questionItem.correctAnswer ||
        '',
      explanation: questionItem.explanation || questionItem.reason || '',
    });
  }

  console.log('Parsed questions:', questions);
  return questions;
}

// Parse markdown format (original logic) - kept for future use
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function parseMarkdownContent(content: string): ParsedQuestion[] {
  const questions: ParsedQuestion[] = [];

  // Split by question sections
  const sections = content
    .split(/## Question \d+/)
    .filter((section) => section.trim());

  sections.forEach((section, index) => {
    const lines = section
      .trim()
      .split('\n')
      .filter((line) => line.trim());

    let question = '';
    const options: string[] = [];
    let correctAnswer = '';
    let explanation = '';

    let currentMode:
      | 'question'
      | 'options'
      | 'answer'
      | 'explanation'
      | 'statement' = 'question';

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('**Question:**')) {
        currentMode = 'question';
        question = trimmedLine.replace('**Question:**', '').trim();
      } else if (trimmedLine.startsWith('**Statement:**')) {
        currentMode = 'statement';
        question = trimmedLine.replace('**Statement:**', '').trim();
      } else if (trimmedLine.startsWith('**Options:**')) {
        currentMode = 'options';
      } else if (trimmedLine.startsWith('**Answer:**')) {
        currentMode = 'answer';
        correctAnswer = trimmedLine.replace('**Answer:**', '').trim();
      } else if (trimmedLine.startsWith('**Explanation:**')) {
        currentMode = 'explanation';
        explanation = trimmedLine.replace('**Explanation:**', '').trim();
      } else if (currentMode === 'question' && !trimmedLine.startsWith('**')) {
        question += ' ' + trimmedLine;
      } else if (currentMode === 'statement' && !trimmedLine.startsWith('**')) {
        question += ' ' + trimmedLine;
      } else if (currentMode === 'options' && trimmedLine.startsWith('- ')) {
        options.push(trimmedLine.substring(2));
      } else if (
        currentMode === 'explanation' &&
        !trimmedLine.startsWith('**') &&
        !trimmedLine.startsWith('---')
      ) {
        explanation += ' ' + trimmedLine;
      }
    }

    // For true/false questions, set default options if none found
    if (options.length === 0) {
      options.push('True', 'False');
    }

    if (question && correctAnswer) {
      questions.push({
        id: index + 1,
        question: question.trim(),
        options,
        correctAnswer: correctAnswer.trim(),
        explanation: explanation.trim(),
      });
    }
  });

  return questions;
}

export default function TriviaSetClient({ triviaSet }: TriviaSetClientProps) {
  const questions = parseContent(triviaSet.question_data);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  if (questions.length === 0) {
    return (
      <div className="bg-red-900/50 border border-red-500 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-red-400 mb-2">
          ❌ Could Not Parse Questions
        </h3>
        <p className="text-red-300">
          The content format might not match the expected markdown structure.
        </p>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="bg-[#16213e] rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">
          🎮 Interactive Quiz Ready!
        </h3>
        <div className="space-y-4">
          <div className="text-[#a0aec0]">
            <p>
              <strong>Questions Found:</strong> {questions.length}
            </p>
            <p>
              <strong>Type:</strong>{' '}
              {questions[0]?.options.includes('True')
                ? 'True/False'
                : 'Multiple Choice'}
            </p>
            <p>
              <strong>Estimated Time:</strong>{' '}
              {Math.ceil(questions.length * 0.5)} minutes
            </p>
          </div>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-lg transition-colors"
          >
            🚀 Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="bg-[#16213e] rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">🏆 Quiz Complete!</h3>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#4cc9f0] mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-2xl text-white mb-4">
              {percentage}% Correct
            </div>
          </div>

          <div className="space-y-3">
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-3 rounded border-l-4 ${isCorrect ? 'border-green-500 bg-green-900/20' : 'border-red-500 bg-red-900/20'}`}
                >
                  <p className="text-white font-medium mb-1">
                    Q{index + 1}: {q.question}
                  </p>
                  <p className="text-sm text-[#a0aec0]">
                    Your answer:{' '}
                    <span
                      className={isCorrect ? 'text-green-400' : 'text-red-400'}
                    >
                      {userAnswer || 'No answer'}
                    </span>
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-400">
                      Correct: {q.correctAnswer}
                    </p>
                  )}
                  {q.explanation && (
                    <p className="text-xs text-[#a0aec0] mt-1">
                      {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={resetQuiz}
            className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-2 px-4 rounded transition-colors"
          >
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  return (
    <div className="bg-[#16213e] rounded-2xl p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <div className="text-[#a0aec0] text-sm">
            Progress:{' '}
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#0a0e1a] rounded-full h-2 mb-6">
          <div
            className="bg-[#4cc9f0] h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h4 className="text-lg text-white mb-4">{currentQ.question}</h4>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === option
                  ? 'border-[#4cc9f0] bg-[#4cc9f0]/10 text-white'
                  : 'border-[#37475a] bg-[#0a0e1a] text-[#a0aec0] hover:border-[#4cc9f0]/50 hover:bg-[#4cc9f0]/5'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="bg-[#37475a] hover:bg-[#4a5a73] disabled:bg-[#232f3e] disabled:text-[#a0aec0] text-white font-medium py-2 px-4 rounded transition-colors"
        >
          ← Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="bg-[#4cc9f0] hover:bg-[#3bb5e0] disabled:bg-[#37475a] disabled:text-[#a0aec0] text-[#0a0e1a] font-bold py-2 px-6 rounded transition-colors"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
