const btnBeginner = document.querySelector("#btn_beginner");
const btnMedium = document.querySelector("#btn_medium");
const btnHard = document.querySelector("#btn_hard");
const btnMaster = document.querySelector("#btn_master");

const cards = document.querySelectorAll('.card');

btnBeginner.addEventListener('click', filterCards);
btnMedium.addEventListener('click', filterCards);
btnHard.addEventListener('click', filterCards);
btnMaster.addEventListener('click', filterCards);

function filterCards(event) {
  const level = event.target.dataset.level;

  cards.forEach((card) => {
    if (card.querySelector(`.difficulty-${level}`)) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}