import "./reset.css";

export const resetButton = document.createElement('button');
resetButton.classList.add("reset-button");
resetButton.textContent = 'Start from scratch';

export function handleResetButtonClick(): void {
  localStorage.clear();
  window.location.reload();
}

resetButton.addEventListener('click', handleResetButtonClick);
