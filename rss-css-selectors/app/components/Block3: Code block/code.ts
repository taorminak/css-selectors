import './code.css';
import Level from '../../models/LevelModel';

export default class Markup {
  private createNode(tag: string, className?: string, id?: string): HTMLElement {
    const node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (id) {
      node.id = id;
    }

    return node;
  }

  public generate(level: Level): void {
    const htmlViewer = document.querySelector('.html-viewer');
    const island = this.createNode('div');

    island.innerHTML = level.htmlCode;

    htmlViewer?.appendChild(island);
  }
}
