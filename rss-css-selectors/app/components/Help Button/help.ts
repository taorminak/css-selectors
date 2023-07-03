import './help.css';
import { levels } from '../../../models/LevelModel';
import { getCurrentLevelIndex, updateStoredLevelData } from '../../app.module';
import { userInput } from '../GameScreen/GameScreen';

export function printTextWithAnimation(
  text: string,
  element: HTMLInputElement,
): void {
  let currentIndex = 0;
  const intervalId = setInterval(() => {
    if (currentIndex >= text.length) {
      clearInterval(intervalId);

      return;
    }

    const currentText = text.slice(0, currentIndex + 1);

    element.value = currentText;

    currentIndex += 1;
  }, 100);
}

export function handleHelpButtonClick(): void {
  const currentLevelIndex = getCurrentLevelIndex();
  const level = levels[currentLevelIndex];
  const selector = level.correctSelector;

  printTextWithAnimation(selector, userInput.input);
  level.hintUsed = true;
  updateStoredLevelData();
}
