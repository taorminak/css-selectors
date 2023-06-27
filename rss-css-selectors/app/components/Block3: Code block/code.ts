import './code.css';

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

  public generate():void {
    const htmlViewer = document.querySelector('.html-viewer');
    const island = this.createNode('div');

    island.textContent = '<div class="island">';

    island.classList.add('island');

    const chest = this.createNode('div');

    chest.classList.add('chest');

    chest.textContent = '<chest class="chest"></chest>';
    island.appendChild(chest);

    const island2 = this.createNode('div');

    island2.textContent = '</div>';
    island.appendChild(island2);

    htmlViewer?.appendChild(island);
  }
}
