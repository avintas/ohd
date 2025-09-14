import { NextResponse } from 'next/server';
import { loadTriviaFile } from '@/lib/triviaLoader';

export async function GET() {
  const tests = [
    { gameType: 'quickfire', category: 'legends', challengeId: '1' },
    { gameType: 'truefalse', category: 'geography', challengeId: '1' },
    { gameType: 'quickfire', category: 'legends', challengeId: 'gretzky-basics' },
    { gameType: 'truefalse', category: 'hockey-geography', challengeId: 'hockey-geography-basics' }
  ];
  
  const results = tests.map(test => {
    const triviaSet = loadTriviaFile(test.gameType, test.category, test.challengeId);
    return {
      ...test,
      found: !!triviaSet,
      questionCount: triviaSet?.questions.length || 0,
      title: triviaSet?.metadata.title || 'Not found'
    };
  });
  
  return NextResponse.json(results);
}
