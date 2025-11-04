import publishedGames from '../../../content_trivia/published-games.json';
import { getTodaysDailyTrivia } from '@/lib/dailyTriviaLoader';
import TriviaZoneClient from './TriviaZoneClient';

export default function TriviaZonePage() {
  const games = publishedGames.publishedGames;
  const featuredGames = games.filter((game) => game.featured);
  const regularGames = games.filter((game) => !game.featured);
  const dailyTrivia = getTodaysDailyTrivia();

  // Game type emojis mapping
  const gameTypeEmojis: { [key: string]: string } = {
    'quick-fire': '⚡',
    'true-false': '✓',
    'picture-quiz': '📸',
    'daily-quiz': '🏆',
    'goalie-masters': '🥅',
    'hockey-legends': '👑',
    'hockey-geography': '🌍',
    'original-six': '🏛️',
    'radio-video': '📻',
    'stanly-cup': '🏆',
  };

  return (
    <TriviaZoneClient
      featuredGames={featuredGames}
      regularGames={regularGames}
      gameTypeEmojis={gameTypeEmojis}
      dailyTrivia={dailyTrivia}
    />
  );
}
