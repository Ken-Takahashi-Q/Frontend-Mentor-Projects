let btn = document.querySelector(".test-btn");

function first(e, name) {
    e.preventDefault();
    btn.innerHTML = name;
    btn.style.backgroundColor = "yellow";
}

function second() {
    btn.style.backgroundColor = "red";
}

function btnClick(e) {
    e.preventDefault();
    first();
    second();
}

btn.addEventListener("click", first(e, "Dinal"));