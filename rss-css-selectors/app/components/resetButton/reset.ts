import './reset.css';

export const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.textContent = 'Take to the Seas with a Fresh Start';

export function handleResetButtonClick(): void {
  localStorage.clear();
  window.location.reload();
}

resetButton.addEventListener('click', handleResetButtonClick);
