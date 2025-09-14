'use client';

import { PageLayout } from '@/components';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  points: number;
}

interface GameParams {
  gameType: string;
  category: string;
  challengeId: string;
}

// Sample question sets for different game types and categories
const QUESTION_SETS: Record<string, Record<string, Record<string, TriviaQuestion[]>>> = {
  quickfire: {
    legends: {
      '1': [
        {
          id: 1,
          question: "Who holds the NHL record for most career assists?",
          options: ["Mario Lemieux", "Wayne Gretzky", "Gordie Howe", "Mark Messier"],
          correctAnswer: "Wayne Gretzky",
          explanation: "Gretzky has 1,963 career assists - more than any other player has total points!",
          points: 10
        },
        {
          id: 2,
          question: "Which player is known as 'The Great One'?",
          options: ["Wayne Gretzky", "Mario Lemieux", "Gordie Howe", "Maurice Richard"],
          correctAnswer: "Wayne Gretzky",
          explanation: "Wayne Gretzky earned this nickname through his incredible dominance of the sport.",
          points: 10
        },
        {
          id: 3,
          question: "Who scored the most goals in a single NHL season?",
          options: ["Wayne Gretzky", "Mario Lemieux", "Mike Bossy", "Brett Hull"],
          correctAnswer: "Wayne Gretzky",
          explanation: "Gretzky scored 92 goals in the 1981-82 season, a record that still stands.",
          points: 10
        }
      ]
    }
  },
  truefalse: {
    geography: {
      '1': [
        {
          id: 1,
          question: "The Montreal Canadiens play at the Bell Centre.",
          options: ["True", "False"],
          correctAnswer: "True",
          explanation: "The Bell Centre has been home to the Canadiens since 1996.",
          points: 5
        }
      ]
    }
  }
};

export default function TriviaGame({ params }: { params: Promise<GameParams> }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameState, setGameState] = useState<'playing' | 'finished'>('playing');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [gameParams, setGameParams] = useState<GameParams | null>(null);

  // Unwrap params Promise
  useEffect(() => {
    params.then(setGameParams);
  }, [params]);

  // Get questions for this specific game
  const questions = gameParams ? QUESTION_SETS[gameParams.gameType]?.[gameParams.category]?.[gameParams.challengeId] || [] : [];
  
  // Timer logic
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(''); // Time's up, no answer
    }
  }, [timeLeft, gameState, showResult]);

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === questions[currentQuestion]?.correctAnswer;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + questions[currentQuestion].points);
    }

    // Move to next question after 2 seconds
    setTimeout(() => {
      if (currentQuestion + 1 >= questions.length) {
        setGameState('finished');
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(gameParams?.gameType === 'quickfire' ? 10 : 15);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(gameParams?.gameType === 'quickfire' ? 10 : 15);
    setGameState('playing');
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
  };

  if (!gameParams) {
    return (
      <PageLayout>
        <div className="py-12 px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Loading Challenge...</h1>
          <div className="text-[#4cc9f0] text-6xl">🏒</div>
        </div>
      </PageLayout>
    );
  }

  if (questions.length === 0) {
    return (
      <PageLayout>
        <div className="py-12 px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Challenge Not Found</h1>
          <p className="text-[#a0aec0] mb-8">This challenge doesn't exist yet.</p>
          <Link 
            href="/trivia-zone"
            className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full"
          >
            ← Back to Trivia Zone
          </Link>
        </div>
      </PageLayout>
    );
  }

  const currentQ = questions[currentQuestion];
  const gameTitle = gameParams ? `${gameParams.gameType.charAt(0).toUpperCase() + gameParams.gameType.slice(1)} ${gameParams.category.charAt(0).toUpperCase() + gameParams.category.slice(1)} Challenge ${gameParams.challengeId}` : 'Loading...';

  return (
    <PageLayout>
      <div className="py-8 px-4 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link 
            href="/trivia-zone"
            className="inline-block text-[#4cc9f0] hover:text-[#fbbf24] mb-4 transition-colors"
          >
            ← Back to Trivia Zone
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{gameTitle}</h1>
          <div className="flex justify-center gap-8 text-sm text-[#a0aec0]">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}</span>
            {gameState === 'playing' && <span>Time: {timeLeft}s</span>}
          </div>
        </div>

        {gameState === 'playing' && (
          <div className="bg-[#16213e] rounded-lg p-8 mb-6">
            {/* Progress Bar */}
            <div className="w-full bg-[#2d3748] rounded-full h-2 mb-6">
              <div 
                className="bg-[#4cc9f0] h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            {/* Timer Bar */}
            <div className="w-full bg-[#2d3748] rounded-full h-1 mb-8">
              <div 
                className={`h-1 rounded-full transition-all duration-1000 ${timeLeft > 3 ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${(timeLeft / (gameParams?.gameType === 'quickfire' ? 10 : 15)) * 100}%` }}
              ></div>
            </div>

            {/* Question */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 text-center">
              {currentQ?.question}
            </h2>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQ?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={`p-4 rounded-lg text-left transition-all duration-200 ${
                    showResult
                      ? option === currentQ.correctAnswer
                        ? 'bg-green-600 text-white'
                        : option === selectedAnswer
                        ? 'bg-red-600 text-white'
                        : 'bg-[#2d3748] text-[#a0aec0]'
                      : 'bg-[#2d3748] hover:bg-[#4cc9f0] text-white hover:text-[#0a0e1a] cursor-pointer'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Explanation */}
            {showResult && currentQ?.explanation && (
              <div className="mt-6 p-4 bg-[#0a0e1a] rounded-lg">
                <p className="text-[#a0aec0]">{currentQ.explanation}</p>
              </div>
            )}
          </div>
        )}

        {gameState === 'finished' && (
          <div className="bg-[#16213e] rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">🏆 Challenge Complete!</h2>
            <div className="text-6xl font-bold text-[#4cc9f0] mb-4">{score}</div>
            <p className="text-xl text-[#a0aec0] mb-2">Final Score</p>
            <p className="text-[#a0aec0] mb-8">
              You got {answers.filter(Boolean).length} out of {questions.length} questions correct!
            </p>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetGame}
                className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full"
              >
                🔄 Play Again
              </button>
              <Link
                href="/trivia-zone"
                className="bg-[#16213e] border border-[#4cc9f0] hover:bg-[#2d3748] text-[#4cc9f0] font-bold py-3 px-6 rounded-full"
              >
                🏒 More Challenges
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
