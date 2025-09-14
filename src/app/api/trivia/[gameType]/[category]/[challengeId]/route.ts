import { NextRequest, NextResponse } from 'next/server';
import { loadTriviaFile } from '@/lib/triviaLoader';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ gameType: string; category: string; challengeId: string }> }
) {
  try {
    const { gameType, category, challengeId } = await params;
    
    const triviaSet = loadTriviaFile(gameType, category, challengeId);
    
    if (!triviaSet) {
      return NextResponse.json(
        { error: 'Trivia set not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(triviaSet);
  } catch (error) {
    console.error('Error loading trivia:', error);
    return NextResponse.json(
      { error: 'Failed to load trivia' },
      { status: 500 }
    );
  }
}
