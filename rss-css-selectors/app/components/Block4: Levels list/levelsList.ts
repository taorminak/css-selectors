import './levels.css';
import Level, { levels as levelsData } from '../../../models/LevelModel';
import { updateBlock1, updateBlock3 } from '../../app.module';
import { resetButton, handleResetButtonClick } from '../resetButton/reset';

export default class LevelsList {
  private blockId: string;

  private content: string;

  private levelsDescription: string;

  constructor(blockId: string, content: string, levelsDescription: string) {
    this.blockId = blockId;
    this.content = content;
    this.levelsDescription = levelsDescription;
  }

  public createRulesWindow(level: Level): void {
    const block4 = document.getElementById(this.blockId);

    if (!block4) {
      return;
    }

    const h2 = document.querySelector('#levelTitle');

    if (h2 instanceof HTMLElement) {
      const levelIndex = levelsData.indexOf(level);

      h2.textContent = `Level ${levelIndex + 1} of ${levelsData.length}`;
      block4.appendChild(h2);
    } else {
      console.error("Element with ID 'levelTitle' not found");
    }

    const levelInfo = document.createElement('div');

    levelInfo.classList.add('levels');

    block4.appendChild(levelInfo);
    block4.appendChild(resetButton);

resetButton.addEventListener('click', handleResetButtonClick);

    const rules = document.createElement('div');

    rules.classList.add('rules');
    rules.textContent = level.levelsDescription;

    levelInfo.appendChild(rules);

    const levelsContainer = document.createElement('div');

    levelsContainer.classList.add('levels-container');

    if (h2) h2.appendChild(levelsContainer);

    levelsData.forEach((levelData, index) => {
      const levelElement = document.createElement('div');

      levelElement.classList.add('level');
      levelElement.textContent = `${index + 1}`;

      if (levelData.completed) {
        levelElement.classList.add('completed');
      }

      if (levelData.hintUsed) {
        levelElement.classList.add('hint-used');
      }

      if (levelData === level) {
        levelElement.classList.add('current-level');
      }

      levelElement.addEventListener('click', () => {
        const selectedLevel = levelsData[index];

        if (rules) {
          rules.remove();
        }
        this.createRulesWindow(selectedLevel);
        updateBlock1(selectedLevel, index);
        console.log(index);
        updateBlock3(selectedLevel, index);
      });

      levelsContainer.appendChild(levelElement);
    });
  }
}
