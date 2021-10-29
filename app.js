const collisionCheck = (value) => {
  if (value === 'maze-border') alert('You lost the game...try again.');
};

window.addEventListener('mousemove', (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});
