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

let currentLevelIndex: number;

function getCurrentLevelIndex(): number {
  const storedCurrentLevelIndex = localStorage.getItem('currentLevelIndex');

  if (storedCurrentLevelIndex) {
    currentLevelIndex = parseInt(storedCurrentLevelIndex, 10);
  } else {
    currentLevelIndex = 0;
  }

  return currentLevelIndex;
}

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

export function updateBlock1(level: Level, index: number):void {
  const newBlock1: Layout = createLayout(level.layout);

  if (block1) {
    block1.element.innerHTML = newBlock1.element.innerHTML || '';
  }
  level.correctSelector = levels[index].correctSelector;
  console.log(index);
  updateCurrentLevelIndex(index);
}

export function updateBlock3(level: Level, index: number): void {
  htmlViewer.innerHTML = '';
  markup.generate(level);
  level.correctSelector = levels[index].correctSelector;
}

function updateBlock4(level: Level, index: number): void {
  const rules = document.getElementsByClassName('levels')[0] as HTMLElement;

  if (rules) {
    rules.remove();
  }
  levelsList.createRulesWindow(level);
  level.correctSelector = levels[index].correctSelector;
}

export function updateBlocks(level: Level, index: number): void {
  updateCurrentLevelIndex(index);
  updateBlock1(level, index);
  updateBlock3(level, index);
  updateBlock4(level, index);
}

const victoryMessage = document.createElement('div');

victoryMessage.textContent = 'Congratulations! You have completed all levels.';
victoryMessage.style.display = 'none';
victoryMessage.classList.add('victory');

function updateCurrentLevelIndex(index: number): void {
  localStorage.setItem('currentLevelIndex', index.toString());
}

export function updateStoredLevelData(): void {
  localStorage.setItem('levelsData', JSON.stringify(levels));
}

export function handleButtonClick(): void {
  const selector = userInput.getCode();

  getCurrentLevelIndex();

  const level = levels[currentLevelIndex];

  if (level.correctSelector === selector) {
    if (currentLevelIndex < levels.length - 1) {
      currentLevelIndex += 1;

      const nextLevel = levels[currentLevelIndex];

      userInput.input.value = '';

      block1.element.classList.add('correct-animation');
      level.completed = true;
      updateCurrentLevelIndex(currentLevelIndex);
      updateStoredLevelData();

      updateBlocks(nextLevel, currentLevelIndex);

      setTimeout(() => {
        block1.element.classList.remove('correct-animation');
      }, 500);
    } else if (currentLevelIndex === levels.length - 1) {
      userInput.input.value = '';
      block1.element.classList.add('correct-animation');
      console.log(level);
      level.completed = true;
      victoryMessage.style.display = 'block';
      console.log('cc');
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
