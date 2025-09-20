import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface DailyTriviaQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface DailyTriviaData {
  title: string;
  category: string;
  date: string;
  difficulty: string;
  totalQuestions: number;
  questions: DailyTriviaQuestion[];
}

export function getTodaysDailyTrivia(): DailyTriviaData | null {
  try {
    // Get today's date in the format used by files (e.g., "september-14-2024")
    const today = new Date();
    const monthName = today.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
    const day = today.getDate();
    const year = today.getFullYear();
    const dateString = `${monthName}-${day}-${year}`;
    
    const triviaDirectory = path.join(process.cwd(), 'content_trivia', 'daily-quiz');
    const filePath = path.join(triviaDirectory, `${dateString}.md`);
    
    // If today's file doesn't exist, try to get the most recent file
    let fileToRead = filePath;
    if (!fs.existsSync(filePath)) {
      const files = fs.readdirSync(triviaDirectory)
        .filter(file => file.endsWith('.md'))
        .sort()
        .reverse(); // Get most recent first
      
      if (files.length === 0) return null;
      fileToRead = path.join(triviaDirectory, files[0]);
    }
    
    const fileContents = fs.readFileSync(fileToRead, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Parse the markdown content to extract questions
    const questions = parseQuestionsFromMarkdown(content);
    
    return {
      title: data.title || 'Daily Trivia',
      category: data.category || 'mixed',
      date: data.date || dateString,
      difficulty: data.difficulty || 'mixed',
      totalQuestions: questions.length,
      questions
    };
    
  } catch (error) {
    console.error('Error loading daily trivia:', error);
    return null;
  }
}

function parseQuestionsFromMarkdown(content: string): DailyTriviaQuestion[] {
  const questions: DailyTriviaQuestion[] = [];
  
  // Split content by question sections
  const sections = content.split(/## Question \d+/);
  
  // Skip the first section (before first question)
  for (let i = 1; i < sections.length; i++) {
    const section = sections[i].trim();
    const lines = section.split('\n').filter(line => line.trim());
    
    let question = '';
    const options: string[] = [];
    let answer = '';
    let explanation = '';
    
    let currentSection = 'question';
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('**Question:**')) {
        question = trimmedLine.replace('**Question:**', '').trim();
        currentSection = 'options';
      } else if (trimmedLine.startsWith('**Options:**')) {
        currentSection = 'options';
      } else if (trimmedLine.startsWith('**Answer:**')) {
        answer = trimmedLine.replace('**Answer:**', '').trim();
        currentSection = 'explanation';
      } else if (trimmedLine.startsWith('**Explanation:**')) {
        explanation = trimmedLine.replace('**Explanation:**', '').trim();
      } else if (currentSection === 'options' && trimmedLine.startsWith('-')) {
        options.push(trimmedLine.replace('-', '').trim());
      } else if (currentSection === 'explanation' && trimmedLine && !trimmedLine.startsWith('---')) {
        explanation += ' ' + trimmedLine;
      }
    }
    
    if (question && options.length > 0 && answer) {
      questions.push({
        id: i,
        question,
        options,
        answer,
        explanation: explanation.trim()
      });
    }
  }
  
  return questions;
}
