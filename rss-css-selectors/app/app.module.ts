import './app.module.css';
import {
  createContainer, createChest, createMap, createTreasure, createTelescope,
} from './components/Block1: Task layout/layout';
import {
  Container, Chest, TreasureMap, Treasure, Telescope,
} from './types/index';
import Input from './components/Block2: Input window/input';

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
const newElement = document.createElement('textarea');

newElement.appendChild(userInput.input);
block2?.appendChild(newElement);
