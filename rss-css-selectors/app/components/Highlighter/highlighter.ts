import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import Level, { levels } from "../../../models/LevelModel";
import "highlight.js/styles/github.css";
import "./highlighter.css";

hljs.registerLanguage("javascript", javascript);

export default function highlightElement(
  targetElement: HTMLElement,
  level: Level,
  language: string
): void {
  if (targetElement) {
    targetElement.classList.add("highlight");
    setTimeout(() => {
      targetElement.classList.remove("zoomed");
    }, 1000);

    const codeString = level.htmlCode;
    const elements = codeString.split("<br>");

    const targetString = targetElement.innerHTML;
    const index = elements.indexOf(targetString);

    console.log(index);

    const comparedLayout = level.layout;

    const layoutElements = comparedLayout
      .split(/<|>/)
      .filter((element) => element.trim() !== "");

    const highlightElement = layoutElements[index];

    console.log(highlightElement);

    const island = document.querySelector(".island");
    const elementsToHighlight = island?.querySelectorAll("*");

    console.log(elementsToHighlight);

    if (elementsToHighlight) {
      for (let i = 0; i < elementsToHighlight.length; i++) {
        if (
          elementsToHighlight &&
          index > 0 &&
          index <= elementsToHighlight.length
        ) {
          const element = elementsToHighlight[index - 1] as HTMLElement;

          element.classList.add("zoomed");

          setTimeout(() => {
            element.classList.remove("zoomed");
            codeDisplay.remove();
          }, 1000);
          // hljs.highlightElement(element);
        }
      }
      const codeDisplay = document.createElement("div");

      codeDisplay.classList.add("code-display");

      const string = targetString;

      codeDisplay.innerHTML = string;

      const block1 = document.getElementById("block1");

      if (island) island.appendChild(codeDisplay);

      setTimeout(() => {
        codeDisplay.remove();
      }, 1000);
    }
  }
}
