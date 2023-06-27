import './app.module.css';
import {
  createContainer, createChest, createMap, createTreasure, createTelescope,
} from './components/Block1: Task layout/layout';
import {
  Container, Chest, TreasureMap, Treasure, Telescope,
} from './types/index';
import Input from './components/Block2: Input window/input';
import Markup from './components/Block3: Code block/code';
import LevelsList from './components/Block4: Levels list/levelsList';

const block1: Container = createContainer();
const chest: Chest = createChest();

block1.element.appendChild(chest.element);

const map: TreasureMap = createMap();

block1.element.appendChild(map.element);

const treasure: Treasure = createTreasure();

block1.element.appendChild(treasure.element);

const telescope: Telescope = createTelescope();

block1.element.appendChild(telescope.element);

const appContainer: Container = block1;
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

markup.generate();

const levelsList = new LevelsList('block4', 'Select elements by their type');

levelsList.createRulesWindow();
