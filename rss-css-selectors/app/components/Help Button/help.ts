import "./help.css"
import { levels } from "../../../models/LevelModel";
import { getCurrentLevelIndex } from "../../app.module";
import { userInput } from "../../app.module";

export function handleHelpButtonClick(): void {
    const currentLevelIndex = getCurrentLevelIndex();
    const level = levels[currentLevelIndex];
    const selector = level.correctSelector;
  
    printTextWithAnimation(selector, userInput.input);
  }

export function printTextWithAnimation(text: string, element: HTMLInputElement): void {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(intervalId);
        return;
      }
  
      const currentText = text.slice(0, currentIndex + 1);
      element.value = currentText;
      currentIndex++;
    }, 100); 
  }