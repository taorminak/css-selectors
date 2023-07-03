import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import Level, { levels } from '../../../models/LevelModel';
import 'highlight.js/styles/github.css';
import "./highlighter.css";

hljs.registerLanguage('javascript', javascript);
console.log(hljs);
console.log(javascript);

export default function highlightElement(targetElement: HTMLElement, level: Level, language: string): void {
  if (targetElement) {
    targetElement.classList.add('highlight');

    const targetString = targetElement.innerHTML;
    const decodedTargetString = targetString.replace(/&lt;/g, '').replace(/&gt;/g, '').replace(/&nbsp;/g, '').replace(/\//g, '');

    console.log(decodedTargetString);

    const compareLayout = level.layout;
    const index = compareLayout.indexOf(decodedTargetString);

    console.log(index);

    if (index !== -1) {
      const block1 = document.getElementById('block1');
      const elementToHighlight = block1?.getElementsByTagName(decodedTargetString);
      const wordCount = decodedTargetString.split(' ').length;
      if (wordCount===1 && elementToHighlight && elementToHighlight.length > 0) {
        const element = elementToHighlight[0] as HTMLElement;
console.log(element)
        element.classList.add('zoomed');
        setTimeout(() => {
            element.classList.remove('zoomed');
          }, 1000);
        //hljs.highlightElement(element);
      }
    } else {
      console.log('Element not found');
    }
  }
}
