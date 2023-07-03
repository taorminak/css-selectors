import "./app.module.css";
import createLayout from "./components/Block1: Task layout/layout";
import { Layout } from "./types/index";
import Level, { levels } from "../models/LevelModel";
import fromLocalStorage from "../levelsService/levelsService";
import { handleHelpButtonClick } from "./components/Help Button/help";
import "./components/Help Button/help.css";
import {
  level1,
  createBlock1,
  createBlock3,
  createLevelsList,
  userInput,
  buttonEnter,
} from "./components/GameScreen/GameScreen";
import Markup from "./components/Block3: Code block/code";

fromLocalStorage();

const helpButton = document.getElementById("helpButton");

if (helpButton) {
  helpButton.classList.add("help-button");
  helpButton.addEventListener("click", handleHelpButtonClick);
}

export const block1: Layout = createBlock1();
export const block3 = createBlock3();

const levelsList = createLevelsList(level1);

let currentLevelIndex: number;

export function getCurrentLevelIndex(): number {
  const storedCurrentLevelIndex = localStorage.getItem("currentLevelIndex");

  if (storedCurrentLevelIndex) {
    currentLevelIndex = parseInt(storedCurrentLevelIndex, 10);
  } else {
    currentLevelIndex = 0;
  }

  return currentLevelIndex;
}

function updateCurrentLevelIndex(index: number): void {
  localStorage.setItem("currentLevelIndex", index.toString());
}

export function updateBlock1(level: Level, index: number): void {
  const newBlock1: Layout = createLayout(level.layout);

  if (block1) {
    block1.element.innerHTML = newBlock1.element.innerHTML || "";
  }

  updateCurrentLevelIndex(index);
}

export function updateBlock3(level: Level, index: number): void {
  const htmlViewer = document.querySelector("html-viewer");

  if (htmlViewer) htmlViewer.innerHTML = "";

  const markup = new Markup();

  markup.generate(level);

  const updatedLevel: Level = { ...level };

  updatedLevel.correctSelector = levels[index].correctSelector;
}

export function updateBlock4(level: Level, index: number): void {
  const rules = document.getElementsByClassName("levels")[0] as HTMLElement;

  if (rules) {
    rules.remove();
  }
  levelsList.createRulesWindow(level);

  const updatedLevel: Level = { ...level };

  updatedLevel.correctSelector = levels[index].correctSelector;
}

export function updateBlocks(level: Level, index: number): void {
  updateCurrentLevelIndex(index);
  updateBlock1(level, index);
  updateBlock3(level, index);
  updateBlock4(level, index);
}

const victoryMessage = document.createElement("div");

victoryMessage.textContent =
  "Congratulations, pirate! You have completed all levels.";
victoryMessage.style.display = "none";
victoryMessage.classList.add("victory");

export function updateStoredLevelData(): void {
  const storedData = localStorage.getItem("levelsData");

  if (storedData) {
    const parsedData: Level[] = JSON.parse(storedData);

    levels.forEach((level, index) => {
      const storedLevel = parsedData[index];

      if (level.completed !== storedLevel.completed) {
        storedLevel.completed = level.completed;
      }

      if (level.hintUsed !== storedLevel.hintUsed) {
        storedLevel.hintUsed = level.hintUsed;
      }
    });

    localStorage.setItem("levelsData", JSON.stringify(parsedData));
  } else {
    localStorage.setItem("levelsData", JSON.stringify(levels));
  }
}

export function handleButtonClick(): void {
  const selector = userInput.getCode();

  getCurrentLevelIndex();

  const level = levels[currentLevelIndex];

  console.log(selector, level.correctSelector);

  if (level.correctSelector === selector) {
    if (currentLevelIndex < levels.length - 1) {
      block1.element.classList.add("correct-animation");
      userInput.input.value = "";
      level.completed = true;
      setTimeout(() => {
        block1.element.classList.remove("correct-animation");
        currentLevelIndex += 1;

        const nextLevel = levels[currentLevelIndex];

        updateCurrentLevelIndex(currentLevelIndex);
        updateStoredLevelData();

        updateBlocks(nextLevel, currentLevelIndex);
      }, 500);
    } else if (currentLevelIndex === levels.length - 1) {
      userInput.input.value = "";
      block1.element.classList.add("correct-animation");
      level.completed = true;
      victoryMessage.style.display = "block";
    }
  } else {
    console.error("Invalid selector");
    block1.element.classList.add("incorrect-animation");
    userInput.input.value = "";
    setTimeout(() => {
      block1.element.classList.remove("incorrect-animation");
    }, 500);
  }
}

const cssView = document.querySelector("editor-window");

if (cssView) cssView.appendChild(victoryMessage);

function handleKeyPress(event: KeyboardEvent): void {
  if (event.key === "Enter") {
    handleButtonClick();
  }
}

buttonEnter?.addEventListener("click", handleButtonClick);
document.addEventListener("keypress", handleKeyPress);
