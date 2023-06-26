import './layout.scss';
import {
  Container, Chest, TreasureMap, Treasure, Telescope,
} from '../../types/index';

export function createContainer(): Container {
  const container: Container = {
    element: document.createElement('div'),
  };

  return container;
}

export function createChest(): Chest {
  const chest: Chest = {
    element: document.createElement('chest'),
  };

  return chest;
}

export function createMap(): TreasureMap {
  const map: TreasureMap = {
    element: document.createElement('map'),
  };

  return map;
}

export function createTreasure(): Treasure {
  const treasure: Treasure = {
    element: document.createElement('treasure'),
  };

  return treasure;
}

export function createTelescope(): Telescope {
  const telescope: Telescope = {
    element: document.createElement('telescope'),
  };

  return telescope;
}
