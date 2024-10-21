type GameSettings = {
  boardSize: number;
  mineCount: number;
  buttonText: string;
};

// gameSettinsg arrayObject, add to the array the boardSize, mineCount and buttonText if you want to add a new difficulty
export const gameSettings: GameSettings[] = [
  { boardSize: 4, mineCount: 1, buttonText: 'Easy' },
  { boardSize: 16, mineCount: 3, buttonText: 'Medium' },
  { boardSize: 25, mineCount: 5, buttonText: 'Hard' },
  { boardSize: 49, mineCount: 10, buttonText: 'Extreme' },
  { boardSize: 64, mineCount: 15, buttonText: 'Extreme++' },
  { boardSize: 100, mineCount: 25, buttonText: 'Insane' },
  { boardSize: 144, mineCount: 36, buttonText: 'Insane++' },
  { boardSize: 196, mineCount: 49, buttonText: 'Impossible' },
  { boardSize: 256, mineCount: 255, buttonText: 'Not worth it' },
];
