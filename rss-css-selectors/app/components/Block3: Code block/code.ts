import './code.css';
import Level from '../../../models/LevelModel';
import highlightElement from '../Highlighter/highlighter';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

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

    if (htmlViewer) htmlViewer.innerHTML = '';

    const island = this.createNode('div');

    const lines = level.htmlCode.replace(/&lt;br&gt;/g, '<br>').split('<br>');

    lines.forEach((line) => {
      const div = this.createNode('div');

      div.innerHTML = line;
      div.addEventListener('mouseover', () => {
        highlightElement(div, level, 'javascript');
      });
      div.addEventListener('mouseout', () => {
        div.classList.remove('highlight');
      });
      island.appendChild(div);
    });

    htmlViewer?.appendChild(island);
  }
}
