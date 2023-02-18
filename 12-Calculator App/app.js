//------------Bill------------
const bill = document.querySelector('#inp_bill');
bill.value = '';

bill.addEventListener('change', function() {
  const billValue = parseFloat(bill.value) || 0;
  console.log(`bill value: ${billValue}`);
});

//------------Buttons------------
const tipButtons = document.querySelectorAll('.tip_btn', '.tip_btn_2');
let selectedButton = null;
let tipPercentage = 0;

const customTipButton = document.querySelector('#tip6');
const customTipInput = document.querySelector('#inp_tip6');

//------------People------------
const people = document.querySelector('#inp_people');
people.value = ''

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

//------------Calculate------------
const result = document.querySelector('.amount_right h1');
const total = document.querySelector('.total_right h1');

const tipResult = function() {
  const billValue = parseFloat(bill.value) || 0;
  const peopleValue = parseFloat(people.value) || 1;
  const calculateTip = (billValue * tipPercentage) / peopleValue;
  result.innerHTML = calculateTip.toFixed(2);
};

const totalResult = function() {
  const billValue = parseFloat(bill.value) || 0;
  const peopleValue = parseFloat(people.value) || 1;
  const calculateTotal = (billValue * (1+tipPercentage)) / peopleValue;
  total.innerHTML = calculateTotal.toFixed(2);
}

bill.addEventListener('change', tipResult);
people.addEventListener('change', tipResult);
bill.addEventListener('change', totalResult);
people.addEventListener('change', totalResult);

for (const button of tipButtons) {
  button.addEventListener('click', function() {
    for (const btn of tipButtons) {
      btn.classList.remove('clicked');
    }
    button.classList.add('clicked');
    tipPercentage = parseFloat(button.dataset.tip);
    console.log('Tip Percentage: ${tipPercentage}');
    tipResult();
    totalResult();
    }
  );
}

customTipButton.addEventListener('click', function() {
  for (const btn of tipButtons) {
    btn.classList.remove('clicked');
  }
  tipPercentage = parseFloat(customTipInput.value) / 100;
  console.log('Tip Percentage: ${tipPercentage}');
  tipResult();
  totalResult();
});

//------------Reset------------
const resetButton = document.querySelector('#reset');

const checkResetButton = function() {
  if (bill.value !== '' || people.value !== '') { 
    //clickable
    resetButton.style.backgroundColor = '';
    resetButton.style.cursor = '';
  } else {
    //non-clickable
    resetButton.style.backgroundColor = 'hsl(172, 67%, 45%, 0.3)';
    resetButton.style.cursor = 'not-allowed';
  }
};

resetButton.addEventListener('click', function(event) {
  if (bill.value === '' && people.value === '') {
    event.preventDefault();
  } else {
    bill.value = '';
    people.value = '';
    customTipInput.value = '';
    for (const button of tipButtons) {
      button.classList.remove('clicked');
    }
    customTipButton.classList.remove('clicked');
    tipResult();
    totalResult();
  }
  checkResetButton();
});

bill.addEventListener('change', checkResetButton);
people.addEventListener('change', checkResetButton);

