import './app.module.css';
import createLayout from './components/Block1: Task layout/layout';
import {
  Layout,
} from './types/index';
import Input from './components/Block2: Input window/input';
import Markup from './components/Block3: Code block/code';
import LevelsList from './components/Block4: Levels list/levelsList';
import Level, { levels } from '../models/LevelModel';
import fromLocalStorage from '../levelsService/levelsService';

fromLocalStorage();

const level1 = levels[0];
const block1: Layout = createLayout(level1.layout);

const appContainer: Layout = block1;
export default appContainer;

const block2 = document.getElementById('block2');

const userInput = new Input();

userInput.input.setAttribute('placeholder', 'Type a CSS selector here');
userInput.input.setAttribute('type', 'text');

const cssView = document.createElement('div');

cssView.classList.add('editor-window');
block2?.appendChild(cssView);
cssView.appendChild(userInput.input);

const buttonEnter = document.createElement('div');

buttonEnter.classList.add('button-enter');
buttonEnter.textContent = 'Enter';

let currentLevelIndex = 0;

const styles = document.createElement('div');

styles.classList.add('styles');
styles.innerHTML = '{ <br> /* Styles would go there */ <br> }';

const chooseLevel = document.createElement('div');

chooseLevel.classList.add('choose-level');
chooseLevel.textContent = ' /* Type a number to skip to a level */ ';

cssView.appendChild(buttonEnter);
cssView.appendChild(styles);
cssView.appendChild(chooseLevel);

const block3 = document.getElementById('block3');
const htmlViewer = document.createElement('div');

htmlViewer.classList.add('html-viewer');

block3?.appendChild(htmlViewer);

const markup = new Markup();

markup.generate(level1);

export const levelsList = new LevelsList('block4', 'Select elements by their type', 'Type Selector. Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.');

levelsList.createRulesWindow(level1);

export function updateBlock1(level: Level):void {
  const newBlock1: Layout = createLayout(level.layout);

  if (block1) {
    block1.element.innerHTML = newBlock1.element.innerHTML || '';
  }
}

export function updateBlock3(level: Level): void {
  htmlViewer.innerHTML = '';
  markup.generate(level);
}

function updateBlock4(level: Level): void {
  const rules = document.getElementsByClassName('levels')[0] as HTMLElement;

  if (rules) {
    rules.remove();
  }
  levelsList.createRulesWindow(level);
}

export function updateBlocks(level: Level): void {
  updateBlock1(level);
  updateBlock3(level);
  updateBlock4(level);
}

const victoryMessage = document.createElement('div');

victoryMessage.textContent = 'Congratulations! You have completed all levels.';
victoryMessage.style.display = 'none';
victoryMessage.classList.add('victory');

function updateCurrentLevelIndex(index: number): void {
  localStorage.setItem('currentLevelIndex', index.toString());
  localStorage.setItem('levelsData', JSON.stringify(levels));
}

function handleButtonClick(): void {
  const selector = userInput.getCode();

  const level = levels[currentLevelIndex];

  if (level.correctSelector === selector) {
    if (currentLevelIndex < levels.length - 1) {
      currentLevelIndex += 1;

      const nextLevel = levels[currentLevelIndex];

      userInput.input.value = '';

      block1.element.classList.add('correct-animation');
      level.completed = true;
      updateCurrentLevelIndex(currentLevelIndex);
      setTimeout(() => {
        updateBlocks(nextLevel);
        block1.element.classList.remove('correct-animation');
      }, 500);
    } else {
      victoryMessage.style.display = 'block';
      userInput.input.value = '';
    }
  } else {
    console.error('Invalid selector');
    block1.element.classList.add('incorrect-animation');
    userInput.input.value = '';
    setTimeout(() => {
      block1.element.classList.remove('incorrect-animation');
    }, 500);
  }
}
cssView.appendChild(victoryMessage);

function handleKeyPress(event: KeyboardEvent): void {
  if (event.key === 'Enter') {
    handleButtonClick();
  }
}

buttonEnter.addEventListener('click', handleButtonClick);
document.addEventListener('keypress', handleKeyPress);
