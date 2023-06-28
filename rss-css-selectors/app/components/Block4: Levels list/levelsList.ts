import './levels.css';
import Level, { levels as levelsData } from '../../models/LevelModel';

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

    const rules = document.createElement('div');

    rules.classList.add('rules');
    rules.textContent = level.levelsDescription;

    levelInfo.appendChild(rules);
  }
}
