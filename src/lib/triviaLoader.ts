import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  points: number;
}

export interface TriviaMetadata {
  title: string;
  category: string;
  gameType: string;
  difficulty: string;
  timeLimit: number;
  pointsPerQuestion: number;
  totalQuestions: number;
  date?: string;
}

export interface TriviaSet {
  metadata: TriviaMetadata;
  questions: TriviaQuestion[];
}

// Parse markdown content into structured trivia data
function parseMarkdownTrivia(content: string, metadata: TriviaMetadata): TriviaQuestion[] {
  const questions: TriviaQuestion[] = [];
  
  // Split content by question headers (## Question X)
  const questionSections = content.split(/## Question \d+/).filter(section => section.trim());
  
  questionSections.forEach((section, index) => {
    const lines = section.trim().split('\n').filter(line => line.trim());
    if (lines.length === 0) return;
    
    let question = '';
    let options: string[] = [];
    let correctAnswer = '';
    let explanation = '';
    
    let currentMode: 'question' | 'options' | 'answer' | 'explanation' | 'statement' | 'events' | 'order' = 'question';
    
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
      } else if (trimmedLine.startsWith('**Events:**')) {
        currentMode = 'events';
      } else if (trimmedLine.startsWith('**Correct Order:**')) {
        currentMode = 'order';
        correctAnswer = trimmedLine.replace('**Correct Order:**', '').trim();
      } else if (currentMode === 'question' && !trimmedLine.startsWith('**')) {
        question += ' ' + trimmedLine;
      } else if (currentMode === 'statement' && !trimmedLine.startsWith('**')) {
        question += ' ' + trimmedLine;
      } else if (currentMode === 'options' && trimmedLine.startsWith('- ')) {
        options.push(trimmedLine.substring(2));
      } else if (currentMode === 'events' && trimmedLine.match(/^- [A-Z]\)/)) {
        options.push(trimmedLine.substring(2));
      } else if (currentMode === 'explanation' && !trimmedLine.startsWith('**') && !trimmedLine.startsWith('---')) {
        explanation += ' ' + trimmedLine;
      }
    }
    
    // For true/false questions, set default options
    if (metadata.gameType === 'truefalse' && options.length === 0) {
      options = ['True', 'False'];
    }
    
    // For fill-in-the-blank, create options from the answer
    if (metadata.gameType === 'fillblanks' && options.length === 0) {
      // Create some plausible wrong options (this could be improved)
      options = [correctAnswer, 'Smith', 'Johnson', 'Brown'].slice(0, 4);
    }
    
    if (question && correctAnswer) {
      questions.push({
        id: index + 1,
        question: question.trim(),
        options,
        correctAnswer: correctAnswer.trim(),
        explanation: explanation.trim(),
        points: metadata.pointsPerQuestion
      });
    }
  });
  
  return questions;
}

// Load a specific trivia file
export function loadTriviaFile(gameType: string, category: string, challengeId: string): TriviaSet | null {
  try {
    const contentDir = path.join(process.cwd(), 'content_trivia');
    
    // Map gameType to directory names
    const gameTypeMap: Record<string, string> = {
      'quickfire': 'quick-fire',
      'truefalse': 'true-false',
      'fillblanks': 'fill-blanks',
      'picturequiz': 'picture-quiz',
      'timeline': 'timeline-challenge',
      'daily': 'daily-quiz'
    };
    
    // Map category to potential directory names
    const categoryMap: Record<string, string> = {
      'legends': 'hockey-legends',
      'originalsix': 'original-six',
      'geography': 'hockey-geography',
      'goalies': 'goalie-masters',
      'stanleycup': 'stanly-cup',
      'media': 'radio-video'
    };
    
    const dirName = gameTypeMap[gameType] || gameType;
    const categoryDir = categoryMap[category] || category;
    
    // Try different file naming patterns
    const possibleFiles = [
      `${challengeId}.md`,
      `${category}-${challengeId}.md`,
      `${category}-basics.md`,
      `${gameType}-${category}.md`
    ];
    
    let filePath = '';
    let fileFound = false;
    
    // First try the mapped directory structure
    for (const fileName of possibleFiles) {
      const testPath = path.join(contentDir, dirName, fileName);
      if (fs.existsSync(testPath)) {
        filePath = testPath;
        fileFound = true;
        break;
      }
    }
    
    // If not found, try category-based directories
    if (!fileFound) {
      for (const fileName of possibleFiles) {
        const testPath = path.join(contentDir, categoryDir, fileName);
        if (fs.existsSync(testPath)) {
          filePath = testPath;
          fileFound = true;
          break;
        }
      }
    }
    
    // If still not found, scan all directories for matching files
    if (!fileFound) {
      const allDirs = fs.readdirSync(contentDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      for (const dir of allDirs) {
        for (const fileName of possibleFiles) {
          const testPath = path.join(contentDir, dir, fileName);
          if (fs.existsSync(testPath)) {
            filePath = testPath;
            fileFound = true;
            break;
          }
        }
        if (fileFound) break;
      }
    }
    
    if (!fileFound) {
      console.log(`Trivia file not found for: ${gameType}/${category}/${challengeId}`);
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: metadata, content } = matter(fileContent);
    
    const questions = parseMarkdownTrivia(content, metadata as TriviaMetadata);
    
    return {
      metadata: metadata as TriviaMetadata,
      questions
    };
  } catch (error) {
    console.error('Error loading trivia file:', error);
    return null;
  }
}

// Load all available trivia sets (for development/debugging)
export function loadAllTriviaFiles(): Record<string, Record<string, Record<string, TriviaSet>>> {
  const contentDir = path.join(process.cwd(), 'content_trivia');
  const allSets: Record<string, Record<string, Record<string, TriviaSet>>> = {};
  
  try {
    const categories = fs.readdirSync(contentDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    for (const category of categories) {
      const categoryPath = path.join(contentDir, category);
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'));
      
      for (const file of files) {
        const filePath = path.join(categoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data: metadata, content } = matter(fileContent);
        
        const questions = parseMarkdownTrivia(content, metadata as TriviaMetadata);
        const triviaSet = {
          metadata: metadata as TriviaMetadata,
          questions
        };
        
        const gameType = metadata.gameType || 'quickfire';
        const cat = metadata.category || 'general';
        const challengeId = file.replace('.md', '');
        
        if (!allSets[gameType]) allSets[gameType] = {};
        if (!allSets[gameType][cat]) allSets[gameType][cat] = {};
        allSets[gameType][cat][challengeId] = triviaSet;
      }
    }
  } catch (error) {
    console.error('Error loading all trivia files:', error);
  }
  
  return allSets;
}
