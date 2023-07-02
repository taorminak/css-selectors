import Level, { levels } from '../models/LevelModel';
import { updateBlocks } from '../app/app.module';

let currentLevelIndex: number;

export default function fromLocalStorage(): void {
  const storedLevelIndex = localStorage.getItem('currentLevelIndex');

  window.addEventListener('DOMContentLoaded', () => {
    if (storedLevelIndex !== null) {
      currentLevelIndex = parseInt(storedLevelIndex, 10);

      const currentLevel = levels[currentLevelIndex];

      updateBlocks(currentLevel, currentLevelIndex);
    }

    const storedLevelsData = localStorage.getItem('levelsData');

    if (storedLevelsData !== null) {
      const parsedLevelsData: Level[] = JSON.parse(storedLevelsData);

      parsedLevelsData.forEach((level: Level, index: number): void => {

        const levelElement = document.querySelector(`.level:nth-child(${index + 1})`);

        console.log(level);

        if (levelElement) {
          if (level.completed) {
            levelElement.classList.add('completed');
          }

          if (level.hintUsed) {
            levelElement.classList.add('hint-used');
          }
        }
      });
    }
  });
}
