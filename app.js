const nextButton = document.querySelector('.next-button');
// Svg mazes
const levelOne = document.querySelector('.level-one'),
  levelTwo = document.querySelector('.level-two');
// UI Messages
const uiLevel = document.querySelector('.ui-level'),
  uiMessage = document.querySelector('.ui-message');

const collisionCheck = (value) => {
  if (value === 'maze-border') alert('You lost the game...try again.');
  if (value === 'finish') {
    nextButton.style.opacity = 1;
    nextButton.style.pointerEvents = 'all';
    levelOne.style.pointerEvents = 'none';
  }
};

window.addEventListener('mousemove', (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

nextButton.addEventListener('click', () => {
  levelOne.style.display = 'none';
  levelTwo.style.display = 'block';
  nextButton.style.opacity = 0;
  nextButton.style.pointerEvents = 'none';
  uiLevel.textContent = 'Level 2';
  uiMessage.textContent = 'One more to go...';
});
