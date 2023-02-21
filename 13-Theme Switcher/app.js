const toggleSwitch = document.querySelector('#mode-toggle');
const currentMode = localStorage.getItem('mode');

if (currentMode === 'dark') {
  document.body.classList.add('dark-mode');
  toggleSwitch.checked = true;
}

function switchMode(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light');
  }
}

toggleSwitch.addEventListener('change', switchMode);