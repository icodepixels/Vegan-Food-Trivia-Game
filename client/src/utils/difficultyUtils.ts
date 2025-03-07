export const DIFFICULTY_ORDER = [
  'easy',
  'easy-medium',
  'medium',
  'medium-hard',
  'hard'
];

export const sortDifficultyLevels = (difficulties: string[]): string[] => {
  return difficulties.sort((a, b) => {
    const indexA = DIFFICULTY_ORDER.indexOf(a.toLowerCase());
    const indexB = DIFFICULTY_ORDER.indexOf(b.toLowerCase());
    return indexA - indexB;
  });
};

export const getDifficultyColor = (difficulty: string): string => {
  const lowerDifficulty = difficulty.toLowerCase();
  switch (lowerDifficulty) {
    case 'easy':
      return '#4caf50';  // Green
    case 'easy-medium':
      return '#8bc34a';  // Light Green
    case 'medium':
      return '#ff9800';  // Orange
    case 'medium-hard':
      return '#ff5722';  // Deep Orange
    case 'hard':
      return '#f44336';  // Red
    default:
      return '#2196f3';  // Blue (fallback)
  }
};