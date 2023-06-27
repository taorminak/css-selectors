import './levels.css';

export default class LevelsList {
  private blockId: string;

  private content: string;

  constructor(blockId: string, content: string) {
    this.blockId = blockId;
    this.content = content;
  }

  public createRulesWindow(): void {
    const block4 = document.getElementById(this.blockId);

    if (!block4) {
      return;
    }

    const levels = document.createElement('div');

    levels.classList.add('levels');
    block4.appendChild(levels);

    const rules = document.createElement('div');

    rules.classList.add('rules');
    rules.textContent = this.content;

    levels.appendChild(rules);
  }
}
