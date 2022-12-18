let num = document.querySelector(".numberChild");
let decrease = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".inc");
let btns = document.querySelectorAll("button");

const decreaseFun = () => (num.textContent -= 1);

const resetFun = () => (num.textContent = 0);

const increaseFun = () => (num.textContent = +num.textContent + 1);

const check = () =>
  (document.querySelector(".numberChild").style.color =
    +num.textContent > 0 ? "green" : +num.textContent < 0 ? "red" : "#222");

decrease.addEventListener("click", decreaseFun);
reset.addEventListener("click", resetFun);
increase.addEventListener("click", increaseFun);
btns.forEach((i) => i.addEventListener("click", check));
