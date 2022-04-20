const img = document.querySelector(`img`);
const input = document.querySelector(`.input`);

img.addEventListener(`click`, (e) => {
  e.preventDefault();
  input.classList.toggle(`toggle`);
});
