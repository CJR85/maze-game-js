const nextButton = document.querySelector('.next-button');
// Svg mazes
const levelOne = document.querySelector('.level-one'),
  levelTwo = document.querySelector('.level-two');

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
