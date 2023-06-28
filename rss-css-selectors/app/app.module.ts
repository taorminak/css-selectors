import './app.module.css';
import createLayout from './components/Block1: Task layout/layout';
import {
  Layout,
} from './types/index';
import Input from './components/Block2: Input window/input';
import Markup from './components/Block3: Code block/code';
import LevelsList from './components/Block4: Levels list/levelsList';
import { levels } from './models/LevelModel';

const level1 = levels[0];
const block1: Layout = createLayout(level1.layout);

const appContainer: Layout = block1;
export default appContainer;

const userInput = new Input();
const block2 = document.getElementById('block2');
const newElement = document.createElement('input');

newElement.setAttribute('placeholder', 'Type a CSS selector here');
newElement.setAttribute('type', 'text');
newElement.appendChild(userInput.input);

const cssView = document.createElement('div');

cssView.classList.add('editor-window');
block2?.appendChild(cssView);

const buttonSend = document.createElement('div');

buttonSend.classList.add('button-send');
buttonSend.textContent = 'send';

let currentLevelIndex = 0;

function handleButtonClick(): void {
  const selector = userInput.getCode();

  const level = levels[currentLevelIndex];

  if (level.correctSelector === selector) {
    if (currentLevelIndex < levels.length - 1) {
      currentLevelIndex = +1;

      const nextLevel = levels[currentLevelIndex];

      console.log(nextLevel);
    } else {
      console.log('Congratulations! You have completed all levels.');
    }
  } else {
    console.error('Invalid selector');
  }
}

buttonSend.addEventListener('click', handleButtonClick);

const styles = document.createElement('div');

styles.classList.add('styles');
styles.innerHTML = '{ <br> /* Styles would go there */ <br> }';

const chooseLevel = document.createElement('div');

chooseLevel.classList.add('choose-level');
chooseLevel.textContent = ' /* Type a number to skip to a level */ ';
cssView.appendChild(newElement);
cssView.appendChild(buttonSend);
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
