import './layout.css';
import {
  Container, Chest, TreasureMap, Treasure, Telescope, Coins, Key, Hat,
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

export function createCoins(): Coins {
  const coins: Coins = {
    element: document.createElement('coins'),
  };

  return coins;
}

export function createKey(): Key {
  const key: Key = {
    element: document.createElement('key'),
  };

  return key;
}

export function createHat(): Hat {
  const hat: Hat = {
    element: document.createElement('hat'),
  };

  return hat;
}
