import Level, { levels } from '../models/LevelModel';
import { updateBlocks } from '../app/app.module';

let currentLevelIndex: number;

export default function fromLocalStorage(): void {
  const storedLevelIndex = localStorage.getItem('currentLevelIndex');

  window.addEventListener('DOMContentLoaded', () => {
    if (storedLevelIndex !== null) {
      currentLevelIndex = parseInt(storedLevelIndex, 10);

      const currentLevel = levels[currentLevelIndex];

      updateBlocks(currentLevel);
    }

    const storedLevelsData = localStorage.getItem('levelsData');

    if (storedLevelsData !== null) {
      const parsedLevelsData: Level[] = JSON.parse(storedLevelsData);

      parsedLevelsData.forEach((levelData: Level, index: number): void => {
        levels[index].completed = levelData.completed;
        levels[index].hintUsed = levelData.hintUsed;

        const levelElement = document.querySelector(`.level:nth-child(${index + 1})`);

        if (levelElement) {
          if (levelData.completed) {
            levelElement.classList.add('completed');
          }

          if (levelData.hintUsed) {
            levelElement.classList.add('hint-used');
          }
        }
      });
    }
  });
}
