//------------Bill------------
const bill = document.querySelector('#inp_bill');

bill.addEventListener('change', function() {
  const billValue = parseFloat(bill.value);
  console.log(`bill value: ${billValue}`);
});

//------------Buttons------------
const tipButtons = document.querySelectorAll('.tip_btn', '.tip_btn_2');
let selectedButton = null;

for (const button of tipButtons) {
  button.addEventListener('click', function() {
    for (const btn of tipButtons) {
      btn.classList.remove('clicked');
    }
    button.classList.add('clicked');
    const tipPercentage = parseFloat(button.dataset.tip);
    console.log(`Tip Percentage: ${tipPercentage}`);
  });
}

const customTipButton = document.querySelector('#tip6');
const customTipInput = document.querySelector('#inp_tip6');

customTipButton.addEventListener('click', function() {
  for (const btn of tipButtons) {
    btn.classList.remove('clicked');
  }
  const tipPercentage = parseFloat(customTipInput.value) / 100;
  console.log(`Tip Percentage: ${tipPercentage}`);
});


//------------People------------
const people = document.querySelector('#inp_people');

people.addEventListener('change', function() {
  const peopleValue = parseFloat(people.value);
  console.log(`people value: ${peopleValue}`);
});

//------------Can't be zero------------
const err = document.querySelector('.err');

err.style.display = 'none';

people.addEventListener('input', function() {
  if (this.value == 0) {
    err.style.display = 'block';
  } else {
    err.style.display = 'none';
  }
});

//------------Reset------------
const resetButton = document.querySelector('#reset');

const checkResetButton = function() {
  if (bill.value == 0 || people.value == 0) {
    resetButton.style.backgroundColor = 'hsl(172, 67%, 45%, 0.3)';
    resetButton.style.cursor = 'not-allowed';
  } else {
    resetButton.style.backgroundColor = '';
    resetButton.style.cursor = '';
  }
};

checkResetButton();

bill.addEventListener('change', checkResetButton);
people.addEventListener('change', checkResetButton);

