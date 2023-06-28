import "./game-screen.css";
import {
  createContainer, createChest, createMap, createTreasure, createTelescope, createCoins, createKey, createHat,
} from '../Block1: Task layout/layout';
import {
  Container, Chest, TreasureMap, Treasure, Telescope, Coins, Key, Hat,
} from '../../types/index';
import Input from '../Block2: Input window/input';
import Markup from '../Block3: Code block/code';
import LevelsList from '../Block4: Levels list/levelsList';
import Level, { levels } from '../../models/LevelModel';

const block1: Container = createContainer();
const chest: Chest = createChest();

block1.element.appendChild(chest.element);

const map: TreasureMap = createMap();

// block1.element.appendChild(map.element);

const treasure: Treasure = createTreasure();

// block1.element.appendChild(treasure.element);

const telescope: Telescope = createTelescope();

// block1.element.appendChild(telescope.element);

const coins: Coins = createCoins();

// block1.element.appendChild(coins.element);

const key: Key = createKey();

// block1.element.appendChild(key.element);

const hat: Hat = createHat();

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


export const htmlViewer = document.createElement('div');

htmlViewer.classList.add('html-viewer');

const level1 = levels[0];
const markup = new Markup();

markup.generate(level1);

export const levelsList = new LevelsList('block4', 'Select elements by their type');

levelsList.createRulesWindow();
