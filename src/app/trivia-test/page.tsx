"use client";

import { PageLayout } from '@/components';
import { useState } from 'react';
import Image from 'next/image';

interface TriviaQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  options: string[];
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  audioFile?: string;
  category: string;
}

interface QuestionSet {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: TriviaQuestion[];
}

const QUESTION_SETS: QuestionSet[] = [
  {
    id: "original-six",
    name: "Original Six Teams",
    description: "Test your knowledge of hockey&apos;s founding franchises",
    difficulty: "easy",
    questions: [
      {
        id: 1,
        question: "Which Original Six team is based in Montreal?",
        correctAnswer: "Montreal Canadiens",
        options: ["Montreal Canadiens", "Montreal Maroons", "Quebec Nordiques", "Montreal Wanderers"],
        explanation: "The Canadiens are the only remaining Montreal team from the Original Six era",
        difficulty: "easy",
        points: 1,
        category: "Original Six"
      },
      {
        id: 2,
        question: "What year was the Original Six era established?",
        correctAnswer: "1942",
        options: ["1917", "1926", "1942", "1967"],
        explanation: "From 1942-1967, the NHL consisted of only six teams",
        difficulty: "easy",
        points: 1,
        category: "Original Six"
      },
      {
        id: 3,
        question: "Which Original Six team plays at Madison Square Garden?",
        correctAnswer: "New York Rangers",
        options: ["Boston Bruins", "New York Rangers", "Detroit Red Wings", "Chicago Blackhawks"],
        difficulty: "easy",
        points: 1,
        category: "Original Six"
      },
      {
        id: 4,
        question: "What are the Toronto Maple Leafs&apos; team colors?",
        correctAnswer: "Blue and White",
        options: ["Red and White", "Blue and White", "Black and Gold", "Red and Black"],
        difficulty: "easy",
        points: 1,
        category: "Original Six"
      },
      {
        id: 5,
        question: "Which Original Six team has won the most Stanley Cups?",
        correctAnswer: "Montreal Canadiens",
        options: ["Toronto Maple Leafs", "Montreal Canadiens", "Detroit Red Wings", "Boston Bruins"],
        explanation: "The Canadiens have won 24 Stanley Cup championships",
        difficulty: "easy",
        points: 1,
        category: "Original Six"
      }
    ]
  },
  {
    id: "cup-legends",
    name: "Stanley Cup Legends",
    description: "Legendary moments from championship history",
    difficulty: "medium",
    questions: [
      {
        id: 6,
        question: "Who scored the famous &apos;Goal&apos; in 1972 for Team Canada?",
        correctAnswer: "Paul Henderson",
        options: ["Paul Henderson", "Phil Esposito", "Bobby Clarke", "Yvan Cournoyer"],
        explanation: "Henderson&apos;s goal with 34 seconds left won the Summit Series",
        difficulty: "medium",
        points: 2,
        category: "Cup Legends"
      },
      {
        id: 7,
        question: "Which team came back from a 3-0 series deficit to win the Stanley Cup?",
        correctAnswer: "No team has ever done this",
        options: ["Boston Bruins (2010)", "Los Angeles Kings (2014)", "No team has ever done this", "Pittsburgh Penguins (2009)"],
        explanation: "No team has ever come back from 3-0 down to win the Stanley Cup Final",
        difficulty: "medium",
        points: 2,
        category: "Cup Legends"
      },
      {
        id: 8,
        question: "What is the longest overtime game in Stanley Cup playoff history?",
        correctAnswer: "116 minutes, 30 seconds",
        options: ["92 minutes, 1 second", "104 minutes, 46 seconds", "116 minutes, 30 seconds", "128 minutes, 15 seconds"],
        explanation: "Detroit vs Montreal in 1936, ended in the 6th overtime period",
        difficulty: "medium",
        points: 2,
        category: "Cup Legends"
      },
      {
        id: 9,
        question: "Who is the youngest player to win the Conn Smythe Trophy?",
        correctAnswer: "Patrick Roy",
        options: ["Patrick Roy", "Mario Lemieux", "Wayne Gretzky", "Sidney Crosby"],
        explanation: "Roy won it at age 20 with Montreal in 1986",
        difficulty: "medium",
        points: 2,
        category: "Cup Legends"
      },
      {
        id: 10,
        question: "Which team won the first Stanley Cup after expansion in 1967?",
        correctAnswer: "Montreal Canadiens",
        options: ["Boston Bruins", "Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings"],
        difficulty: "medium",
        points: 2,
        category: "Cup Legends"
      }
    ]
  },
  {
    id: "modern-stars",
    name: "Modern NHL Stars",
    description: "Today&apos;s elite players and recent legends",
    difficulty: "medium",
    questions: [
      {
        id: 11,
        question: "Who holds the record for most goals in a single NHL season?",
        correctAnswer: "Wayne Gretzky",
        options: ["Wayne Gretzky", "Mario Lemieux", "Alexander Ovechkin", "Mike Bossy"],
        explanation: "Gretzky scored 92 goals in the 1981-82 season",
        difficulty: "medium",
        points: 2,
        category: "Modern Stars"
      },
      {
        id: 12,
        question: "Which active player has the most career hat tricks?",
        correctAnswer: "Alexander Ovechkin",
        options: ["Connor McDavid", "Alexander Ovechkin", "Sidney Crosby", "Leon Draisaitl"],
        difficulty: "medium",
        points: 2,
        category: "Modern Stars"
      },
      {
        id: 13,
        question: "What team did Connor McDavid get drafted to first overall?",
        correctAnswer: "Edmonton Oilers",
        options: ["Toronto Maple Leafs", "Edmonton Oilers", "Buffalo Sabres", "Arizona Coyotes"],
        difficulty: "medium",
        points: 2,
        category: "Modern Stars"
      },
      {
        id: 14,
        question: "Who was the first player to score 50 goals in 50 games since Mario Lemieux?",
        correctAnswer: "Alexander Ovechkin",
        options: ["Sidney Crosby", "Alexander Ovechkin", "Steven Stamkos", "Connor McDavid"],
        difficulty: "medium",
        points: 2,
        category: "Modern Stars"
      },
      {
        id: 15,
        question: "Which goalie has the most wins among active players?",
        correctAnswer: "Marc-Andre Fleury",
        options: ["Carey Price", "Marc-Andre Fleury", "Andrei Vasilevskiy", "Frederik Andersen"],
        difficulty: "medium",
        points: 2,
        category: "Modern Stars"
      }
    ]
  },
  {
    id: "rule-changes",
    name: "Rule Changes",
    description: "How hockey rules evolved over time",
    difficulty: "hard",
    questions: [
      {
        id: 16,
        question: "When was the forward pass first allowed in all three zones?",
        correctAnswer: "1929",
        options: ["1917", "1929", "1943", "1967"],
        explanation: "Before 1929, forward passes were restricted to certain zones",
        difficulty: "hard",
        points: 3,
        category: "Rule Changes"
      },
      {
        id: 17,
        question: "What year was the red line introduced for two-line passes?",
        correctAnswer: "1943",
        options: ["1929", "1943", "1956", "1972"],
        explanation: "The center red line was added to reduce two-line pass infractions",
        difficulty: "hard",
        points: 3,
        category: "Rule Changes"
      },
      {
        id: 18,
        question: "When was the trapezoid behind the net introduced for goalies?",
        correctAnswer: "2005",
        options: ["1999", "2005", "2010", "2014"],
        explanation: "Added after the 2004-05 lockout to limit goalie puck handling",
        difficulty: "hard",
        points: 3,
        category: "Rule Changes"
      },
      {
        id: 19,
        question: "What is the maximum length of a hockey stick according to NHL rules?",
        correctAnswer: "63 inches",
        options: ["60 inches", "63 inches", "66 inches", "69 inches"],
        difficulty: "hard",
        points: 3,
        category: "Rule Changes"
      },
      {
        id: 20,
        question: "When did the NHL eliminate the two-line pass rule?",
        correctAnswer: "2005",
        options: ["1999", "2005", "2010", "2014"],
        explanation: "Eliminated after the lockout to increase offensive play",
        difficulty: "hard",
        points: 3,
        category: "Rule Changes"
      }
    ]
  },
  {
    id: "equipment",
    name: "Equipment & Gear",
    description: "Hockey equipment through the ages",
    difficulty: "medium",
    questions: [
      {
        id: 21,
        question: "Who was the first NHL goalie to regularly wear a mask?",
        correctAnswer: "Jacques Plante",
        options: ["Terry Sawchuk", "Jacques Plante", "Glenn Hall", "Gump Worsley"],
        explanation: "Plante started wearing a mask regularly in 1959",
        difficulty: "medium",
        points: 2,
        category: "Equipment"
      },
      {
        id: 22,
        question: "What material were early hockey pucks made from?",
        correctAnswer: "Frozen rubber",
        options: ["Wood", "Frozen rubber", "Metal", "Leather"],
        difficulty: "medium",
        points: 2,
        category: "Equipment"
      },
      {
        id: 23,
        question: "When did helmets become mandatory in the NHL?",
        correctAnswer: "1979",
        options: ["1972", "1979", "1985", "1992"],
        explanation: "Mandatory for players entering the league after 1979",
        difficulty: "medium",
        points: 2,
        category: "Equipment"
      },
      {
        id: 24,
        question: "What is the standard width of a hockey goal?",
        correctAnswer: "6 feet",
        options: ["5 feet", "6 feet", "7 feet", "8 feet"],
        difficulty: "medium",
        points: 2,
        category: "Equipment"
      },
      {
        id: 25,
        question: "Who designed the first modern goalie mask with a cage?",
        correctAnswer: "Andy Brown",
        options: ["Jacques Plante", "Andy Brown", "Gerry Cheevers", "Ken Dryden"],
        difficulty: "medium",
        points: 2,
        category: "Equipment"
      }
    ]
  },
  {
    id: "overtime-heroes",
    name: "Overtime Heroes",
    description: "Clutch performers in crucial moments",
    difficulty: "hard",
    questions: [
      {
        id: 26,
        question: "Who scored the famous &apos;Golden Goal&apos; for Canada in 2010 Olympics?",
        correctAnswer: "Sidney Crosby",
        options: ["Sidney Crosby", "Jonathan Toews", "Corey Perry", "Ryan Getzlaf"],
        explanation: "Crosby scored in overtime against USA for Olympic gold",
        difficulty: "hard",
        points: 3,
        category: "Overtime Heroes"
      },
      {
        id: 27,
        question: "Which player has the most playoff overtime goals in NHL history?",
        correctAnswer: "Joe Sakic",
        options: ["Wayne Gretzky", "Joe Sakic", "Maurice Richard", "Patrick Kane"],
        explanation: "Sakic scored 8 playoff overtime goals in his career",
        difficulty: "hard",
        points: 3,
        category: "Overtime Heroes"
      },
      {
        id: 28,
        question: "Who scored the Cup-winning goal for Chicago in 2010?",
        correctAnswer: "Patrick Kane",
        options: ["Jonathan Toews", "Patrick Kane", "Marian Hossa", "Duncan Keith"],
        explanation: "Kane&apos;s goal in Game 6 ended Chicago&apos;s 49-year drought",
        difficulty: "hard",
        points: 3,
        category: "Overtime Heroes"
      },
      {
        id: 29,
        question: "What is the longest Stanley Cup Final overtime game?",
        correctAnswer: "116 minutes, 30 seconds",
        options: ["68 minutes, 47 seconds", "92 minutes, 1 second", "116 minutes, 30 seconds", "140 minutes, 15 seconds"],
        explanation: "Detroit vs Montreal in 1936, lasted into the 6th overtime",
        difficulty: "hard",
        points: 3,
        category: "Overtime Heroes"
      },
      {
        id: 30,
        question: "Who holds the record for most overtime goals in a single playoff year?",
        correctAnswer: "Mel Hill",
        options: ["Wayne Gretzky", "Mel Hill", "Maurice Richard", "Joe Sakic"],
        explanation: "Hill scored 3 OT goals for Boston in 1939 playoffs",
        difficulty: "hard",
        points: 3,
        category: "Overtime Heroes"
      }
    ]
  },
  {
    id: "arena-music",
    name: "Arena Music",
    description: "Iconic songs and sounds from hockey arenas",
    difficulty: "medium",
    questions: [
      {
        id: 31,
        question: "This traditional Russian folk song is played at hockey arenas worldwide. What is it called?",
        correctAnswer: "Kalinka",
        options: ["Kalinka", "Katyusha", "Moscow Nights", "Korobeiniki"],
        explanation: "Kalinka is a popular Russian folk song commonly played during hockey games to energize crowds",
        difficulty: "medium",
        points: 2,
        audioFile: "/audio/kalinka-sample.mp3",
        category: "Arena Music"
      },
      {
        id: 32,
        question: "This celebratory Jewish folk song is often played during hockey victories and celebrations. What is it?",
        correctAnswer: "Hava Nagila",
        options: ["Hava Nagila", "Shalom Aleichem", "Yerushalayim Shel Zahav", "Hinei Ma Tov"],
        explanation: "Hava Nagila meaning &apos;Let us rejoice&apos; is played at many hockey celebrations",
        difficulty: "medium",
        points: 2,
        audioFile: "/audio/hava-nagila-sample.mp3",
        category: "Arena Music"
      },
      {
        id: 33,
        question: "Which Queen song has become a stadium anthem played at hockey games worldwide?",
        correctAnswer: "We Will Rock You",
        options: ["We Are The Champions", "We Will Rock You", "Another One Bites The Dust", "Don&apos;t Stop Me Now"],
        explanation: "The stomp-stomp-clap rhythm makes it perfect for crowd participation",
        difficulty: "easy",
        points: 1,
        audioFile: "/audio/we-will-rock-you-sample.mp3",
        category: "Arena Music"
      },
      {
        id: 34,
        question: "This country song with the famous line &apos;Where did you come from, where did you go?&apos; is a hockey arena favorite. What is it?",
        correctAnswer: "Cotton-Eyed Joe",
        options: ["Cotton-Eyed Joe", "Friends in Low Places", "Sweet Caroline", "Country Roads"],
        explanation: "Cotton-Eyed Joe by Rednex is played during intermissions and breaks at many arenas",
        difficulty: "easy",
        points: 1,
        audioFile: "/audio/cotton-eyed-joe-sample.mp3",
        category: "Arena Music"
      },
      {
        id: 35,
        question: "This electronic dance track by Zombie Nation became a hockey arena staple in the 2000s. What is it called?",
        correctAnswer: "Kernkraft 400",
        options: ["Kernkraft 400", "Sandstorm", "Better Off Alone", "Rhythm Is A Dancer"],
        explanation: "Kernkraft 400 (Sport Chant Stadium Remix) became synonymous with hockey pump-up music",
        difficulty: "hard",
        points: 3,
        audioFile: "/audio/kernkraft-400-sample.mp3",
        category: "Arena Music"
      }
    ]
  },
  {
    id: "arena-sounds",
    name: "Arena Sounds & Sirens",
    description: "Goal horns, crowd chants, and iconic hockey audio",
    difficulty: "medium",
    questions: [
      {
        id: 36,
        question: "Which NHL team&apos;s goal horn is this?",
        correctAnswer: "Chicago Blackhawks",
        options: ["Chicago Blackhawks", "Boston Bruins", "Toronto Maple Leafs", "Montreal Canadiens"],
        explanation: "The Blackhawks use a classic air horn followed by &apos;Chelsea Dagger&apos; by The Fratellis",
        difficulty: "medium",
        points: 2,
        audioFile: "/audio/blackhawks-goal-horn.mp3",
        category: "Arena Sounds"
      },
      {
        id: 37,
        question: "This distinctive foghorn belongs to which team?",
        correctAnswer: "San Jose Sharks",
        options: ["San Jose Sharks", "Seattle Kraken", "Vancouver Canucks", "Anaheim Ducks"],
        explanation: "The Sharks&apos; foghorn is one of the most recognizable goal celebrations in the NHL",
        difficulty: "medium",
        points: 2,
        audioFile: "/audio/sharks-foghorn.mp3",
        category: "Arena Sounds"
      },
      {
        id: 38,
        question: "What crowd chant is this from a hockey game?",
        correctAnswer: "Let&apos;s Go Rangers",
        options: ["Let&apos;s Go Rangers", "Go Leafs Go", "Here We Go Oilers", "Let&apos;s Go Blues"],
        explanation: "The classic three-clap rhythm chant from Madison Square Garden",
        difficulty: "easy",
        points: 1,
        audioFile: "/audio/lets-go-rangers-chant.mp3",
        category: "Arena Sounds"
      },
      {
        id: 39,
        question: "This is the sound of what hockey action?",
        correctAnswer: "Puck hitting the post",
        options: ["Puck hitting the post", "Slap shot", "Body check into boards", "Skates stopping"],
        explanation: "The distinctive &apos;ping&apos; sound when a shot hits the goal post",
        difficulty: "easy",
        points: 1,
        audioFile: "/audio/puck-hits-post.mp3",
        category: "Arena Sounds"
      },
      {
        id: 40,
        question: "Which team&apos;s victory song is this?",
        correctAnswer: "Boston Bruins",
        options: ["Boston Bruins", "Philadelphia Flyers", "Pittsburgh Penguins", "New York Rangers"],
        explanation: "&apos;Dirty Water&apos; by The Standells has been the Bruins&apos; victory song since the 1970s",
        difficulty: "hard",
        points: 3,
        audioFile: "/audio/dirty-water-bruins.mp3",
        category: "Arena Sounds"
      }
    ]
  }
];

