import './game-screen.css';
import Level, { levels } from '../../../models/LevelModel';
import createLayout from '../Block1: Task layout/layout';
import { Layout } from '../../types';
import Input from '../Block2: Input window/input';
import Markup from '../Block3: Code block/code';
import LevelsList from '../Block4: Levels list/levelsList';

export const level1 = levels[0];

export function createBlock1(): Layout {
  const block1: Layout = createLayout(level1.layout);

  return block1;
}

const block2 = document.getElementById('block2');

export const userInput = new Input();

userInput.input.setAttribute('placeholder', 'Type a CSS selector here');
userInput.input.setAttribute('type', 'text');

export const cssView = document.createElement('div');

cssView.classList.add('editor-window');
block2?.appendChild(cssView);
cssView.appendChild(userInput.input);

export const buttonEnter = document.createElement('div');

buttonEnter.classList.add('button-enter');
buttonEnter.textContent = 'Sail In';

const styles = document.createElement('div');

styles.classList.add('styles');
styles.innerHTML = '{ <br> /* Styles would go there */ <br> }';

cssView.appendChild(buttonEnter);
cssView.appendChild(styles);

export function createBlock3(): Markup {
  const block3 = document.getElementById('block3');

  const htmlViewer = document.createElement('div');

  htmlViewer.classList.add('html-viewer');

  if (block3) block3.appendChild(htmlViewer);

  const markup = new Markup();

  markup.generate(level1);

  return markup;
}

export function createLevelsList(level: Level): LevelsList {
  const levelsList = new LevelsList(
    'block4',
    'Select elements by their type',
    'Type Selector. Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
  );

  levelsList.createRulesWindow(level);

  return levelsList;
}