interface TriviaCardProps {
  question: TriviaQuestion;
  onAnswer: (points: number, isCorrect: boolean, userAnswer: string) => void;
  isDisabled: boolean;
}

function TriviaCard({ question, onAnswer, isDisabled }: TriviaCardProps) {
  const [cardState, setCardState] = useState<'back' | 'question' | 'answering' | 'result'>('back');
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  
  const handleCardClick = () => {
    if (isDisabled || cardState !== 'back') return;
    setCardState('question');
  };

  const handleAnswerSelect = (answer: string) => {
    if (cardState !== 'question') return;
    setSelectedAnswer(answer);
    setCardState('answering');
  };

  const handleSubmitAnswer = () => {
    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setCardState('result');
    onAnswer(correct ? question.points : 0, correct, selectedAnswer);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'border-green-500';
      case 'medium': return 'border-yellow-500';
      case 'hard': return 'border-red-500';
      default: return 'border-[#4cc9f0]';
    }
  };

  return (
    <div 
      className={`w-70 h-100 cursor-pointer transition-transform hover:scale-105 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleCardClick}
      style={{ width: '280px', height: '400px' }}
    >
      <div className="relative w-full h-full">
        {/* Card Back */}
        {cardState === 'back' && (
          <div className="absolute inset-0 bg-[#16213e] border-2 border-[#4cc9f0] rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#4cc9f0] mb-2">OH</div>
              <div className="text-sm text-[#a0aec0]">OnlyHockey</div>
              <div className="text-xs text-[#718096] mt-2">Trivia Card</div>
            </div>
          </div>
        )}
        
        {/* Question Side */}
        {cardState === 'question' && (
          <div className={`absolute inset-0 bg-[#0a0e1a] border-2 ${getDifficultyColor(question.difficulty)} rounded-lg p-4 flex flex-col`}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-[#16213e] px-2 py-1 rounded text-[#a0aec0]">
                {question.audioFile ? '🎵 Audio Quiz' : 'Trivia'}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${
                question.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                question.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {question.difficulty.toUpperCase()} • {question.points}pt
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-white text-base text-center leading-relaxed mb-4">
                {question.question}
              </p>
              
              {/* Audio Player */}
              {question.audioFile && (
                <div className="bg-[#16213e] rounded-lg p-4 mb-4 border border-[#2d3748]">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-[#4cc9f0] text-sm font-semibold">🎧 Listen to the audio clip:</span>
                  </div>
                  <audio 
                    controls 
                    className="w-full"
                    style={{
                      filter: 'invert(1) hue-rotate(180deg)',
                      borderRadius: '8px'
                    }}
                  >
                    <source src={question.audioFile} type="audio/mpeg" />
                    <source src={question.audioFile.replace('.mp3', '.ogg')} type="audio/ogg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="text-xs text-[#a0aec0] text-center mt-2">
                    💡 You can replay the audio as many times as needed
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-2">
              {question.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className="bg-[#16213e] hover:bg-[#2d3748] border border-[#2d3748] hover:border-[#4cc9f0] rounded-lg p-3 text-white text-sm transition-all duration-200 text-left"
                >
                  <span className="font-semibold text-[#4cc9f0] mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              )) || (
                <div className="text-red-400 text-center">No options available</div>
              )}
            </div>
          </div>
        )}

        {/* Answer Confirmation Side */}
        {cardState === 'answering' && (
          <div className={`absolute inset-0 bg-[#0a0e1a] border-2 ${getDifficultyColor(question.difficulty)} rounded-lg p-6 flex flex-col`}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-[#16213e] px-2 py-1 rounded text-[#a0aec0]">{question.category}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                question.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                question.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {question.difficulty.toUpperCase()} • {question.points}pt
              </span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <p className="text-white text-sm mb-4">{question.question}</p>
              <div className="bg-[#16213e] border border-[#4cc9f0] rounded-lg p-4 mb-6">
                <p className="text-[#4cc9f0] font-semibold">Your Answer:</p>
                <p className="text-white text-lg">{selectedAnswer}</p>
              </div>
              <button
                onClick={handleSubmitAnswer}
                className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-2 px-6 rounded-full transition-all duration-200"
              >
                Submit Answer
              </button>
            </div>
          </div>
        )}
        
        {/* Result Side */}
        {cardState === 'result' && (
          <div className={`absolute inset-0 bg-[#0a0e1a] border-2 ${isCorrect ? 'border-green-500' : 'border-red-500'} rounded-lg p-6 flex flex-col`}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs bg-[#16213e] px-2 py-1 rounded text-[#a0aec0]">{question.category}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {isCorrect ? `+${question.points} POINTS!` : '+0 POINTS'}
              </span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className={`text-4xl mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? '✓' : '✗'}
              </div>
              <p className={`text-lg font-semibold mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'CORRECT!' : 'INCORRECT'}
              </p>
              
              <div className="bg-[#16213e] rounded-lg p-4 mb-4 w-full">
                <p className="text-[#4cc9f0] text-sm font-semibold mb-2">Correct Answer:</p>
                <p className="text-white text-base">{question.correctAnswer}</p>
                {question.explanation && (
                  <p className="text-[#a0aec0] text-sm mt-2">{question.explanation}</p>
                )}
              </div>
              
              <div className="bg-[#16213e] rounded-lg p-4 w-full">
                <p className="text-[#a0aec0] text-sm">Your Answer:</p>
                <p className={`text-base ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {selectedAnswer}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TriviaTestPage() {
  const [gameState, setGameState] = useState<'selection' | 'playing' | 'finished'>('selection');
  const [selectedSet, setSelectedSet] = useState<QuestionSet | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{question: TriviaQuestion, isCorrect: boolean, userAnswer: string}[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const selectRandomSet = () => {
    const randomSet = QUESTION_SETS[Math.floor(Math.random() * QUESTION_SETS.length)];
    startGame(randomSet);
  };

  const nextCarouselCard = () => {
    setCarouselIndex((prev) => (prev + 1) % QUESTION_SETS.length);
  };

  const prevCarouselCard = () => {
    setCarouselIndex((prev) => (prev - 1 + QUESTION_SETS.length) % QUESTION_SETS.length);
  };

  const goToCarouselCard = (index: number) => {
    setCarouselIndex(index);
  };

  const startGame = (questionSet: QuestionSet) => {
    setSelectedSet(questionSet);
    setGameState('playing');
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (points: number, isCorrect: boolean, userAnswer: string) => {
    if (!selectedSet) return;
    
    const currentQuestion = selectedSet.questions[currentQuestionIndex];
    setScore(prev => prev + points);
    setAnswers(prev => [...prev, { question: currentQuestion, isCorrect, userAnswer }]);
    
    // Move to next question or finish
    if (currentQuestionIndex < selectedSet.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('finished');
    }
  };

  const resetGame = () => {
    setGameState('selection');
    setSelectedSet(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'border-green-500 bg-green-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      case 'hard': return 'border-red-500 bg-red-500/10';
      default: return 'border-[#4cc9f0] bg-[#4cc9f0]/10';
    }
  };

  const handleShare = async (type: string, questionSet: QuestionSet, userScore?: number, maxScore?: number) => {
    let shareText = '';
    
    switch (type) {
      case 'challenge':
        shareText = `🏒 Hockey Trivia Challenge!\n\nTry the "${questionSet.name}" question set on Onlyhockey.com!\n\n${questionSet.description}\n\nDifficulty: ${questionSet.difficulty.toUpperCase()}\n5 Questions • Test your hockey knowledge!`;
        break;
      case 'results':
        const percentage = Math.round(((userScore || 0) / (maxScore || 1)) * 100);
        shareText = `🏒 Just completed "${questionSet.name}" on Onlyhockey.com!\n\nMy Score: ${userScore}/${maxScore} points (${percentage}%)\n\n${percentage >= 80 ? '🏆 Nailed it!' : percentage >= 60 ? '⭐ Not bad!' : '🏒 Room for improvement!'}\n\nTry it yourself!`;
        break;
      case 'invite':
        shareText = `🏒 Think you know hockey?\n\nChallenge: "${questionSet.name}"\n${questionSet.description}\n\nCan you beat my knowledge? Try it on Onlyhockey.com!`;
        break;
      case 'brag':
        shareText = `🏆 PERFECT SCORE! Just aced "${questionSet.name}" on Onlyhockey.com!\n\n${maxScore}/${maxScore} points - I know my hockey! 🏒\n\nThink you can match this? Give it a try!`;
        break;
      case 'simple':
        shareText = `Check out this hockey trivia: "${questionSet.name}" on Onlyhockey.com\n\n${questionSet.description}`;
        break;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hockey Trivia: ${questionSet.name}`,
          text: shareText
        });
      } catch (error) {
        console.log('Share cancelled or failed');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Challenge copied to clipboard!');
      } catch (error) {
        prompt('Copy this text:', shareText);
      }
    }
  };

  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with Samantha */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative mr-4">
                <Image
                  src="/pims/pim-1008.webp"
                  alt="Samantha - Trivia Master"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-3 border-[#4cc9f0]"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Hockey Trivia Sets
                </h1>
                <p className="text-sm text-[#4cc9f0] font-semibold">with Samantha, your Trivia Master</p>
              </div>
            </div>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              {gameState === 'selection' ? 'Choose a themed question set or get a random surprise!' :
               gameState === 'playing' ? `${selectedSet?.name} - Question ${currentQuestionIndex + 1} of 5` :
               'Quiz Complete!'}
            </p>
          </div>

          {/* Selection Screen */}
          {gameState === 'selection' && (
            <div className="text-center">
              {/* Random Button */}
              <div className="mb-12">
                <button
                  onClick={selectRandomSet}
                  className="bg-gradient-to-r from-[#4cc9f0] to-[#3bb5e0] hover:from-[#3bb5e0] hover:to-[#2aa3d0] text-[#0a0e1a] font-bold py-6 px-12 rounded-full text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  🎲 Surprise Me!
                </button>
              </div>

              {/* Carousel Container */}
              <div className="relative max-w-md mx-auto">
                {/* Navigation Arrows */}
                <button
                  onClick={prevCarouselCard}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#16213e] hover:bg-[#2d3748] border border-[#4cc9f0] text-[#4cc9f0] hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Previous set"
                >
                  ←
                </button>
                <button
                  onClick={nextCarouselCard}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#16213e] hover:bg-[#2d3748] border border-[#4cc9f0] text-[#4cc9f0] hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Next set"
                >
                  →
                </button>

                {/* Carousel Card */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                  >
                    {QUESTION_SETS.map((set, index) => (
                      <div
                        key={set.id}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div
                          onClick={() => startGame(set)}
                          className={`cursor-pointer transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${getDifficultyColor(set.difficulty)} border-2 rounded-lg p-8 mx-auto max-w-sm`}
                        >
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <h3 className="text-2xl font-bold text-white">{set.name}</h3>
                              {set.questions.some(q => q.audioFile) && (
                                <span className="ml-2 text-lg" title="Contains audio questions">🎵</span>
                              )}
                            </div>
                            <p className="text-[#a0aec0] mb-6 leading-relaxed">{set.description}</p>
                            <div className="flex justify-between items-center">
                              <span className={`text-sm px-4 py-2 rounded-full font-semibold ${
                                set.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                                set.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {set.difficulty.toUpperCase()}
                              </span>
                              <span className="text-[#4cc9f0] font-bold">5 Questions</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#2d3748]">
                              <div className="flex justify-between items-center">
                                <span className="text-[#4cc9f0] text-sm font-semibold">Click to Start →</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShare('challenge', set);
                                  }}
                                  className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors text-lg"
                                  title="Share this trivia set"
                                >
                                  📤
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {QUESTION_SETS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToCarouselCard(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === carouselIndex 
                          ? 'bg-[#4cc9f0] scale-125' 
                          : 'bg-[#2d3748] hover:bg-[#4cc9f0]/50'
                      }`}
                      aria-label={`Go to set ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Score Display */}
          {gameState === 'playing' && selectedSet && (
            <div className="text-center mb-8">
              <div className="inline-block bg-[#16213e] border border-[#2d3748] rounded-lg px-6 py-3">
                <span className="text-[#4cc9f0] font-semibold text-xl">Score: {score} points</span>
                <span className="text-[#a0aec0] ml-4 text-sm">
                  Max: {selectedSet.questions.reduce((sum, q) => sum + q.points, 0)} points
                </span>
              </div>
            </div>
          )}

          {/* Single Card Display */}
          {gameState === 'playing' && selectedSet && (
            <div className="flex justify-center">
              <TriviaCard
                key={`${selectedSet.id}-${currentQuestionIndex}`}
                question={selectedSet.questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                isDisabled={false}
              />
            </div>
          )}

          {/* Results Screen */}
          {gameState === 'finished' && selectedSet && (
            <div className="text-center">
              <div className="bg-[#16213e] border border-[#2d3748] rounded-lg p-8 mb-6 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedSet.name} Complete!</h2>
                <p className="text-xl text-[#4cc9f0] mb-4">
                  Final Score: {score} / {selectedSet.questions.reduce((sum, q) => sum + q.points, 0)} points
                </p>
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <Image
                      src="/pims/pim-1008.webp"
                      alt="Samantha"
                      width={40}
                      height={40}
                      className="w-8 h-8 rounded-full border-2 border-[#4cc9f0] mr-3"
                    />
                    <span className="text-[#4cc9f0] font-semibold">Samantha says:</span>
                  </div>
                  <p className="text-[#a0aec0] text-center italic">
                    &quot;{score === selectedSet.questions.reduce((sum, q) => sum + q.points, 0) ? "Perfect score! You're a true hockey legend! I'm impressed by your knowledge." :
                     score >= selectedSet.questions.reduce((sum, q) => sum + q.points, 0) * 0.8 ? "Excellent work! Your hockey knowledge is really strong. Keep it up!" :
                     score >= selectedSet.questions.reduce((sum, q) => sum + q.points, 0) * 0.6 ? "Good job! You know your hockey well. A little more studying and you'll be a master!" :
                     "Don't worry, everyone starts somewhere! Keep learning and you'll improve quickly. Hockey knowledge takes time to build!"}&quot;
                  </p>
                </div>
                
                {/* Share Results */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3 text-center">Share Your Results:</h3>
                  <div className="flex justify-center space-x-3 mb-4">
                    <button
                      onClick={() => handleShare('results', selectedSet, score, selectedSet.questions.reduce((sum, q) => sum + q.points, 0))}
                      className="text-lg hover:scale-110 transition-transform bg-[#16213e] hover:bg-[#2d3748] p-2 rounded-full border border-[#4cc9f0]"
                      title="Share Results"
                    >
                      📊
                    </button>
                    <button
                      onClick={() => handleShare('invite', selectedSet)}
                      className="text-lg hover:scale-110 transition-transform bg-[#16213e] hover:bg-[#2d3748] p-2 rounded-full border border-[#4cc9f0]"
                      title="Challenge Friends"
                    >
                      🎯
                    </button>
                    {score === selectedSet.questions.reduce((sum, q) => sum + q.points, 0) && (
                      <button
                        onClick={() => handleShare('brag', selectedSet, score, selectedSet.questions.reduce((sum, q) => sum + q.points, 0))}
                        className="text-lg hover:scale-110 transition-transform bg-gradient-to-r from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30 p-2 rounded-full border border-yellow-400"
                        title="Brag About Perfect Score"
                      >
                        🏆
                      </button>
                    )}
                    <button
                      onClick={() => handleShare('simple', selectedSet)}
                      className="text-lg hover:scale-110 transition-transform bg-[#16213e] hover:bg-[#2d3748] p-2 rounded-full border border-[#4cc9f0]"
                      title="Simple Share"
                    >
                      📤
                    </button>
                  </div>
                </div>

                {/* Results Summary */}
                <div className="text-left bg-[#0a0e1a] rounded-lg p-4 mb-6">
                  <h3 className="text-white font-semibold mb-3">Results Summary:</h3>
                  {answers.map((answer, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-[#2d3748] last:border-b-0">
                      <span className="text-[#a0aec0] text-sm">Q{index + 1}</span>
                      <span className={`text-sm ${answer.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {answer.isCorrect ? '✓' : '✗'} {answer.isCorrect ? answer.question.points : 0}pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetGame}
                  className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105"
                >
                  🏒 Try Another Set
                </button>
                <button
                  onClick={() => startGame(selectedSet)}
                  className="bg-[#16213e] hover:bg-[#2d3748] border border-[#4cc9f0] text-[#4cc9f0] hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-200"
                >
                  🔄 Retry This Set
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
